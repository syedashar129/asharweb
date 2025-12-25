// make it blue gradient
import { motion } from 'framer-motion';

export function AboutMe() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 p-8 shadow-2xl cursor-pointer border border-blue-700/30"
        >
            <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shimmer_3s_linear_infinite]" />
            </div>
            <div className="relative z-10">
                <h1 className="text-2xl font-bold text-white">About Me</h1>
                <p className="text-sm text-white">I am a software engineer with a passion for building web applications.</p>
            </div>
        </motion.div>
    );
}