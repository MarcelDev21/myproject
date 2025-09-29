import { Navigate } from "react-router"
import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";

const REQUIRED = "Ce champ est requis"

type credentials = {
  email: string,
  password: string
}

const schema = yup
  .object({
    email: yup.string().required(REQUIRED),
    password: yup.string().required(REQUIRED),
  })
  .required()

function Login() {

  const [redirect, setRedirect] = useState(false)
  const {register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), })

  const onSubmit: SubmitHandler<credentials> = (data) => {
    setRedirect(true)
  }

  if(redirect === true){
    return <Navigate to="/private"/>
  }

  return (
    <div className='flex flex-col justify-center items-center md:justify-center'>
         <p className="md: flex justify-center">Bienvenue sur ma page de Connexion</p>
         <p>Affichage du text</p>

         <div className="py-5">
         <form
         onSubmit={handleSubmit(onSubmit)}>

          <input
          type = "email"
          id = "email"
          placeholder = "Entrer Votre Email"
          className="border border-gray-400 w-100 rounded-md p-1"
          {...register("email")} />
          <p className="text-red-600">{errors.email?.message}</p>

          <input
          id = "password"
          type = "password"
          placeholder="Entrer votre password"
          className="border border-gray-400 w-100 rounded-md p-1 my-5"
           {...register("password")} />
          <p className="text-red-600">{errors.password?.message}</p>

          <button 
          type="submit"
          className="flex justify-center bg-blue-400 px-7 py-1 text-white text-xl rounded-md hover:bg-blue-500">
            Connectez vous
          </button>
        </form>
 
         </div>
    </div>
  )
}

export default Login
