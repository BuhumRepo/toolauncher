import React from 'react';
import { Container, Section } from './ui/Layout';
import Button from './ui/Button';
import { Check } from 'lucide-react';

const services = [
    {
        title: 'Custom Funnel Design',
        description: 'We create visually stunning, high-converting funnel designs tailored to your brand identity. No cookie-cutter templates.',
        features: ['Custom Graphics', 'Brand Alignment', 'UX/UI Optimization'],
        image: 'https://via.placeholder.com/600x400/E0E7FF/3730A3?text=Funnel+Design',
        reverse: false,
    },
    {
        title: 'Copywriting That Sells',
        description: 'Our expert copywriters craft compelling narratives that hook your audience and drive them to take action.',
        features: ['Sales Letters', 'Email Sequences', 'Ad Copy'],
        image: 'https://via.placeholder.com/600x400/F0F9FF/0369A1?text=Copywriting',
        reverse: true,
    },
    {
        title: 'Automation & Integration',
        description: 'Seamlessly connect your funnel with your favorite tools. From email marketing to payment gateways, we handle it all.',
        features: ['Zapier Integration', 'Email Automation', 'Payment Setup'],
        image: 'https://via.placeholder.com/600x400/F5F3FF/7C3AED?text=Automation',
        reverse: false,
    },
];

const ServicesSection = () => {
    return (
        <Section id="services" className="bg-white">
            <Container>
                <div className="text-center mb-20">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Services</span>
                    <h2 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Everything You Need to Scale</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Get a comprehensive suite of funnel services designed to maximize your ROI.
                    </p>
                </div>

                <div className="space-y-24">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`flex flex-col md:flex-row items-center gap-12 ${service.reverse ? 'md:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1 space-y-6">
                                <h3 className="text-3xl font-bold text-slate-900">{service.title}</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                                <ul className="space-y-3">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-slate-700">
                                            <span className="bg-green-100 text-green-600 rounded-full p-1 mr-3">
                                                <Check size={16} strokeWidth={3} />
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="pt-4">
                                    <Button variant="outline">Learn More</Button>
                                </div>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-slate-100 aspect-[4/3] group">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default ServicesSection;
