import React from 'react'

type FormGroupProps = {
    space?: 'sm' | 'md' | 'lg';
    children:React.ReactNode;
}


export const FormGroup = ({
    space ='md',
    children
}:FormGroupProps) => {
    return (
        <div className={`${space === 'sm' ? 'space-y-1' : space === 'md' ? 'space-y-2' : 'space-y-4'}`}>
            {children}
        </div>
    )
}
