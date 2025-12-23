import React, { useState } from 'react';
import { Container } from './ui/Layout';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Demos', href: '#demos' },
        { name: 'Features', href: '#features' },
        { name: 'Documentation', href: '#docs' },
        { name: 'Support', href: '#support' },
    ];

    return (
        <nav className="fixed top-0 z-50 w-full bg-[#0B0F19]/80 backdrop-blur-md border-b border-white/5">
            <Container>
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 cursor-pointer flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-to-tr from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                            <div className="w-4 h-4 border-2 border-white rotate-45" />
                        </div>
                        <span className="text-xl font-bold text-white tracking-tight">
                            Evenza<span className="text-purple-500">.</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-white font-medium transition-colors text-sm"
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-6"
                            size="sm"
                        >
                            Purchase Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-slate-900"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="md:hidden py-4 space-y-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block text-slate-600 hover:text-primary font-medium px-2 py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-2">
                            <Button variant="primary" className="w-full">Get Started</Button>
                        </div>
                    </div>
                )}
            </Container>
        </nav>
    );
};

export default Navbar;
