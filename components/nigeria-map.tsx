"use client"

import { useState } from "react"

// Define the regions of Nigeria with their risk status
const regions = [
  { id: "lagos", name: "Lagos", status: "safe", x: 120, y: 350 },
  { id: "abuja", name: "Abuja", status: "planned", x: 250, y: 200 },
  { id: "kano", name: "Kano", status: "risk", x: 280, y: 100 },
  { id: "rivers", name: "Rivers", status: "risk", x: 180, y: 380 },
  { id: "oyo", name: "Oyo", status: "planned", x: 150, y: 300 },
  { id: "kaduna", name: "Kaduna", status: "risk", x: 240, y: 150 },
  { id: "enugu", name: "Enugu", status: "safe", x: 300, y: 300 },
]

interface NigeriaMapProps {
  onSelectRegion: (region: string) => void
}

export default function NigeriaMap({ onSelectRegion }: NigeriaMapProps) {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null)

  // Get color based on status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "risk":
        return "bg-red-500"
      case "safe":
        return "bg-green-500"
      case "planned":
        return "bg-yellow-500"
      default:
        return "bg-gray-300"
    }
  }

  return (
    <div className="relative w-full h-[500px] bg-blue-50 rounded-lg overflow-hidden">
      {/* Nigeria outline map */}
      <svg
        viewBox="0 0 500 500"
        className="w-full h-full"
        style={{ filter: "drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))" }}
      >
        <path d="M100,100 L400,100 L400,400 L100,400 Z" fill="#f0f9ff" stroke="#2563eb" strokeWidth="2" opacity="0.3" />
        {/* This is a simplified placeholder for Nigeria's shape */}
        <path
          d="M150,80 C250,50 350,80 380,150 C410,220 400,300 350,350 C300,400 200,420 150,380 C100,340 80,250 100,180 C120,110 150,80 150,80 Z"
          fill="#f0f9ff"
          stroke="#2563eb"
          strokeWidth="2"
        />

        {/* Plot the regions */}
        {regions.map((region) => (
          <g key={region.id}>
            <circle
              cx={region.x}
              cy={region.y}
              r={hoveredRegion === region.id ? 12 : 10}
              className={`${getStatusColor(region.status)} cursor-pointer transition-all`}
              onClick={() => onSelectRegion(region.name)}
              onMouseEnter={() => setHoveredRegion(region.id)}
              onMouseLeave={() => setHoveredRegion(null)}
            />
            <text x={region.x} y={region.y + 25} textAnchor="middle" className="text-xs font-medium" fill="#1e293b">
              {region.name}
            </text>
          </g>
        ))}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-sm">
        <div className="text-xs font-medium mb-1">Legend</div>
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span className="text-xs">High Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs">Safe Zone</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-xs">Planned</span>
          </div>
        </div>
      </div>
    </div>
  )
}
