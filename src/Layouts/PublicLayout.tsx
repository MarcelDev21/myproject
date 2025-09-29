
import { Outlet } from 'react-router'
import { Navigate } from 'react-router'
import Banner from '../Components/Banner'

function PublicLayout() {

    const token = ""

  return (
    <div>
      {
            token ? <Navigate to= "/private/declarations"/> : 
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
