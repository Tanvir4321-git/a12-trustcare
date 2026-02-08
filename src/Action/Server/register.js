'use server'
import bcrypt from "bcryptjs";
const { dbConnect, collection } = require("@/lib/dbConnect");

  const usercollection=dbConnect(collection.USERS)

export const postusers= async(userdata)=>{

const {email,password}=userdata

   const isExist = await usercollection.findOne({ email });
  if (isExist) {
    return {
      message: 'email already exist',
    };
  }

  const userinfo={
    ...userdata,
    password: await bcrypt.hash(password,10)
  }

    const result= await usercollection.insertOne(userinfo)
    return {
    message: result,
  };
}