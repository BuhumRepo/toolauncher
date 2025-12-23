import React from 'react';
import { Container } from './ui/Layout';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 py-16">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-white mb-6 block">CF Funnels</span>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            The ultimate marketplace for high-converting sales funnel templates. Scale your business faster with our proven designs.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-white transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Products</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Sales Funnels</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Webinar Funnels</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Course Funnels</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">eCommerce Templates</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Services</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Custom Design</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Funnel Audits</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Copywriting</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Automation Setup</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center"><Mail size={16} className="mr-2" /> support@cffunnels.com</li>
                            <li>123 Funnel Street, Suite 100<br />Austin, TX 78701</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <div>&copy; {new Date().getFullYear()} CF Funnels Templates. All rights reserved.</div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
