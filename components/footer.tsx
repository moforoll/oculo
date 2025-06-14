"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Oculo</h3>
            <p className="text-gray-600 mb-4">
              Oculo is a youth-led health-tech initiative combating river blindness in rural Nigeria through AI,
              community education, and geospatial mapping.
            </p>
            <Link href="/" className="text-2xl font-bold text-blue-600">
              Oculo
            </Link>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/approach" className="text-gray-600 hover:text-blue-600">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/impact" className="text-gray-600 hover:text-blue-600">
                  Impact
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600">Email: info@oculo.org</li>
              <li className="text-gray-600">WhatsApp: Coming Soon</li>
              <li className="text-gray-600">Lagos, Nigeria</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Twitter
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                Instagram
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} Oculo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
