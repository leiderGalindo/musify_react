import { Sidebar } from './components/Sidebar'
import { Aside } from './components/Aside'
import { Content } from './components/Content'
import './App.css'

function App() {
  return (
    <div className='MainContainerApp'>
      <Sidebar />
      <Content />
      <Aside />
    </div>
  )
}

export default App
