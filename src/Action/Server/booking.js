"use server";

import { authOptions } from "@/lib/authOptions";
import { collection, dbConnect } from "@/lib/dbConnect"
import { getServerSession } from "next-auth";

const bookingcollection= dbConnect(collection.BOOKING)

export const bookingfrom=async(formdata)=>{
  const session= await getServerSession(authOptions);
  const email=session?.user?.email
    const bookingdata = { ...formdata,email:email, date: new Date().toISOString(), status: 'pending' };

    const result= await bookingcollection.insertOne(bookingdata)

     return {
    success: result.insertedId.toString(),
  };
}

export const mybooking=async()=>{
  const session= await getServerSession(authOptions);
  const email=session?.user?.email
  const result= await bookingcollection.find({email}).toArray()
  return result
} 