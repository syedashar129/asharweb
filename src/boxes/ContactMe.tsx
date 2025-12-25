// create a box which will have github and linkedin icons
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // import the icons
import { Link as ScrollLink } from 'react-scroll'; // import the link component

export function ContactMe() {
    return (    
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 p-8 shadow-2xl cursor-pointer border border-blue-700/30"
        >
            <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900">
                <div className="flex items-center justify-center">
                    <FaGithub className="text-white text-2xl" />
                    <ScrollLink to="github" smooth={true} duration={500}>
                        <FaGithub className="text-white text-2xl" />
                    </ScrollLink>
                    <ScrollLink to="linkedin" smooth={true} duration={500}>
                        <FaLinkedin className="text-white text-2xl" />
                    </ScrollLink>
                </div>
            </div>
            <div className="relative z-10">
                <h1 className="text-2xl font-bold text-white">Contact Me</h1>
                <p className="text-sm text-white">I am a software engineer with a passion for building web applications.</p>
            </div>
        </motion.div>
    );
}