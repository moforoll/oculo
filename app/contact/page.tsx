"use client"

import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import NigeriaMapContact from "@/components/nigeria-map-contact"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-6">Get In Touch</h2>
          <p className="text-gray-700 mb-8">Have questions or want to collaborate? Get in touch with the Oculo team.</p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Mail className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Email</h3>
                <a href="mailto:info@oculo.org" className="text-blue-600 hover:underline">
                  info@oculo.org
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <Phone className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-gray-600">Coming Soon</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-100 p-2 rounded-full">
                <MapPin className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium">Address</h3>
                <p className="text-gray-600">
                  123 Innovation Way
                  <br />
                  Yaba, Lagos
                  <br />
                  Nigeria
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/oculo.org"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-100 p-3 rounded-full hover:bg-gray-200 transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
          <p className="text-gray-700 mb-6">
            Ready to get in touch? Click the button below to send us an email directly.
          </p>

          <Button asChild className="w-full mb-4">
            <a href="mailto:info@oculo.org?subject=General Inquiry&body=Hi Oculo team,%0D%0A%0D%0AI'm interested in learning more about your work.%0D%0A%0D%0AName: %0D%0AEmail: %0D%0AMessage: %0D%0A">
              Send Email
            </a>
          </Button>

          <p className="text-sm text-gray-600">
            This will open your email client with a pre-filled message to info@oculo.org
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-6">Our Location</h2>
        <div className="h-[400px] w-full">
          <NigeriaMapContact />
        </div>
      </div>
    </div>
  )
}
