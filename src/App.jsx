import './App.css'
import Hero from './components/Hero'
import './components/Navigationbar'
import Navigationbar from './components/Navigationbar'
import TasksList from './components/TasksList'

function App() {

  return (
    <div className='flex flex-col min-h-screen w-screen p-4 overflow-hidden'>
      <Navigationbar />
      <Hero />
      <TasksList />
      <TasksList />
      <TasksList />
      <TasksList />
    </div>
  )
}

export default App
