import { useState } from 'react'

import './App.css'
import Users from './components/users';
import MouseTracker from './components/pointer'

import RenderMovies from './components/ListMovies'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <form>
        <input type="text" placeholder='Ingresar Pelicula' />
        <button type='subbit'>Buscar</button>
      </form>



      <h1>Bienvenido!!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam blanditiis cumque necessitatibus voluptate praesentium, corrupti aliquid perspiciatis quos molestias adipisci aut fugiat quisquam. Iusto ullam laboriosam unde eveniet laudantium?</p>

      <section className="card">
        <Users  />
        <MouseTracker />
      </section>


      <main>

        <h5>Peliculas aquí:</h5>
        <RenderMovies />

      </main>




    </>
  )
}

export default App
