import { useState, useEffect, useCallback } from 'react'
import { moduleS } from './data/cards/s'
import { moduleC } from './data/cards/c'
import { moduleO } from './data/cards/o'
import { moduleP } from './data/cards/p'
import { moduleE } from './data/cards/e'
import { CardContainer } from './components/CardContainer'
import { ModuleSelector } from './components/ModuleSelector'
import { SplashScreen } from './components/SplashScreen'
import { ModuleComplete } from './components/ModuleComplete'

const modulesMap = {
  S: moduleS,
  C: moduleC,
  O: moduleO,
  P: moduleP,
  E: moduleE,
}

function App() {
  const [screen, setScreen] = useState('splash') // 'splash' | 'selector' | 'module' | 'complete'
  const [selectedModule, setSelectedModule] = useState(null)
  const [currentCard, setCurrentCard] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [checklistStates, setChecklistStates] = useState({})
  const [completedModules, setCompletedModules] = useState([])

  // Touch handling for swipe
  const [touchStart, setTouchStart] = useState(null)

  const currentModule = selectedModule ? modulesMap[selectedModule] : null
  const totalCards = currentModule?.cards.length || 0

  // Initialize checklist state for module
  useEffect(() => {
    if (selectedModule && !checklistStates[selectedModule]) {
      const actionCard = modulesMap[selectedModule].cards.find(c => c.type === 'action')
      if (actionCard) {
        setChecklistStates(prev => ({
          ...prev,
          [selectedModule]: new Array(actionCard.checklistItems.length).fill(false)
        }))
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedModule])

  const goNext = useCallback(() => {
    if (currentCard < totalCards - 1) {
      setCurrentCard(currentCard + 1)
    } else {
      // Last card - show completion screen
      if (!completedModules.includes(selectedModule)) {
        setCompletedModules(prev => [...prev, selectedModule])
      }
      setScreen('complete')
    }
  }, [currentCard, totalCards, selectedModule, completedModules])

  const goPrev = useCallback(() => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1)
    }
  }, [currentCard])

  const goBack = () => {
    setSelectedModule(null)
    setCurrentCard(0)
    setScreen('selector')
  }

  const handleStartFromSplash = () => {
    setScreen('selector')
  }

  const handleBackToSplash = () => {
    setScreen('splash')
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

  // Touch handlers for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX)
  }

  const handleTouchEnd = (e) => {
    if (touchStart === null) return

    const touchEnd = e.changedTouches[0].clientX
    const diff = touchStart - touchEnd

    // 50px threshold
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goNext()
      } else {
        goPrev()
      }
    }

    setTouchStart(null)
  }

  const handleQuizAnswer = (answer) => {
    setQuizAnswers(prev => ({ ...prev, [selectedModule]: answer }))
  }

  const handleChecklistChange = (newState) => {
    setChecklistStates(prev => ({ ...prev, [selectedModule]: newState }))
  }

  const appStyle = {
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    touchAction: 'pan-y',
  }

  // Splash Screen
  if (screen === 'splash') {
    return <SplashScreen onStart={handleStartFromSplash} />
  }

  // Module Selector
  if (screen === 'selector') {
    return (
      <ModuleSelector
        onSelectModule={handleSelectModule}
        completedModules={completedModules}
        onBack={handleBackToSplash}
      />
    )
  }

  // Module Complete Screen
  if (screen === 'complete') {
    return (
      <ModuleComplete
        moduleId={selectedModule}
        onNextModule={handleNextModule}
        onBackToOverview={handleBackToOverview}
      />
    )
  }

  // Module Cards
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
