import React from 'react';
import { Container, Section } from './ui/Layout';
import Button from './ui/Button';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <Section className="pt-24 pb-32 overflow-hidden relative">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-gradient-to-r from-secondary/5 to-transparent blur-3xl opacity-50" />

            <Container className="relative text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-4xl"
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 font-semibold text-sm mb-6 border border-indigo-100">
                        #1 Marketplace for Sales Funnels
                    </span>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                        Transform Your Sales Strategy with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">High-Converting Templates</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Unlock business success with proven funnel templates. Seamlessly migrate, design, and convert with our expert solutions.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Button size="lg" className="w-full sm:w-auto group">
                            Explore Templates
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="w-full sm:w-auto">
                            View Our Services
                        </Button>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-slate-500 font-medium">
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> 100+ Ready Templates</span>
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> Expert Support</span>
                        <span className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-500" /> 11+ Years Experience</span>
                    </div>
                </motion.div>
            </Container>
        </Section>
    );
};

export default Hero;
