import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Container = ({ children, className }) => {
    return (
        <div className={twMerge('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}>
            {children}
        </div>
    );
};

export const Section = ({ children, className, id }) => {
    return (
        <section id={id} className={twMerge('py-16 md:py-24', className)}>
            {children}
        </section>
    );
};
