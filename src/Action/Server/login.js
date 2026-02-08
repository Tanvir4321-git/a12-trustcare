'use server'

import { collection, dbConnect } from "@/lib/dbConnect"
import bcrypt from "bcryptjs";


export const loginuser=async(userdata)=>{
    const {email,password}=userdata

   const user= await dbConnect(collection.USERS).findOne({email})
   if(!user){
    return null
   }

   const ismatched= await bcrypt.compare(password,user?.password)
   if(ismatched){
    return user
   }
 
   return   null
}