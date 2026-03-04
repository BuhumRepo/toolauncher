import React from 'react';
import { Container, Section } from './ui/Layout';
import Button from './ui/Button';
import { ArrowRight, BookOpen, Layers, Monitor, ShoppingBag, Layout, Code2, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    // Feature tags for the bottom cloud
    const tags = [
        { name: 'Modern Agency', icon: <Layers className="w-3 h-3" /> },
        { name: 'Design Studio', icon: <Monitor className="w-3 h-3" /> },
        { name: 'Corporate Agency', icon: <Layout className="w-3 h-3" /> },
        { name: 'Digital Marketing', icon: <ShoppingBag className="w-3 h-3" /> },
        { name: 'Creative Studio', icon: <BookOpen className="w-3 h-3" /> },
        { name: 'SaaS Platform', icon: <Cpu className="w-3 h-3" /> },
        { name: 'Startup Hub', icon: <Code2 className="w-3 h-3" /> },
    ];

    return (
        <Section className="relative pt-32 pb-20 min-h-screen flex flex-col justify-center overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[#0A0A0A] -z-20" />

            {/* Spotlight / Glow Effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-indigo-900/20 rounded-full blur-[120px] -z-10 opacity-60" />
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-2/3 h-[200px] bg-blue-600/10 rounded-full blur-[80px] -z-10" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] -z-10" />

            {/* Floating Side Images (Hidden on mobile, visible on lg) */}
            <motion.div
                initial={{ opacity: 0, x: -100, rotateY: 15 }}
                animate={{ opacity: 1, x: 0, rotateY: 15 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute left-[-10%] top-1/4 -z-10 hidden xl:block w-[500px] perspective-1000 origin-right"
            >
                <img
                    src="/src/assets/hero_screenshot_secondary_1.png"
                    alt="Dashboard UI Left"
                    className="w-full rounded-xl shadow-2xl border border-white/10 rotate-[-12deg] opacity-70 hover:opacity-100 transition-opacity duration-500 hover:scale-105"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 100, rotateY: -15 }}
                animate={{ opacity: 1, x: 0, rotateY: -15 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="absolute right-[-10%] top-1/4 -z-10 hidden xl:block w-[500px] perspective-1000 origin-left"
            >
                <img
                    src="/src/assets/hero_screenshot_secondary_2.png"
                    alt="Dashboard UI Right"
                    className="w-full rounded-xl shadow-2xl border border-white/10 rotate-[12deg] opacity-70 hover:opacity-100 transition-opacity duration-500 hover:scale-105"
                />
            </motion.div>

            <Container className="relative z-10">
                <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

                    {/* Top Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-8"
                    >
                        <span className="w-2 h-2 rounded-full bg-[#D3F36B] animate-pulse" />
                        <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">
                            Designed for SaaS & Dashboards
                        </span>
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-[1.1]"
                    >
                        All-in-one Solutions for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
                            SaaS Projects
                        </span>
                    </motion.h1>

                    {/* Subhead */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        50+ Admin panels, dashboards, and SaaS landing page templates.
                        Fully customizable, dark & light mode ready.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
                    >
                        <Button className="bg-[#D3F36B] hover:bg-[#c2e452] text-black border-0 px-8 py-4 h-auto text-base font-semibold rounded-xl transition-all hover:scale-105 shadow-[0_0_20px_rgba(211,243,107,0.3)]">
                            Explore Demos
                        </Button>
                        <Button variant="outline" className="bg-transparent border border-gray-700 text-white hover:bg-white/10 hover:border-gray-500 px-8 py-4 h-auto text-base font-medium rounded-xl">
                            Documentation
                        </Button>
                    </motion.div>

                    {/* Tag Cloud */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="flex flex-col items-center gap-4"
                    >
                        <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-2">
                            Included Categories
                        </span>
                        <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
                            {tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/5 text-slate-300 text-sm hover:bg-white/10 hover:border-white/10 transition-all cursor-default"
                                >
                                    {tag.icon}
                                    {tag.name}
                                </span>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </Container>
        </Section>
    );
};

export default Hero;
