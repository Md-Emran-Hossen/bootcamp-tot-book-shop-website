import React from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../routes'

export default function Navbar() {
    return (
        <div>
            <section className="fixed container mx-auto top-0 left-0 z-50">
                <div className="navbar bg-base-100">
                    <div className="navbar-start">

                        <Link to={ROUTES.HOME}>
                            <a className="btn btn-ghost font-sans text-xs lg:text-2xl">BOOK SHOP</a>
                        </Link>

                        <div className="dropdown">
                            <div tabindex="0" role="button" className="btn btn-ghost lg:hidden">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h8m-8 6h16" />
                                </svg>
                            </div>
                            <ul
                                tabindex="0"
                                className="menu menu-sm dropdown-content bg-base-300 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><Link to={ROUTES.HOME} className="hover:text-orange-500 cursor-pointer">Home</Link></li>
                                <li><Link to={ROUTES.ABOUT} className="hover:text-orange-500 cursor-pointer">About</Link></li>
                                <li><Link to={ROUTES.BLOG} className="hover:text-orange-500 cursor-pointer">Blog</Link></li>
                                <li><Link to={ROUTES.FAQ} className="hover:text-orange-500 cursor-pointer">FAQ</Link></li>
                            </ul>
                        </div>



                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            <li><Link to={ROUTES.HOME} className="hover:text-orange-500 cursor-pointer">Home</Link></li>
                            <li><Link to={ROUTES.ABOUT} className="hover:text-orange-500 cursor-pointer">About</Link></li>
                            <li><Link to={ROUTES.BLOG} className="hover:text-orange-500 cursor-pointer">Blog</Link></li>
                            <li><Link to={ROUTES.FAQ} className="hover:text-orange-500 cursor-pointer">FAQ</Link></li>
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <a className="btn mr-1 w-20 lg:w-24 text-xs">Buy Book</a>
                        <a className="btn ml-1 w-16 lg:w-20 text-xs">Sign In</a>
                    </div>
                </div>
            </section>
        </div>
    )
}
