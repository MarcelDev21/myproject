
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'
import Banner from '../Components/Banner'
import { useContext } from 'react'
import { GlobalApplicationContext } from '../Context/Global/GlobalApplicationContextProvider'

function PublicLayout() {

    const {state} = useContext(GlobalApplicationContext)

  return (
    <div>
      {
            state.token ? <Navigate to= "/private/declarations"/> : 
            (
             <section className='min-h-screen grid md:grid-cols-2'>
                <Banner/>
                <Outlet/>
             </section>
            )
      }
    </div>
  )
}

export default PublicLayout
