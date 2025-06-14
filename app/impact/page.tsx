"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"
import NigeriaRiskMap from "@/components/nigeria-risk-map"
import { Eye, Users, MapPin, Calendar, Award, BookOpen, TrendingUp } from "lucide-react"

export default function ImpactPage() {
  const [selectedState, setSelectedState] = useState<any>(null)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Impact</h1>

      <p className="text-xl text-gray-700 mb-12 max-w-3xl">
        See how we're making a difference in the fight against river blindness across Nigeria through technology,
        education, and community partnerships.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">People Educated</CardTitle>
            <Eye className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25,000+</div>
            <p className="text-xs text-muted-foreground">Community members reached with education</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+15% this quarter</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Villages Reached</CardTitle>
            <Users className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Rural communities with active programs</p>
            <div className="flex items-center mt-2">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              <span className="text-xs text-green-600">+8 new communities</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">AI Prototypes</CardTitle>
            <MapPin className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Detection tools in development</p>
            <div className="flex items-center mt-2">
              <Award className="h-3 w-3 text-blue-500 mr-1" />
              <span className="text-xs text-blue-600">92% accuracy rate</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-12">
        <h2 className="text-2xl font-semibold mb-6">Risk Zone Mapping</h2>
        <p className="text-gray-700 mb-6">
          Interactive map showing river blindness risk levels across Nigerian states. Click on any state to view
          detailed information about cases, population, and intervention status.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <NigeriaRiskMap onSelectState={setSelectedState} />
          </div>
          <div>
            {selectedState ? (
              <div className="bg-blue-50 p-4 rounded-lg border">
                <h3 className="font-medium mb-3 text-lg">{selectedState.name} State</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-blue-200">
                    <span className="font-medium">Risk Level:</span>
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        selectedState.status === "high-risk"
                          ? "bg-red-100 text-red-800"
                          : selectedState.status === "moderate-risk"
                            ? "bg-orange-100 text-orange-800"
                            : selectedState.status === "low-risk"
                              ? "bg-yellow-100 text-yellow-800"
                              : "bg-green-100 text-green-800"
                      }`}
                    >
                      {selectedState.status.replace("-", " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-200">
                    <span>Reported Cases:</span>
                    <span className="font-medium">{selectedState.cases.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-blue-200">
                    <span>Population:</span>
                    <span className="font-medium">{selectedState.population.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span>Prevalence:</span>
                    <span className="font-medium">
                      {((selectedState.cases / selectedState.population) * 100).toFixed(2)}%
                    </span>
                  </div>
                </div>

                {selectedState.status === "high-risk" && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded text-xs">
                    <div className="font-medium text-red-800 mb-1">🚨 Active Intervention Zone</div>
                    <div className="text-red-700">
                      • Community health workers deployed
                      <br />• AI screening tools in active use
                      <br />• Monthly awareness campaigns
                    </div>
                  </div>
                )}

                {selectedState.status === "moderate-risk" && (
                  <div className="mt-4 p-3 bg-orange-50 border border-orange-200 rounded text-xs">
                    <div className="font-medium text-orange-800 mb-1">⚠️ Monitoring Zone</div>
                    <div className="text-orange-700">
                      • Regular health screenings
                      <br />• Educational programs active
                      <br />• Risk assessment ongoing
                    </div>
                  </div>
                )}

                {selectedState.status === "safe" && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded text-xs">
                    <div className="font-medium text-green-800 mb-1">✅ Safe Zone</div>
                    <div className="text-green-700">
                      • No active cases reported
                      <br />• Preventive education ongoing
                      <br />• Model for other regions
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-gray-100 p-6 rounded-lg text-center border-2 border-dashed border-gray-300">
                <MapPin className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-600 font-medium">Select a Region</p>
                <p className="text-xs text-gray-500 mt-1">Click on any state to view detailed risk information</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="bg-blue-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Our Journey Timeline</h2>
        <p className="text-gray-700 mb-6">
          Track our progress from inception to impact. See how we've grown from a student project to a comprehensive
          health-tech initiative.
        </p>

        <Tabs defaultValue="2021-2022" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="2021-2022">2021-2022</TabsTrigger>
            <TabsTrigger value="2023">2023</TabsTrigger>
            <TabsTrigger value="2024">2024</TabsTrigger>
            <TabsTrigger value="2025-future">2025+</TabsTrigger>
          </TabsList>

          <TabsContent value="2021-2022" className="mt-4">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <h3 className="font-medium">September 2021 - Foundation</h3>
                </div>
                <p className="text-gray-700">
                  Oculo was founded at Best Breed Intl Academy as a student-led initiative to combat river blindness
                  using technology and community engagement.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="h-4 w-4 text-green-500" />
                  <h3 className="font-medium">January 2022 - First Research</h3>
                </div>
                <p className="text-gray-700">
                  Conducted comprehensive research on river blindness prevalence in Nigeria and began developing our
                  first AI detection algorithms.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="h-4 w-4 text-purple-500" />
                  <h3 className="font-medium">June 2022 - Team Expansion</h3>
                </div>
                <p className="text-gray-700">
                  Recruited passionate students and young professionals in computer science, public health, and
                  community development.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="2023" className="mt-4">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-orange-500" />
                  <h3 className="font-medium">March 2023 - First Prototype</h3>
                </div>
                <p className="text-gray-700">
                  Launched our first AI prototype for early detection of river blindness symptoms using smartphone
                  cameras.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <h3 className="font-medium">August 2023 - Field Testing</h3>
                </div>
                <p className="text-gray-700">
                  Began field testing in rural communities across Kaduna and Plateau states, gathering real-world data
                  and feedback.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="2024" className="mt-4">
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-teal-500">
                <div className="flex items-center gap-2 mb-2">
                  <Eye className="h-4 w-4 text-teal-500" />
                  <h3 className="font-medium">2024 - Scale and Impact</h3>
                </div>
                <p className="text-gray-700">
                  Expanded to 45 villages, educated over 25,000 people, and achieved 92% accuracy in our AI detection
                  tools.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="2025-future" className="mt-4">
            <div className="bg-white p-4 rounded-lg border-l-4 border-indigo-500">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4 text-indigo-500" />
                <h3 className="font-medium">2025 and Beyond</h3>
              </div>
              <p className="text-gray-700">
                Planning nationwide expansion, partnerships with major NGOs, and development of advanced mobile health
                solutions for rural communities.
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
