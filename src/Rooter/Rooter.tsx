import { Navigate, createBrowserRouter } from "react-router";
import App from "../App";
import PublicLayout from "../Layouts/PublicLayout";
import Login from "../Pages/Login";
import PrivateLayout from "../Layouts/PrivateLayout";
import Declarations from "../Pages/Declarations";
import Demandes from "../Pages/Demandes";
import Profils from "../Pages/Profils";
import Courrier from "../Pages/Courrier";
import NewDeclarations from "../Pages/NewDeclarations";
import NewAgent from "../Pages/NewAgent";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
          path: "/",
          element: <PublicLayout/>,
          children: [
              {
                index: true,
                element: <Navigate to="/Connexion"/>
              },
              {
                path : "/Connexion",
                element : <Login/>
              }
          ] 
        },
        {
          path: "private",
          element: <PrivateLayout/>,
          children : [
            {
              index : true,
              element: <Navigate to= "/private/declarations"/>
            },
            {
              path : "declarations",
              element : <Declarations/>
            },
            {
              path : "demandes",
              element : <Demandes/>
            },
            {
              path : "profiles",
              element : <Profils/>
            },
            {
              path : "notifications",
              element : <Courrier/>
            },
            {
              path : "newDeclarations",
              element : <NewDeclarations/>
            },
            {
              path : "newDeclarations",
              element : <NewDeclarations/>
            },
            {
              path : "newAgent",
              element : <NewAgent/>
            },
          ]
        }
      ],
    },
  ]);

export  {router}
