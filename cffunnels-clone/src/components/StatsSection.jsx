import React from 'react';
import { Container, Section } from './ui/Layout';

const stats = [
    { value: '92%', label: 'Conversion Increase', description: 'Average uplift for our clients' },
    { value: '67%', label: 'Better Engagement', description: 'With AI-personalized flows' },
    { value: '3x', label: 'Faster Launch', description: 'Compared to custom dev' },
    { value: '500+', label: 'Happy Clients', description: 'Across 20+ industries' },
];

const StatsSection = () => {
    return (
        <Section className="bg-gradient-to-br from-primary-dark via-primary to-secondary py-20 text-white relative overflow-hidden">
            {/* Abstract background shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
                <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl" />
                <div className="absolute top-1/2 right-0 w-64 h-64 rounded-full bg-purple-400 blur-3xl" />
            </div>

            <Container className="relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/20">
                    {stats.map((stat, index) => (
                        <div key={index} className="pt-8 lg:pt-0 px-4">
                            <div className="text-5xl md:text-6xl font-bold mb-2 tracking-tight">{stat.value}</div>
                            <div className="text-lg font-semibold text-blue-100 mb-1">{stat.label}</div>
                            <div className="text-sm text-blue-200/80">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default StatsSection;
