import { useState } from 'react'
import { Sidebar } from './components/sidebar'
import { Content } from './components/content'
import './App.css'

function App() {
  const [ statusMenu, setStatusMenu ] = useState('')
  const ClassMain = `MainContainerApp ${statusMenu}`

  // Cierra el menu movile
  const handelClickCloseMenu = (status = '') => {
    setStatusMenu(status)
  }
  
  return (
    <div className={ClassMain}>
      <Sidebar changeStatusMenu={handelClickCloseMenu} />
      <Content />
      
    </div>
  )
}

export default App
