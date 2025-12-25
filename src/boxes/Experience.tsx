// Create a marquee box that displays experience items horizontally using Magic UI

import { motion } from 'framer-motion';
import { cn } from "../lib/utils";
import { Marquee } from "../components/magicui/marquee";

const reviews = [
  {
    name: "Software Engineer",
    username: "JPMorgan Chase",
    body: "Currently building enterprise-grade applications on the Syndication Trades team",
    img: "/jpmorgan-logo.jpg",
  },
  {  
    name: "M.S. in Computer Science",
    username: "University of Texas at Austin",
    body: "Specialized in AI and Machine Learning.",
    img: "/ut-austin-logo.jpg",
  },
  {
    name: "B.S. in Computer Science",
    username: "University of Texas at Dallas",
    body: "Focus on data structures and algorithms & software engineering",
    img: "/utd-logo.jpg",
  },
]


const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string
  name: string
  username: string
  body: string
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-white/20 backdrop-blur-sm border-white/30 hover:bg-white/30 transition-colors"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <img 
          className="rounded-lg object-contain bg-white/10 p-1.5" 
          width="56" 
          height="56" 
          alt={`${username} logo`} 
          src={img}
          style={{ minWidth: '56px', minHeight: '56px' }}
          onError={(e) => {
            // Fallback to a placeholder if logo fails to load
            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(username)}&background=3b82f6&color=fff&size=128`;
          }}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-white/70">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white/90">{body}</blockquote>
    </figure>
  )
}

export function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.15 }}
      whileHover={{ scale: 1.02 }}
      className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900 p-8 shadow-2xl cursor-pointer h-full border border-blue-700/30"
    >
      <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-slate-800 via-blue-800 to-slate-900">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[shimmer_3s_linear_infinite]" />
      </div>
      <div className="relative z-10 h-full flex flex-col">
        <h1 className="text-2xl font-bold text-white mb-4">Experience</h1>
        <div className="relative flex w-full items-center justify-center overflow-hidden flex-1">
          <Marquee pauseOnHover className="[--duration:20s]">
            {reviews.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-slate-800/50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-slate-800/50"></div>
        </div>
      </div>
    </motion.div>
  )
}
