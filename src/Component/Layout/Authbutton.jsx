'use client'

import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useState } from 'react';

const Authbutton = () => {
    const session=useSession()
  
    return (
        <div>
             {/* Login and Sign Up Buttons - Desktop */}

        {
            session.status==='authenticated'?  <button onClick={()=>signOut()} className='bg-[#2D5016] border-2 border-[#2D5016] text-white py-2 px-6 rounded-md font-medium hover:bg-[#1F3D0A] transition duration-200 shadow-md hidden md:flex'>
              Log out
            </button>:<><div className="hidden md:flex items-center space-x-3">
            <Link href='/login'>
            <button className=' border-2 border-[#2D5016] text-[#2D5016] py-2 px-6 rounded-md font-medium hover:bg-[#2D5016] hover:text-white transition duration-200'>
              Log In
            </button>
            </Link>
            <Link href='/register'>
            <button className='bg-[#2D5016] border-2 border-[#2D5016] text-white py-2 px-6 rounded-md font-medium hover:bg-[#1F3D0A] transition duration-200 shadow-md'>
              Sign Up
            </button>
            </Link>
          </div>
            </>
        }

        
           

          
        </div>
    );
};

export default Authbutton;