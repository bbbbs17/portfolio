"use client"

import { motion } from "framer-motion"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  // 숙련도 등급 반환 함수
  const getLevelTag = (level: number) => {
    if (level >= 70) return { label: "상", color: "bg-blue-500" }
    if (level >= 40) return { label: "중", color: "bg-yellow-500" }
    return { label: "하", color: "bg-red-500" }
  }

  const { label, color } = getLevelTag(level)

  return (
      <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          whileHover={{ y: -5 }}
      >
        <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-purple-500/50">
          <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />

          <div className="relative text-center">
            <div className="mb-2 font-medium text-lg">{name}</div>

            {/* 숙련도 라벨 표시 */}
            <div className="flex justify-center mt-2">
            <span
                className={`text-sm text-white px-2 py-0.5 rounded-full ${color}`}
            >
              {label}
            </span>
            </div>
          </div>
        </div>
      </motion.div>
  )
}
