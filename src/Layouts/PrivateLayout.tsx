
import { Outlet } from 'react-router'
import Nav from '../Components/Nav'
import Header from '../Components/Header'

function PrivateLayout() {

  const token = "token"

  return (
    <div>
      {
        token ? 
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
