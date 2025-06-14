"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Brain, Users, MapPin } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-background.jpg"
            alt="River background with tech elements"
            fill
            className="object-cover opacity-15"
            priority
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Empowering rural communities in Nigeria to fight river blindness
              </h1>
              <p className="text-xl text-gray-700">Using AI, data, and youth-driven action</p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600">
                  <Link href="/join-us">Join the mission</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/about">See the plan</Link>
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[400px] w-full">
                <Image
                  src="/images/hero-image.jpg"
                  alt="Youth tech volunteers working with community members"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Our Three Pillars</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">AI Detection Tools</h3>
              <p className="text-gray-600 mb-6">
                We develop machine learning models to detect early signs of river blindness from images, making
                diagnosis accessible in remote areas.
              </p>
              <Link href="/approach#tech" className="text-blue-500 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Community Health Education</h3>
              <p className="text-gray-600 mb-6">
                We create multilingual educational resources and conduct awareness campaigns in rural communities.
              </p>
              <Link href="/approach#education" className="text-blue-500 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md transition-transform hover:scale-105">
              <div className="h-16 w-16 bg-gray-100 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-12 w-12 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Risk Zone Mapping</h3>
              <p className="text-gray-600 mb-6">
                We use geospatial data to identify high-risk areas and plan targeted interventions.
              </p>
              <Link href="/approach#partnerships" className="text-blue-500 font-medium inline-flex items-center">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Help us combat river blindness in rural Nigeria through technology and community action.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/join-us">
              Get Involved <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
