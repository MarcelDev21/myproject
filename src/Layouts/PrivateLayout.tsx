
import { Outlet } from 'react-router'
import Nav from '../Components/Nav'
import Header from '../Components/Header'
import { useContext } from 'react'
import { GlobalApplicationContext } from '../Context/Global/GlobalApplicationContextProvider'

function PrivateLayout() {

  const {state} = useContext(GlobalApplicationContext)

  return (
    <div>
      {
        state.token ? 
          <section>
            <Nav/>
            <main className='wrapper pl-64 pr-10'>
              <Header/>
              <Outlet/>
            </main>
          </section>
        : 
        <p>Il doit rediriger cer Connexion</p>
      }
    </div>
  )
}

export default PrivateLayout
