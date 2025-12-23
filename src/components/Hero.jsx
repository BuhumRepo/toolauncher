import React from 'react';
import { Container, Section } from './ui/Layout';
import Button from './ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    const techStack = [
        { name: 'HTML5', color: 'text-orange-500', icon: 'H5' },
        { name: 'CSS3', color: 'text-blue-500', icon: 'C3' },
        { name: 'W3C', color: 'text-blue-400', icon: 'W3' },
        { name: 'Bootstrap', color: 'text-purple-500', icon: 'B' },
        { name: 'Sass', color: 'text-pink-500', icon: 'S' },
    ];

    return (
        <Section className="pt-32 pb-20 overflow-hidden relative min-h-screen flex items-center">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid bg-fixed -z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19] via-transparent to-[#0B0F19] -z-10" />
            <div className="absolute inset-0 bg-grid-mask -z-10" />

            {/* Glowing Orbs */}
            <div className="absolute top-1/4 left-1/4 -z-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 -z-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[128px]" />

            <Container className="relative">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-medium mb-8">
                            Clean & Flexible responsive design
                        </span>

                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                            Event & Conference <br />
                            <span className="text-white/90">HTML Template</span>
                        </h1>

                        <p className="text-lg text-slate-400 mb-10 max-w-lg leading-relaxed">
                            A modern web app for Events & Conferences to simplify contact and boost attendee engagement. Deliver seamless experiences and showcase sessions, schedules and speakers with ease.
                        </p>

                        {/* Tech Stack Icons */}
                        <div className="flex gap-6 mb-12 items-center">
                            {techStack.map((tech) => (
                                <div key={tech.name} className={`text-2xl font-black ${tech.color} opacity-80 hover:opacity-100 transition-opacity cursor-default`}>
                                    {tech.icon}
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 px-8 py-6 text-base group">
                                Explore Demos <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button variant="outline" className="bg-white hover:bg-slate-50 text-slate-900 border-0 px-8 py-6 text-base">
                                Buy Template <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>

                    {/* Right Column: Visuals */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
                        animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        {/* Underlay Screenshot */}
                        <div className="absolute -top-12 -left-20 w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[-6deg] opacity-60 backdrop-blur-sm">
                            <img src="/src/assets/hero_screenshot_secondary_1.png" alt="App Mobile" className="w-full h-full object-cover" />
                        </div>

                        <div className="absolute top-20 -right-20 w-[400px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl rotate-[6deg] opacity-60 backdrop-blur-sm">
                            <img src="/src/assets/hero_screenshot_secondary_2.png" alt="App Desktop" className="w-full h-full object-cover" />
                        </div>

                        {/* Main Featured Screenshot */}
                        <div className="relative z-10 w-[500px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/20 shadow-[0_0_50px_rgba(139,92,246,0.3)] bg-[#0B0F19]">
                            <img src="/src/assets/hero_screenshot_main.png" alt="Main Dashboard" className="w-full h-full object-cover" />
                            {/* Glossy Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/10 via-transparent to-white/5 pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
};

export default Hero;
