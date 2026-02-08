import React from 'react';

const Title = ({children}) => {
    return (
        <h1 className="text-4xl text-[#2d5016] text-center md:text-5xl lg:text-6xl font-bold  leading-tight mb-6">{children}</h1>
    );
};

export default Title;