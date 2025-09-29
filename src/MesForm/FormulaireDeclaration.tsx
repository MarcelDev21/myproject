import { useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

const required = "Ce champ est obligatoire"

type declaration = {
    picture: string,
    comment : string,
    status: string,
    company:  company,
    child: child,
    secondParent: secondParent
}

type address = {
    street: string,
    zip: string,
    city: string
}

type company = {
    name: string,
    address: address
}

type child = {
    gender: string,
    firstName: string,
    lastname: string,
    birthdate: string,
    birthtime: string
}

type secondParent = {
    firstName: string,
    lastname: string,
    gender: string,
    email: string,
    phone: string
}

const schema = yup
  .object({
    picture: yup.string().required(required),
    comment: yup.string().required(required),
    status: yup.string().required(required).default("NEW"),
    company: yup.object({
        name: yup.string().required(required),
        address: yup.object({
            street: yup.string().required(required),
            zip: yup.string().required(required),
            city: yup.string().required(required),
        })
    }),
    child: yup.object({
        gender: yup.string().required(required),
        firstName: yup.string().required(required),
        lastname: yup.string().required(required),
        birthdate: yup.string().required(required),
        birthtime: yup.string().required(required),
    }),
    secondParent: yup.object({
        gender: yup.string().required(required),
        firstName: yup.string().required(required),
        lastname: yup.string().required(required),
        email: yup.string().required(required),
        phone: yup.string().required(required),
    })
  })
  .required()

function FormulaireDeclaration() {
    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema), })
    const onSubmit: SubmitHandler<declaration> = (data) => console.log(data)

  return (
    <div>
        <form
        className="flex flex-col"
        onSubmit={handleSubmit(onSubmit)}>
                <label>Picture: </label>
                <input
                type="text"
                className="border border-gray-400 w-100 rounded-md p-1 my-1"
                {...register("comment")} />
                <p>{errors.comment?.message}</p>

                <label>Comment :</label>
                <input
                type="text"
                className="border border-gray-400 w-100 rounded-md p-1 my-1"
                {...register("picture")} />
                <p>{errors.picture?.message}</p>

                {/* Company */}
                    <p>Information sur le lieu de Naissance</p>
                    <label>Company name: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1 my-1"
                    {...register("company.name")} />
                    <p>{errors.company?.name?.message}</p> 

                    <label>Company address.street: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1 my-1"
                    {...register("company.address.street")} />
                    <p>{errors.company?.address?.street?.message}</p> 

                    <label>Company address.zip: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1 my-1"
                    {...register("company.address.zip")} />
                    <p>{errors.company?.address?.zip?.message}</p> 

                    <label>Company address.city: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1 my-1"
                    {...register("company.address.city")} />
                    <p>{errors.company?.address?.city?.message}</p> 
               


                {/* child */}
                    <p>Information sur l'Enfant</p>
                    <label>child gender: </label>
                    <select
                    className="border border-gray-400 w-100 rounded-md p-1 my-1"
                    {...register("child.gender")} >
                        <option value="">Selectionner une Valeur</option>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                    </select>
                    <p>{errors.child?.gender?.message}</p> 

                    <label>child firstName: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1"
                    {...register("child.firstName")} />
                    <p>{errors.child?.firstName?.message}</p> 

                    <label>child lastname: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1 "
                    {...register("child.lastname")} />
                    <p>{errors.child?.lastname?.message}</p> 

                   <div className="flex justify-between my-5">
                    <div>
                        <label>child birthdate: </label>
                        <input
                        type="date"
                        className="border border-gray-400 rounded-md p-1 "
                        {...register("child.birthdate")} />
                        <p>{errors.child?.birthdate?.message}</p> 
                    </div>

                    <div>
                        <label>child birthtime: </label>
                            <input
                            type="time"
                            className="border border-gray-400 rounded-md p-1 "
                            {...register("child.birthtime")} />
                            <p>{errors.child?.birthtime?.message}</p> 
                    </div>
                   </div>


                {/* second parent */}
                    <p>Information sur le second parent</p>
                    <label>secondParent gender: </label>
                    <select
                    className="border border-gray-400 w-100 rounded-md p-1 my-1"
                    {...register("secondParent.gender")} >
                        <option value="">Selectionner une Valeur</option>
                        <option value="Homme">Homme</option>
                        <option value="Femme">Femme</option>
                    </select>
                    <p>{errors.secondParent?.gender?.message}</p> 

                    <label>secondParent firstName: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1"
                    {...register("secondParent.firstName")} />
                    <p>{errors.secondParent?.firstName?.message}</p> 

                    <label>secondParent lastname: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1 "
                    {...register("secondParent.lastname")} />
                    <p>{errors.secondParent?.lastname?.message}</p> 

                    <label>secondParent email: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1"
                    {...register("secondParent.email")} />
                    <p>{errors.secondParent?.email?.message}</p> 

                    <label>secondParent phone: </label>
                    <input
                    type="text"
                    className="border border-gray-400 w-100 rounded-md p-1"
                    {...register("secondParent.phone")} />
                    <p>{errors.secondParent?.phone?.message}</p> 

                 


                <button 
                type="submit"
                className="mt-5 flex justify-center bg-green-700 px-7 py-1 text-white text-xl rounded-md hover:bg-green-800">
                    Creer Nouvelle Déclaration
                </button>
        </form>
    </div>
  )
}

export default FormulaireDeclaration
