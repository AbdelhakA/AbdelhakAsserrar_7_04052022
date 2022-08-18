import React from 'react';
import { useState, useEffect } from 'react';
import { POST } from '../Components/api_links/Axios';
import endpoints from '../Components/api_links/endpoints';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import './PagesCSS/SignIn.css';
// import Logo from '../component/Logo';

export default function SignIn() {


 const [errorData, setErrorData] = useState("")
 const navigate = useNavigate()
 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm()

 useEffect(()=>{
   localStorage.clear()
 },[])

 const onSubmit = async data => {

// try catch est l'equivalant de promine.then().catch()

  try {

    const response = await POST(endpoints.USER_SIGNIN, {
      email: data.email,
      password: data.password
    })

    if (response.status === 200) {
      let token = response.data.token
      let user = JSON.stringify(response.data)
      // console.log(token + user)
      localStorage.setItem("Token", token)
      localStorage.setItem("user", user)
      localStorage.setItem("userId", response.data.userId)
      navigate("/")
    }
    console.log(localStorage)

  } catch(error) {
    console.log("error",error)
    if (error.response && error.response.data && error.response.data.error) {
      setErrorData(error.response.data.error)
    } else {
      setErrorData("Erreur connexion");
    }
  }

 }

 return (
   <div className="container">
     {/* <Logo /> */}
     <div className="container-form">
       <div className="form">
         <h4>Welcome back!</h4>
       </div>
       <form onSubmit={handleSubmit(onSubmit)} className="connect-form">
         
         {/* email */}
         <label htmlFor="email">E-mail:</label>
         <br />
           <input
             type="email"
             {...register("email", {
               required: true,
               message: "Vous devez entrer une adresse mail valide",
             })}
           />
           {errors.email && <span>{errors.email.message}</span>}
         <br />

         {/* password */}
         <label htmlFor="password">Mot de passe:</label>
         <br />
           <input 
             type="password"
             {...register("password", {
               required: true,
                 pattern: {
                   value: /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[.!@#$%^&*]).{6,64})$/,
                   message: "Vous devez entrer un mot de passe valide. Votre mot de passe doit contenir au moins 6 caractères, une majuscule, une minuscule, un chiffre et un caractère spécial",
                 },
             })}
           />
           {errors.password && <span>{errors.password.message}</span>}
         <br />
           <input type="submit" value="Se connecter" className="button" />
         <span className="error-message">{errorData}</span>
       </form>
       <div className="pos-form">
         <Link to = "/signup" style={{textDecoration:"none"}}>Pas encore de compte ?</Link>
       </div>
     </div>
   </div>
 )
            }