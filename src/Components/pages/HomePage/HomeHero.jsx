import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import heroImg from "../../../assets/img/hero-img.webp"

function HomeHero() {
    var UMCState = useSelector((state) => state);
    return (
        <section className="bgNeed text-gray-300 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Learn Math with
        <br className="hidden lg:inline-block" />Feelings
      </h1>
                    <p className="mb-4 leading-relaxed">Mathematics as an expression of the human mind reflects the active will, the contemplative reason, and the desire for aesthetic perfection. Its basic elements are logic and intuition, analysis and construction, generality and individuality.</p>
                    <p className="mb-8 leading-relaxed">— Richard Courant</p>
                    <div className="flex justify-center">
                        {UMCState.auth.username ? null : (
                            <Link to="/signup" className="mr-4 inline-flex text-white bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Sign Up</Link>)}
                        <Link to="/courses" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Courses</Link>

                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src={heroImg} />
                </div>
            </div>
        </section>
    )
}

export default HomeHero
