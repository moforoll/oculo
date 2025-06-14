import { ArrowRight } from "lucide-react"
import Link from "next/link"
import type { ReactNode } from "react"

interface PillarCardProps {
  icon: ReactNode
  title: string
  description: string
  link: string
}

export default function PillarCard({ icon, title, description, link }: PillarCardProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
      <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link href={link} className="text-black font-medium inline-flex items-center">
        Learn More <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  )
}
