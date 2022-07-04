import React from 'react';
import { useState, useEffect } from 'react';
import { POST } from '../Components/api_links/Axios';
import endpoints from '../Components/api_links/endpoints';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import Logo from '../component/Logo';

export default function SignIn() {

 // useState
 const [errorData, setErrorData] = useState("")

 // usenavigate
 const navigate = useNavigate()

 // registrer + err
 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm()

 useEffect(()=>{
   localStorage.clear()
 },[])

 const onSubmit = data => {

   POST(endpoints.USER_LOGIN, {
     email: data.email,
     password: data.password
   })
   .then (response => {
     if (response.status === 401) {
       setErrorData("Vous n'êtes pas inscrit!");
     }
     if (response.status === 200) {
       let token = response.data.token
       let user = JSON.stringify(response.data)
       console.log(token + user)
       localStorage.setItem("Token", token)
       localStorage.setItem("user", user)
       localStorage.getItem("user", user, "token", token)
       navigate("/home")
     }
   })
   .catch (error => {
   });
 }

 return (
   <div className="container">
     {/* <Logo /> */}
     <div className="container-form">
       <div className="form">
         <h4>Login</h4>
       </div>
       <form onSubmit={handleSubmit(onSubmit)} className="connect-form">
         
         {/* email */}
         <label htmlFor="email">Email:</label>
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
           <input type="submit" value="Connection" className="button" />
         <span className="error-message">{errorData}</span>
       </form>
       <div className="pos-form">
         <Link to = "/signup" style={{textDecoration:"none"}}>Pas encore de compte ?</Link>
       </div>
     </div>
   </div>
 )
            }