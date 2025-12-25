// Create a marquee box that displays experience items horizontally using Magic UI

import { motion } from 'framer-motion';
import { cn } from "../lib/utils";
import { Marquee } from "../components/magicui/marquee";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
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
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
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
