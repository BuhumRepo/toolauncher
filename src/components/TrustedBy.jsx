import React from 'react';
import { Container, Section } from './ui/Layout';

const logos = [
    { name: 'Upwork', url: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Upwork-logo.svg' },
    { name: 'ClickFunnels', url: 'https://assets.website-files.com/62a83ee1f99c85775c7e1088/62a8435d038202022d4f524d_Clickfunnels-Logo.svg' },
    { name: 'Gopal', url: 'https://via.placeholder.com/150x50?text=GoHighLevel' }, // Placeholder for GHL
    { name: 'Client 4', url: 'https://via.placeholder.com/150x50?text=Company+A' },
    { name: 'Client 5', url: 'https://via.placeholder.com/150x50?text=Company+B' },
    { name: 'Client 6', url: 'https://via.placeholder.com/150x50?text=Company+C' },
];

const TrustedBy = () => {
    return (
        <div className="bg-white py-12 border-b border-slate-100">
            <Container>
                <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
                    Trusted by Clients Worldwide, including Top Brands
                </p>
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60">
                    {logos.map((logo, index) => (
                        <img
                            key={index}
                            src={logo.url}
                            alt={logo.name}
                            className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        />
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default TrustedBy;
