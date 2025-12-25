// create a box which will have github, linkedin, and mail icons
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export function ContactMe() {
    return (    
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 p-10 shadow-2xl cursor-pointer border border-blue-700/30"
        >
            <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shimmer_3s_linear_infinite]" />
            </div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6">
                <h1 className="text-3xl font-bold text-white mb-4">Contact Me</h1>
                <div className="flex items-center justify-center gap-10">
                    <motion.a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.3, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white hover:text-blue-400 transition-colors"
                    >
                        <FaGithub className="text-6xl" />
                    </motion.a>
                    <motion.a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.3, rotate: -5 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white hover:text-blue-400 transition-colors"
                    >
                        <FaLinkedin className="text-6xl" />
                    </motion.a>
                    <motion.a
                        href="mailto:your.email@example.com"
                        whileHover={{ scale: 1.3, rotate: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white hover:text-blue-400 transition-colors"
                    >
                        <FaEnvelope className="text-6xl" />
                    </motion.a>
                </div>
            </div>
        </motion.div>
    );
}