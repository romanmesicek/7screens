import { useState, useEffect, useCallback } from 'react'
import { moduleS } from './data/cards/s'
import { moduleC } from './data/cards/c'
import { moduleO } from './data/cards/o'
import { moduleP } from './data/cards/p'
import { moduleE } from './data/cards/e'
import { moduleIntro } from './data/cards/intro'
import { CardContainer } from './components/CardContainer'
import { ModuleSelector } from './components/ModuleSelector'
import { SplashScreen } from './components/SplashScreen'
import { IntroSplashScreen } from './components/IntroSplashScreen'
import { TransitionScreen } from './components/TransitionScreen'
import { ModuleComplete } from './components/ModuleComplete'

const modulesMap = {
  S: moduleS,
  C: moduleC,
  O: moduleO,
  P: moduleP,
  E: moduleE,
}

function App() {
  // Deck-level state: 'intro' or 'scope'
  const [deck, setDeck] = useState('intro')
  const [screen, setScreen] = useState('splash') // 'splash' | 'module' | 'transition' | 'selector' | 'complete'
  const [selectedModule, setSelectedModule] = useState(null)
  const [currentCard, setCurrentCard] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [checklistStates, setChecklistStates] = useState({})
  const [completedModules, setCompletedModules] = useState([])

  // Touch handling for swipe
  const [touchStart, setTouchStart] = useState(null)

  // Resolve current module from either deck
  const currentModule = deck === 'intro'
    ? (screen === 'module' ? moduleIntro : null)
    : (selectedModule ? modulesMap[selectedModule] : null)
  const totalCards = currentModule?.cards.length || 0

  // Current module ID for quiz/checklist state keys
  const currentModuleId = deck === 'intro' ? '7S' : selectedModule

  // Initialize checklist state for module
  useEffect(() => {
    if (!currentModuleId || checklistStates[currentModuleId]) return
    const moduleData = deck === 'intro' ? moduleIntro : modulesMap[currentModuleId]
    const actionCard = moduleData?.cards.find(c => c.type === 'action')
    if (actionCard) {
      setChecklistStates(prev => ({
        ...prev,
        [currentModuleId]: new Array(actionCard.checklistItems.length).fill(false)
      }))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentModuleId, deck])

  const goNext = useCallback(() => {
    if (currentCard < totalCards - 1) {
      setCurrentCard(currentCard + 1)
    } else {
      // Last card reached
      if (deck === 'intro') {
        // Intro deck: go to transition screen
        setScreen('transition')
      } else {
        // SCOPE deck: show completion screen
        if (!completedModules.includes(selectedModule)) {
          setCompletedModules(prev => [...prev, selectedModule])
        }
        setScreen('complete')
      }
    }
  }, [currentCard, totalCards, deck, selectedModule, completedModules])

  const goPrev = useCallback(() => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
    }
  }, [currentCard])

  const goBack = useCallback(() => {
    if (deck === 'intro') {
      setSelectedModule(null)
      setCurrentCard(0)
      setScreen('splash')
    } else {
      setSelectedModule(null)
      setCurrentCard(0)
      setScreen('selector')
    }
  }, [deck])

  // --- Intro Deck Handlers ---
  const handleIntroStart = () => {
    setSelectedModule('7S')
    setCurrentCard(0)
    setScreen('module')
  }

  const handleSkipToScope = () => {
    setDeck('scope')
    setScreen('splash')
    setSelectedModule(null)
    setCurrentCard(0)
  }

  const handleTransitionContinue = () => {
    setDeck('scope')
    setScreen('splash')
    setSelectedModule(null)
    setCurrentCard(0)
  }

  const handleBackToIntro = () => {
    setDeck('intro')
    setScreen('splash')
    setSelectedModule(null)
    setCurrentCard(0)
  }

  // --- SCOPE Deck Handlers ---
  const handleBackToScopeSplash = () => {
    setScreen('splash')
    setSelectedModule(null)
    setCurrentCard(0)
  }

  const handleScopeStart = () => {
    setScreen('selector')
  }

  const handleSelectModule = (moduleId) => {
    setSelectedModule(moduleId)
    setCurrentCard(0)
    setScreen('module')
  }

  const handleNextModule = (moduleId) => {
    setSelectedModule(moduleId)
    setCurrentCard(0)
    setScreen('module')
  }

  const handleBackToOverview = () => {
    setSelectedModule(null)
    setCurrentCard(0)
    setScreen('selector')
  }

  // Keyboard navigation
  useEffect(() => {
    if (screen !== 'module') return

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault()
        goNext()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goPrev()
      } else if (e.key === 'Escape') {
        goBack()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [screen, goNext, goPrev, goBack])

  // Touch handlers for swipe (with angle check, velocity, and edge-guard)
  const handleTouchStart = (e) => {
    setTouchStart({
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now(),
    })
  }

  const handleTouchEnd = (e) => {
    if (!touchStart) return

    const dx = touchStart.x - e.changedTouches[0].clientX
    const dy = touchStart.y - e.changedTouches[0].clientY
    const dt = Date.now() - touchStart.time

    // Horizontal swipe: |dx| > 50px, more horizontal than vertical (1.5x),
    // within 300ms, and not from left edge (Android back gesture zone)
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5 && dt < 300 && touchStart.x > 30) {
      if (dx > 0) {
        goNext()
      } else {
        goPrev()
      }
    }

    setTouchStart(null)
  }

  const handleQuizAnswer = (answer) => {
    setQuizAnswers(prev => ({ ...prev, [currentModuleId]: answer }))
  }

  const handleChecklistChange = (newState) => {
    setChecklistStates(prev => ({ ...prev, [currentModuleId]: newState }))
  }

  const appStyle = {
    width: '100vw',
    height: '100svh',
    overflow: 'hidden',
    touchAction: 'pan-y',
  }

  // ========================
  // DECK: INTRO
  // ========================
  if (deck === 'intro') {
    if (screen === 'splash') {
      return (
        <IntroSplashScreen
          onStart={handleIntroStart}
          onSkip={handleSkipToScope}
        />
      )
    }

    if (screen === 'module') {
      return (
        <div
          style={appStyle}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <CardContainer
            module={moduleIntro}
            currentCard={currentCard}
            onPrev={goPrev}
            onNext={goNext}
            onBack={goBack}
            quizAnswer={quizAnswers['7S'] ?? null}
            onQuizAnswer={handleQuizAnswer}
            checklistState={checklistStates['7S'] || []}
            onChecklistChange={handleChecklistChange}
          />
        </div>
      )
    }

    if (screen === 'transition') {
      return <TransitionScreen onContinue={handleTransitionContinue} onBack={handleBackToIntro} />
    }
  }

  // ========================
  // DECK: SCOPE
  // ========================
  if (screen === 'splash') {
    return <SplashScreen onStart={handleScopeStart} onBack={handleBackToIntro} />
  }

  if (screen === 'selector') {
    return (
      <ModuleSelector
        onSelectModule={handleSelectModule}
        completedModules={completedModules}
        onBack={handleBackToScopeSplash}
      />
    )
  }

  if (screen === 'complete') {
    return (
      <ModuleComplete
        moduleId={selectedModule}
        onNextModule={handleNextModule}
        onBackToOverview={handleBackToOverview}
        completedModules={completedModules}
      />
    )
  }

  // SCOPE Module Cards
  return (
    <div
      style={appStyle}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <CardContainer
        module={currentModule}
        currentCard={currentCard}
        onPrev={goPrev}
        onNext={goNext}
        onBack={goBack}
        quizAnswer={quizAnswers[selectedModule] ?? null}
        onQuizAnswer={handleQuizAnswer}
        checklistState={checklistStates[selectedModule] || []}
        onChecklistChange={handleChecklistChange}
      />
    </div>
  )
}

export default App
