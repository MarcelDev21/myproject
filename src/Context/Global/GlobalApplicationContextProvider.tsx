import { createContext, useReducer } from "react"
import  GlobalApllicationReducer  from "./GlobalApplicationReducer"
import { stateInitial } from "./GlobalApplicationReducer"
import { SET_TOKEN } from "../MesConstantes"

/*type stateProps = {
  token: string,
  declaration: []
}*/

type Props = {
  state: any
  setToken : (data: any) => void
}

export const GlobalApplicationContext = createContext<Props>({} as Props)


function GlobalApplicationContextProvider({children}: any) {
  const [state, dispatch] = useReducer(GlobalApllicationReducer, stateInitial)

  const setToken = (data : any) => {
    dispatch({type: SET_TOKEN , data})
  }
  return (
    <GlobalApplicationContext.Provider value={{
        state,
        setToken
    }}>
      {children}
    </GlobalApplicationContext.Provider>
  )
}

export default GlobalApplicationContextProvider
