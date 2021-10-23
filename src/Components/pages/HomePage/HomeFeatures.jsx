import React from 'react'
import { Link } from 'react-router-dom'

function HomeFeatures() {
    return (
        <section className="bgNeed text-gray-300 body-font">
            <div className="container px-5 py-24 mx-auto">
                <div className="text-center mb-20">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-white mb-4">Why Choose UMC</h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-300 text-opacity-80">Why you will choice UMC over other institution? Why UMC is different? How UMC teach students to learn math with feelings?</p>
                    <div className="flex mt-6 justify-center">
                        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                    </div>
                </div>
                <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-center md:space-y-0 space-y-6">
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Live Classes</h2>
                            <div className="leading-relaxed text-base">
                                <ul>
                                    <li>3+ Live Classes Per Week</li>
                                    <li>Live Question - Answer Session</li>
                                    <li>In Class MCQ Exam</li>
                                </ul>
                            </div>
                            {/* <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <circle cx="6" cy="6" r="3"></circle>
                                <circle cx="6" cy="18" r="3"></circle>
                                <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Regular Exam</h2>
                            <div className="leading-relaxed text-base">
                                <ul>
                                    <li>Exam after completing every topic.</li>
                                    <li>Chapter Wise Exam</li>
                                    <li>In time Result</li>
                                    <li>Top University Admission Standard Question</li>
                                    <li>In time explanation in every question.</li>
                                    <li>Leaderboard and many more</li>
                                </ul>
                            </div>
                            {/* <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Question Bank</h2>
                            <div className="leading-relaxed text-base">
                                <ul>
                                    <li>Take Exam When You Want.</li>
                                    <li>Exam with standard question on any topic you like</li>
                                    <li>Live Result - Leaderboard - Explanation</li>
                                    <li>Full Customize Question Bank</li>
                                    <li>Complete Mock Test</li>
                                </ul>
                            </div>
                            {/* <a className="mt-3 text-indigo-400 inline-flex items-center">Learn More
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                </svg>
                            </a> */}
                        </div>
                    </div>
                </div>
                <Link to="/courses"><button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Courses</button></Link>
            </div>
        </section>
    )
}

export default HomeFeatures
