import { motion } from 'framer-motion';

const skills = [
  "React",
  "TypeScript",
  "Java",
  "Spring Boot",
  "AWS",
  "SQL",
  "Python",
  "Docker",
  "Terraform",
  "Kubernetes",
  "Node.js",
  "Git",
];

export function Skills() {
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
        <h1 className="text-2xl font-bold text-white mb-6">Skills</h1>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.3, 
                delay: 0.1 + index * 0.05,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ 
                scale: 1.1,
                backgroundColor: "rgba(59, 130, 246, 0.3)"
              }}
              className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-sm font-medium text-white hover:bg-blue-500/30 hover:border-blue-400/50 transition-all cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

