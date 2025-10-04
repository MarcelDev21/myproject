import { Outlet } from "react-router"
import GlobalApplicationContextProvider from "./Context/Global/GlobalApplicationContextProvider"
function App() {
  return (
    <GlobalApplicationContextProvider>
      <Outlet/>
    </GlobalApplicationContextProvider>
  )
}

export default App
