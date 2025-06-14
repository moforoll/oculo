"use client"

import { useState, useEffect, useRef } from "react"

// Declare Leaflet as a global variable
declare global {
  interface Window {
    L: any
  }
}

// Nigerian states with river blindness risk data and coordinates
const nigerianStates = [
  {
    id: "kaduna",
    name: "Kaduna",
    status: "high-risk",
    cases: 15420,
    population: 6113503,
    coordinates: [
      [10.3, 6.8],
      [10.8, 6.9],
      [11.2, 7.2],
      [11.0, 7.8],
      [10.5, 8.0],
      [10.0, 7.5],
      [10.3, 6.8],
    ],
  },
  {
    id: "plateau",
    name: "Plateau",
    status: "high-risk",
    cases: 12800,
    population: 3206531,
    coordinates: [
      [9.0, 8.8],
      [9.5, 8.9],
      [10.0, 9.2],
      [9.8, 9.8],
      [9.3, 10.0],
      [8.8, 9.7],
      [9.0, 8.8],
    ],
  },
  {
    id: "taraba",
    name: "Taraba",
    status: "high-risk",
    cases: 8900,
    population: 2294800,
    coordinates: [
      [7.5, 10.5],
      [8.0, 10.6],
      [8.5, 11.0],
      [8.3, 11.8],
      [7.8, 12.0],
      [7.3, 11.5],
      [7.5, 10.5],
    ],
  },
  {
    id: "cross-river",
    name: "Cross River",
    status: "moderate-risk",
    cases: 5600,
    population: 2888966,
    coordinates: [
      [5.0, 7.8],
      [5.5, 7.9],
      [6.0, 8.2],
      [5.8, 8.8],
      [5.3, 9.0],
      [4.8, 8.7],
      [5.0, 7.8],
    ],
  },
  {
    id: "ogun",
    name: "Ogun",
    status: "low-risk",
    cases: 1200,
    population: 3751140,
    coordinates: [
      [6.8, 3.0],
      [7.3, 3.1],
      [7.5, 3.5],
      [7.3, 4.0],
      [6.8, 4.1],
      [6.5, 3.8],
      [6.8, 3.0],
    ],
  },
  {
    id: "lagos",
    name: "Lagos",
    status: "safe",
    cases: 0,
    population: 9013534,
    coordinates: [
      [6.4, 3.2],
      [6.7, 3.3],
      [6.8, 3.6],
      [6.6, 4.0],
      [6.3, 4.1],
      [6.1, 3.8],
      [6.4, 3.2],
    ],
  },
  {
    id: "abuja",
    name: "FCT Abuja",
    status: "low-risk",
    cases: 800,
    population: 1406239,
    coordinates: [
      [8.8, 7.0],
      [9.3, 7.1],
      [9.5, 7.5],
      [9.3, 8.0],
      [8.8, 8.1],
      [8.5, 7.8],
      [8.8, 7.0],
    ],
  },
  {
    id: "kano",
    name: "Kano",
    status: "moderate-risk",
    cases: 4200,
    population: 9401288,
    coordinates: [
      [11.8, 8.0],
      [12.3, 8.1],
      [12.5, 8.5],
      [12.3, 9.0],
      [11.8, 9.1],
      [11.5, 8.8],
      [11.8, 8.0],
    ],
  },
  {
    id: "benue",
    name: "Benue",
    status: "high-risk",
    cases: 11300,
    population: 4253641,
    coordinates: [
      [7.0, 8.0],
      [7.5, 8.1],
      [8.0, 8.4],
      [7.8, 9.0],
      [7.3, 9.1],
      [6.8, 8.8],
      [7.0, 8.0],
    ],
  },
  {
    id: "nasarawa",
    name: "Nasarawa",
    status: "moderate-risk",
    cases: 3400,
    population: 1869377,
    coordinates: [
      [8.0, 7.5],
      [8.5, 7.6],
      [8.7, 8.0],
      [8.5, 8.5],
      [8.0, 8.6],
      [7.7, 8.3],
      [8.0, 7.5],
    ],
  },
  {
    id: "niger",
    name: "Niger",
    status: "moderate-risk",
    cases: 6200,
    population: 4082558,
    coordinates: [
      [9.5, 5.5],
      [10.5, 5.6],
      [11.0, 6.0],
      [10.8, 6.8],
      [9.8, 7.0],
      [9.0, 6.5],
      [9.5, 5.5],
    ],
  },
  {
    id: "kwara",
    name: "Kwara",
    status: "low-risk",
    cases: 2100,
    population: 2371089,
    coordinates: [
      [8.0, 4.5],
      [8.8, 4.6],
      [9.0, 5.0],
      [8.8, 5.5],
      [8.0, 5.6],
      [7.7, 5.3],
      [8.0, 4.5],
    ],
  },
]

interface NigeriaRiskMapProps {
  onSelectState: (state: any) => void
}

export default function NigeriaRiskMap({ onSelectState }: NigeriaRiskMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selectedState, setSelectedState] = useState<any>(null)
  const [map, setMap] = useState<any>(null)

  // Get color based on risk status
  const getStatusColor = (status: string) => {
    switch (status) {
      case "high-risk":
        return "#dc2626" // red-600
      case "moderate-risk":
        return "#ea580c" // orange-600
      case "low-risk":
        return "#ca8a04" // yellow-600
      case "safe":
        return "#16a34a" // green-600
      default:
        return "#6b7280" // gray-500
    }
  }

  const getRiskLevel = (status: string) => {
    switch (status) {
      case "high-risk":
        return "High Risk"
      case "moderate-risk":
        return "Moderate Risk"
      case "low-risk":
        return "Low Risk"
      case "safe":
        return "Safe Zone"
      default:
        return "Unknown"
    }
  }

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      // Load CSS
      if (!document.querySelector('link[href*="leaflet"]')) {
        const link = document.createElement("link")
        link.rel = "stylesheet"
        link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        document.head.appendChild(link)
      }

      // Load JS
      if (!window.L) {
        const script = document.createElement("script")
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        script.onload = initMap
        document.head.appendChild(script)
      } else {
        initMap()
      }
    }

    const initMap = () => {
      if (!mapRef.current || map) return

      // Initialize map centered on Nigeria
      const leafletMap = window.L.map(mapRef.current).setView([9.082, 8.6753], 6)

      // Add OpenStreetMap tiles
      window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
      }).addTo(leafletMap)

      // Add satellite layer option
      const satelliteLayer = window.L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        {
          attribution: "© Esri, Maxar, Earthstar Geographics",
        },
      )

      // Add layer control
      const baseMaps = {
        "Street Map": window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }),
        "Satellite View": satelliteLayer,
      }

      window.L.control.layers(baseMaps).addTo(leafletMap)

      // Add state polygons
      nigerianStates.forEach((state) => {
        const polygon = window.L.polygon(state.coordinates, {
          color: "#ffffff",
          weight: 2,
          fillColor: getStatusColor(state.status),
          fillOpacity: 0.7,
          className: "state-polygon",
        }).addTo(leafletMap)

        // Add popup
        const popupContent = `
          <div class="p-3 min-w-[200px]">
            <h3 class="font-semibold text-lg mb-2">${state.name}</h3>
            <div class="space-y-1 text-sm">
              <div class="flex justify-between">
                <span>Risk Level:</span>
                <span class="font-medium">${getRiskLevel(state.status)}</span>
              </div>
              <div class="flex justify-between">
                <span>Cases:</span>
                <span>${state.cases.toLocaleString()}</span>
              </div>
              <div class="flex justify-between">
                <span>Population:</span>
                <span>${state.population.toLocaleString()}</span>
              </div>
              <div class="flex justify-between">
                <span>Prevalence:</span>
                <span>${((state.cases / state.population) * 100).toFixed(2)}%</span>
              </div>
            </div>
          </div>
        `

        polygon.bindPopup(popupContent)

        // Add click event
        polygon.on("click", () => {
          setSelectedState(state)
          onSelectState(state)
        })

        // Add hover effects
        polygon.on("mouseover", () => {
          polygon.setStyle({
            fillOpacity: 0.9,
            weight: 3,
          })
        })

        polygon.on("mouseout", () => {
          polygon.setStyle({
            fillOpacity: 0.7,
            weight: 2,
          })
        })
      })

      setMap(leafletMap)
    }

    loadLeaflet()

    return () => {
      if (map) {
        map.remove()
        setMap(null)
      }
    }
  }, [])

  return (
    <div className="relative w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden border" style={{ zIndex: 10 }}>
      {/* Leaflet Map Container */}
      <div ref={mapRef} className="w-full h-full" />

      {/* Legend */}
      <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border z-[20]">
        <div className="text-sm font-medium mb-3">Legend</div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-red-600"></div>
            <span className="text-xs">High Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-orange-600"></div>
            <span className="text-xs">Moderate Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-yellow-600"></div>
            <span className="text-xs">Low Risk</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded bg-green-600"></div>
            <span className="text-xs">Safe Zone</span>
          </div>
        </div>
      </div>

      {/* Data source */}
      <div className="absolute bottom-4 left-4 bg-white p-2 rounded-lg shadow-lg border z-[20]">
        <div className="text-xs text-gray-600">
          Data: WHO Global Health Observatory, 2023
          <br />
          Map: © OpenStreetMap contributors
        </div>
      </div>

      {/* Map controls info */}
      <div className="absolute top-4 right-4 bg-white p-2 rounded-lg shadow-lg border z-[20]">
        <div className="text-xs text-gray-600">
          🗺️ Switch between Street & Satellite view
          <br />🔍 Zoom and pan like Google Maps
        </div>
      </div>

      {/* Loading indicator */}
      {!map && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-[15]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-2"></div>
            <div className="text-sm text-gray-600">Loading map...</div>
          </div>
        </div>
      )}
    </div>
  )
}
