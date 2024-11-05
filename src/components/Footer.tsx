// const Footer = () => {
//     return (
//       <div 
//        style={{height: '50px'}} 
//        className='flex items-center justify-center text-white bg-gray-700'
//       >
//           Copyright 2024 Cloud Hosting
//       </div>
//     )
//   }
  
//   export default Footer

import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Company Info */}
                    <div>
                        <h2 className="text-white text-xl font-semibold mb-4">Cloud Hosting</h2>
                        <p className="text-sm">
                            Reliable cloud hosting for all your business needs.
                        </p>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-white text-lg font-medium mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/hosting" className="hover:underline">
                                    Web Hosting
                                </Link>
                            </li>
                            <li>
                                <Link href="/vps" className="hover:underline">
                                    VPS Hosting
                                </Link>
                            </li>
                            <li>
                                <Link href="/domains" className="hover:underline">
                                    Domain Registration
                                </Link>
                            </li>
                            <li>
                                <Link href="/cloud" className="hover:underline">
                                    Cloud Servers
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-white text-lg font-medium mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/support" className="hover:underline">
                                    Help Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:underline">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:underline">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-white text-lg font-medium mb-4">Follow Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-700 pt-8 text-center">
                    <p className="text-sm">
                        © {new Date().getFullYear()} Cloud Hosting. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer