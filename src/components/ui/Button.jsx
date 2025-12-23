import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

    const variants = {
        primary: 'bg-primary hover:bg-primary-dark text-white focus:ring-primary',
        secondary: 'bg-secondary hover:bg-secondary-dark text-white focus:ring-secondary',
        outline: 'border-2 border-primary text-primary hover:bg-primary/5 focus:ring-primary',
        ghost: 'text-slate-600 hover:text-slate-900 hover:bg-slate-100',
        white: 'bg-white text-primary hover:bg-slate-50 focus:ring-white',
    };

    const sizes = {
        sm: 'px-4 py-1.5 text-sm',
        md: 'px-6 py-2.5 text-base',
        lg: 'px-8 py-3.5 text-lg',
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], sizes[size], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
