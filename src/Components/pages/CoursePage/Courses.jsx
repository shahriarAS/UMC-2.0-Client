import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';
import { useDispatch } from "react-redux";
import UMCReducer from '../../redux/umcReducer';
import LoadingScreen from '../LoadingScreen';

function Courses() {
    const [allCourses, setAllCourses] = useState([])
    const [sectionLoading, setSectionLoading] = useState(true)

    const dispatch = useDispatch(UMCReducer);

    const grabAllCourses = () => {
        axios.get(`${process.env.REACT_APP_API_DOMAIN}/course/view`)
            .then(response => {
                setAllCourses(response.data.result)
                setSectionLoading(false)
            })
            .catch(err => {
                // console.log(err)
                setSectionLoading(false)
            })
    }

    useEffect(() => {
        grabAllCourses()
    }, [])

    return (
        sectionLoading ? <LoadingScreen /> : (
        <div className="bgNeed min-h-full flex flex-col justify-center items-center py-8">
            <h1 className="text-4xl text-white font-black pb-4">Courses</h1>
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                {
                    allCourses && allCourses.map(course => (
                        <div key={Math.random()} className="max-w-sm mx-4 md:mx-2 bg-gray-900 border-2 border-gray-400 px-6 pt-0 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500">
                            <h3 className="mb-3 pt-3 text-xl font-bold text-white">Beginner Friendly</h3>
                            <div className="relative">
                                <img className="w-full rounded-xl" src={course.thumbnail} alt="Course Thumbnail" />
                                <p className="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{course.price} BDT</p>
                            </div>
                            <h1 className="mt-4 text-white text-3xl font-bold cursor-pointer">
                                {course.title}
                            </h1>
                            <div className="my-4 text-white">
                                <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </span>
                                    <p>Last Update {course.updated_at}</p>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </span>
                                    <p>{course.enrolledCount} Enrolled</p>
                                </div>
                                <div className="flex space-x-1 items-center">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </span>
                                    <p>Vanilla JS</p>
                                </div>
                                <Link to={`/courses/view/${course._id}`}><button className="mt-4 text-xl w-full text-white bg-indigo-600 py-1.5 rounded-xl shadow-lg">Course Details</button></Link>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>)
    )
}

export default Courses
