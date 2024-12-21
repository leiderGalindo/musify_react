import { useCallback, useState } from 'react'
import { Sidebar } from './components/Sidebar'
import { Aside } from './components/Aside'
import { Content } from './components/Content'
import './App.css'

function App() {
  const [statusMenu, setStatusMenu] = useState('')
  const ChangeMenuStatus = useCallback(() => {
    setStatusMenu((statusMenu === 'menuActive') ? '' : 'menuActive')
  }, [statusMenu])

  return (
    <div className='MainContainerApp'>
      <Sidebar changeMenu={ChangeMenuStatus} statusMenu={statusMenu}/>
      <Content changeMenu={ChangeMenuStatus} statusMenu={statusMenu}/>
      <Aside />
    </div>
  )
}

export default App
