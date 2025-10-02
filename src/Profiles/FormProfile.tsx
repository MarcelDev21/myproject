import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import ImageUpload from "../Components/ImageUpload";

const required = "Ce champ est obligatoire"

type role = {
    name: string,
    description?: string
}

type Profile = {
    firstname: string,
    lastname: string,
    email: string,
    phone: string,
    role: role,
    picture: string
}

const schema = yup.object({
    picture : yup.string().required(required),
    firstname : yup.string().required(required),
    lastname : yup.string().required(required),
    email : yup.string().required(required),
    phone : yup.string().required(required),
    role : yup.object({
        name: yup.string().required(required).default("Agent"),
    })
})

function FormProfile() {


    const { register,  handleSubmit, formState: { errors },  setValue} = useForm({ resolver: yupResolver(schema), })

    const onSubmit: SubmitHandler<Profile> = (data) => console.log(data)
  
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <ImageUpload onUploadComplete={(url) => setValue("picture", url)} />
      <p className="text-red-500">{errors.picture?.message}</p>
        <input 
          {...register("picture")} 
          placeholder="URL de l'image"
          className="border border-gray-400 w-100 rounded-md p-1 my-1"
        />
        <p className="text-red-500">{errors.picture?.message}</p>

        <input
        placeholder="First Name"
        className="border border-gray-400 w-100 rounded-md p-1 my-1"
        {...register("firstname")} />
        <p>{errors.firstname?.message}</p>

        <input
        placeholder="Last Name"
        className="border border-gray-400 w-100 rounded-md p-1 my-1"
        {...register("lastname")} />
        <p>{errors.lastname?.message}</p>


        <input
        placeholder="email"
        className="border border-gray-400 w-100 rounded-md p-1 my-1"
        {...register("email")} />
        <p>{errors.email?.message}</p>


        <input
        placeholder="phone"
        className="border border-gray-400 w-100 rounded-md p-1 my-1"
        {...register("phone")} />
        <p>{errors.phone?.message}</p>

        <button 
              type="submit"
              className="mt-5 flex justify-center bg-green-700 px-7 py-1 text-white text-xl rounded-md hover:bg-green-800">
                Creer Nouvelle Déclaration
        </button>
        </form>
    </div>
  )
}

export default FormProfile
