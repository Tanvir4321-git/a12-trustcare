'use client'

import { SessionProvider } from 'next-auth/react';
import React from 'react';

const NextauthProvider = ({children}) => {
    return (
        <SessionProvider>{children}</SessionProvider>
    );
};

export default NextauthProvider;