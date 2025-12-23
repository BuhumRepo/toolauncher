import React from 'react';
import { Container, Section } from './ui/Layout';
import { Star } from 'lucide-react';

const testimonials = [
    {
        name: 'Sarah Johnson',
        role: 'CEO, Digital Growth',
        image: 'https://randomuser.me/api/portraits/women/44.jpg',
        content: 'The templates from CF Funnels completely transformed our lead generation process. We saw a 40% increase in conversions within the first week.',
        rating: 5,
    },
    {
        name: 'Michael Chen',
        role: 'Founder, TechStart',
        image: 'https://randomuser.me/api/portraits/men/32.jpg',
        content: 'Incredible quality and attention to detail. The support team helped us customize the funnel to match our brand perfectly.',
        rating: 5,
    },
    {
        name: 'Jessica Williams',
        role: 'Marketing Director',
        image: 'https://randomuser.me/api/portraits/women/68.jpg',
        content: 'I was skeptical at first, but the results speak for themselves. These are not just pretty templates; they are built to sell.',
        rating: 5,
    },
];

const TestimonialsSection = () => {
    return (
        <Section className="bg-slate-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Join hundreds of successful businesses who have scaled with our funnels.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative">
                            {/* Quote icon decoration */}
                            <div className="absolute top-6 right-8 text-6xl text-slate-100 font-serif leading-none">"</div>

                            <div className="flex text-yellow-400 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={20} fill="currentColor" />
                                ))}
                            </div>

                            <p className="text-slate-700 mb-6 relative z-10">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover mr-4"
                                />
                                <div>
                                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </Section>
    );
};

export default TestimonialsSection;
