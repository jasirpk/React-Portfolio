import React, { useState } from 'react'
import { motion } from 'framer-motion';

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { name: 'Home', link: '#home' },
        { name: 'About', link: '#about' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' },

    ];

    const lightColors = {
        navBg: 'bg-linear-to-br from-orange-200 to-white',
        textPrimary: 'text-gray-900',
        textSecondary: 'text-gray-800',
        textHover: 'text-orange-500',
        textActive: 'text-orange-600',
        indicator: 'from-orange-500 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    }

    const darkColors = {
        navBg: 'bg-linear-to-br from-gray-700 to-black',
        textPrimary: 'text-white',
        textSecondary: 'text-gray-300',
        textHover: 'text-orange-400',
        textActive: 'text-orange-600',
        indicator: 'from-orange-500 to-amber-500',
        button: 'from-orange-500 to-amber-500',
    }
    const colors = darkMode ? darkColors : lightColors;

    const handleNavClick = (itemName) => {
        setActiveSection(itemName);
        setIsMenuOpen(false);
    }
    return (
        <div className='flex justify-center w-full fixed z-50 mt-4'>
            <motion.nav
                className={`flex items-center justify-center ${colors.navBg} backdrop-blur-lg rounded-2xl px-4 lg:px-4 lg:px-8 py-2 shadow-lg`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className='flex items-center justify-between w-full space-x-6 lg:space-x-8'>
                    {/* {Logo} */}
                    <motion.a href='/' whileHover={{ scale: 1.05 }}
                        className='flex items-center space-x-2'>
                        <span className={`text-xl font-bold ${colors.textPrimary}`}>
                            Portfolio<span className='text-orange-500'>.</span>
                        </span>

                    </motion.a>

                    {/* {navigation items} */}

                </div>
            </motion.nav>
        </div>
    )
}

export default Navbar