import { useState } from 'react'

import './App.css'
import Users from './components/users';
import MouseTracker from './components/pointer'


function App() {
  const [count, setCount] = useState(0)

  const users = [
    {
      userName: 'midudev',
      name: 'Miguel Ángel Durán',
      isFollowing: true
    },
    {
      userName: 'pheralb',
      name: 'Pablo H.',
      isFollowing: false
    },
    {
      userName: 'PacoHdezs',
      name: 'Paco Hdez',
      isFollowing: true
    },
    {
      userName: 'TMChein',
      name: 'Tomas',
      isFollowing: false
    }
  ]

  return (
    <>
      <h1>Bienvenido!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam blanditiis cumque necessitatibus voluptate praesentium, corrupti aliquid perspiciatis quos molestias adipisci aut fugiat quisquam. Iusto ullam laboriosam unde eveniet laudantium?</p>

      <section className="card">
      
    <Users users={users}/>
    <MouseTracker />
      </section>




    </>
  )
}

export default App
