import { Link } from 'react-router'
import { Nav_Links } from '../Utils/data'

function Nav() {
  return (
    <nav className='bg-blue-300 w-56 z-10 shaddow flex flex-col justify-between fixed top-0 bottom-0 left-0'>
      <Link to ="/private/declarations" className='text-center py-2 text-xl font-extrabold text-white'>Les Nouvelles Vies</Link>
      <ul>
        {
            Nav_Links.map((item, index) => (
                <li key={index} className={`border-b border-gray-300 ${index === 0 ? "border-t" : null}`}><Link className="py-2 pl-2 hover:bg-gray-100 block" to={item.to}>{item.label}</Link></li>
            ))
        }
      </ul>
      <button
      type="button"
      className='bg-red-600 text-white font-bold py-2 hover:bg-red-700'> Deconnexion</button>
    </nav>
  )
}

export default Nav
