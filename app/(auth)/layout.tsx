import React, { FC } from 'react'

const AuthLayout: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className='flex justify-center pt-40'> {children}</div>
    )
}

export default AuthLayout