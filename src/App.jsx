import Card from './card.jsx';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <Card 
      img="https://avatars.githubusercontent.com/u/71905653"
      header="Franciszek Karbowniczek"
      languages={['C++', 'C', 'MySQL', 'Java', 'React', 'JavaScript', 'HTML', 'CSS', 'Python']}
      description={['Passion for clean code','drive to make an impact']}
      links={[
        { name: 'Instagram', url: 'https://www.instagram.com/karbowniczekfranciszek/', icon: 'instagram' },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/franciszek-karbowniczek-60b507367/', icon: 'linkedin' },
        { name: 'GitHub', url: 'https://github.com/Xmind404', icon: 'github' }
      ]}
      />
      
    </>
  )
}

export default App
// Author: Franciszek Karbowniczek (aka Xmind 404)

