import React from 'react';
import { Container, Section } from './ui/Layout';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const templates = [
    { id: 1, title: 'Webinar Funnel', category: 'Coaching', price: '$97', image: 'https://via.placeholder.com/400x300/F3F4F6/9CA3AF?text=Webinar+Funnel' },
    { id: 2, title: 'Lead Magnet', category: 'Agency', price: 'Free', image: 'https://via.placeholder.com/400x300/E5E7EB/9CA3AF?text=Lead+Magnet' },
    { id: 3, title: 'Course Launch', category: 'Education', price: '$147', image: 'https://via.placeholder.com/400x300/F3F4F6/9CA3AF?text=Course+Launch' },
    { id: 4, title: 'SaaS Landing', category: 'Software', price: '$127', image: 'https://via.placeholder.com/400x300/E5E7EB/9CA3AF?text=SaaS+Landing' },
    { id: 5, title: 'E-commerce Sales', category: 'Retail', price: '$197', image: 'https://via.placeholder.com/400x300/F3F4F6/9CA3AF?text=E-commerce' },
    { id: 6, title: 'Appointment Booking', category: 'Consulting', price: '$87', image: 'https://via.placeholder.com/400x300/E5E7EB/9CA3AF?text=Booking' },
];

const TemplatesSection = () => {
    return (
        <Section id="templates" className="bg-slate-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        High-Converting Funnel <span className="text-primary">Templates</span>
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Choose from our library of professionally designed templates optimized for conversion.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {templates.map((template, index) => (
                        <motion.div
                            key={template.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 group"
                        >
                            <div className="relative aspect-video overflow-hidden bg-slate-200">
                                {/* Placeholder for actual screenshot */}
                                <div className="absolute inset-0 bg-slate-200 flex items-center justify-center text-slate-400">
                                    Image
                                </div>
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Button variant="white" size="sm">Preview</Button>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{template.category}</span>
                                        <h3 className="text-xl font-bold text-slate-900 mt-1">{template.title}</h3>
                                    </div>
                                    <span className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-sm">
                                        {template.price}
                                    </span>
                                </div>
                                <Button variant="outline" size="sm" className="w-full">View Detais</Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <Button size="lg">View All Templates</Button>
                </div>
            </Container>
        </Section>
    );
};

export default TemplatesSection;
