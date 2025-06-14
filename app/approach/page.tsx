"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, BookOpen, Handshake } from 'lucide-react'

export default function ApproachPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Approach</h1>

      <p className="text-xl text-gray-700 mb-12 max-w-3xl">
        How we plan to combat river blindness through technology, education, and partnerships
      </p>

      <Tabs defaultValue="tech" className="mb-16">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tech" className="flex items-center gap-2">
            <Brain className="h-5 w-5" />
            Technology
          </TabsTrigger>
          <TabsTrigger value="education" className="flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Education
          </TabsTrigger>
          <TabsTrigger value="partnerships" className="flex items-center gap-2">
            <Handshake className="h-5 w-5" />
            Partnerships
          </TabsTrigger>
        </TabsList>

        <TabsContent value="tech" id="tech" className="mt-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">AI & Technology Solutions</h2>
              <p className="text-gray-700 mb-4">
                We will leverage cutting-edge technology to detect, track, and combat river blindness in rural Nigerian
                communities.
              </p>

              <div className="space-y-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Machine Learning for Early Detection</CardTitle>
                    <CardDescription>AI-powered diagnosis accessible to all</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We will build a machine learning model trained on skin lesion images to detect early-stage river
                      blindness. Our AI will be designed to work on low-resolution images from basic smartphone cameras.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Mobile-First USSD & SMS Tools</CardTitle>
                    <CardDescription>Reaching communities without smartphones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We will create a mobile-first USSD and SMS-based tool for reporting symptoms and sending treatment
                      reminders, specifically designed for those without smartphones.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Interactive Risk Zone Maps</CardTitle>
                    <CardDescription>Visualizing and targeting high-risk areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We will build interactive risk zone maps using GPS coordinates, satellite blackfly habitat data,
                      and crowd-sourced symptom reports.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/ai-detection-technology.jpg"
                alt="AI and technology solutions"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="education" id="education" className="mt-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="order-2 md:order-1 relative h-[500px]">
              <Image
                src="/images/community-education.jpg"
                alt="Community education initiatives"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-2xl font-semibold mb-4">Community Health Education</h2>
              <p className="text-gray-700 mb-4">
                Education is key to prevention. We will develop culturally appropriate, multilingual resources to
                empower communities with knowledge.
              </p>

              <div className="space-y-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Multilingual Resources</CardTitle>
                    <CardDescription>Breaking down language barriers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We will translate information into Yoruba, Hausa, and Igbo for accessibility, ensuring that vital
                      health information reaches all community members regardless of their primary language.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Visual Education Materials</CardTitle>
                    <CardDescription>Accessible regardless of literacy level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We will develop digital and printable infographics and posters that use visual storytelling to
                      explain prevention methods, symptoms, and treatment options.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Community Engagement Events</CardTitle>
                    <CardDescription>Bringing awareness to the grassroots level</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We will run "River Blindness Awareness Weeks" in partner schools and churches, creating engaging
                      educational experiences that involve the whole community.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="partnerships" id="partnerships" className="mt-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Strategic Partnerships</h2>
              <p className="text-gray-700 mb-4">
                We believe in the power of collaboration. By working with established organizations and local
                communities, we will maximize our impact.
              </p>

              <div className="space-y-6 mt-8">
                <Card>
                  <CardHeader>
                    <CardTitle>NGO & Government Collaboration</CardTitle>
                    <CardDescription>Leveraging existing infrastructure</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We plan to collaborate with established NGOs like Sightsavers, Carter Center, and the Nigeria
                      Ministry of Health to leverage existing infrastructure and expertise.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Youth Tech Volunteer Network</CardTitle>
                    <CardDescription>Harnessing young talent for social good</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We plan to recruit youth tech volunteers from organizations like Hack Club, university coding
                      groups, and local tech hubs to contribute to our development efforts.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Open APIs & Research Sharing</CardTitle>
                    <CardDescription>Collaborative innovation for global health</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>
                      We will build out APIs and share research openly for public health groups, enabling other
                      organizations to build upon our work and contribute to the fight against river blindness.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/partnership-collaboration.jpg"
                alt="Partnership network"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
