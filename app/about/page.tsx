"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Oculo</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Oculo began in 2021 as a student-led initiative at Best Breed Intl Academy, founded by a group of computer
            science and public health students who recognized the devastating impact of river blindness (onchocerciasis)
            on rural communities.
          </p>
          <p className="text-gray-700 mb-4">
            What started as a final year project has grown into a comprehensive health-tech initiative. Our founding
            team combined expertise in artificial intelligence, public health, and community engagement to create
            innovative solutions for early detection and prevention.
          </p>
          <p className="text-gray-700">
            Today, we leverage the power of youth-driven innovation to eliminate preventable blindness and improve
            health outcomes in underserved regions of Nigeria.
          </p>
        </div>
        <div className="relative h-[400px]">
          <Image
            src="/images/river-blindness-community.jpg"
            alt="Community affected by river blindness"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div className="order-2 md:order-1 relative h-[400px]">
          <Image
            src="/images/tech-community-collaboration.jpg"
            alt="Tech and community collaboration"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
          <p className="text-gray-700 mb-4">
            We envision a Nigeria where river blindness is no longer a threat to rural communities, where technology and
            community action work hand in hand to eliminate neglected tropical diseases.
          </p>
          <p className="text-gray-700 mb-4">
            Through our AI-powered detection tools, multilingual educational resources, and geospatial mapping, we
            empower communities to take control of their health and well-being.
          </p>
          <p className="text-gray-700">
            By combining the energy and innovation of youth with the wisdom and experience of community elders, we
            create sustainable solutions that respect local cultures and traditions.
          </p>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg mb-16">
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <p className="text-gray-700 mb-6">
          Our diverse team brings together expertise in technology, healthcare, community engagement, and project
          management. Together, we work to make our vision a reality.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="relative h-40 w-40 mx-auto mb-3">
              <Image src="/images/team-member-1.jpg" alt="Team member 1" fill className="object-cover rounded-full" />
            </div>
            <h3 className="font-medium">Adebayo Ogunlesi</h3>
            <p className="text-sm text-gray-500">Founder & Tech Lead</p>
          </div>
          <div className="text-center">
            <div className="relative h-40 w-40 mx-auto mb-3">
              <Image src="/images/team-member-2.jpg" alt="Team member 2" fill className="object-cover rounded-full" />
            </div>
            <h3 className="font-medium">Chioma Eze</h3>
            <p className="text-sm text-gray-500">Healthcare Director</p>
          </div>
          <div className="text-center">
            <div className="relative h-40 w-40 mx-auto mb-3">
              <Image src="/images/team-member-3.jpg" alt="Team member 3" fill className="object-cover rounded-full" />
            </div>
            <h3 className="font-medium">Oluwaseun Adeyemi</h3>
            <p className="text-sm text-gray-500">Community Engagement</p>
          </div>
          <div className="text-center">
            <div className="relative h-40 w-40 mx-auto mb-3">
              <Image src="/images/team-member-4.jpg" alt="Team member 4" fill className="object-cover rounded-full" />
            </div>
            <h3 className="font-medium">Ngozi Okafor</h3>
            <p className="text-sm text-gray-500">Project Manager</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-8 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Technology</h2>
        <p className="text-gray-700 mb-6">
          At Oculo, we develop proprietary technology to combat river blindness. Our solutions combine AI, mobile
          applications, and data analytics to make a real impact in affected communities.
        </p>

        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline" className="gap-2">
            <Link href="/approach" className="gap-2">
              <ExternalLink className="h-5 w-5" />
              Learn About Our Technology
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
