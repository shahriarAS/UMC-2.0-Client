import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import UMCReducer from '../../redux/umcReducer';
import "../../../assets/css/videoPlayer.css";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import LoadingScreen from '../LoadingScreen';


function CourseView() {
    const [sectionLoading, setSectionLoading] = useState(true)
    const [Course, setCourse] = useState([])
    const { courseId } = useParams()

    const dispatch = useDispatch(UMCReducer);
    const UMCState = useSelector(state => state)

    const grabCourse = () => {

        axios.get(`${process.env.REACT_APP_API_DOMAIN}/course/view/${courseId}`)
            .then(response => {
                setCourse(response.data.result)
                setSectionLoading(false)
            })
            .catch(err => {
                // console.log(err)
                setSectionLoading(false)
            })
    }

    const saveCurrentCourse = () => {
        // console.log("Current")
        dispatch({
            type: "save_course",
            payload: Course
        })
    }

    useEffect(() => {
        grabCourse()
    }, [])
    return (
        sectionLoading ? <LoadingScreen /> : (
            <section className="bgNeed text-gray-400 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                            {/* <h2 className="text-sm title-font text-indigo-100 tracking-widest">BRAND NAME</h2> */}
                            <h1 className="text-white text-3xl title-font font-medium mb-4">{Course.title}</h1>
                            <div className="flex mb-4">
                                <a className="flex-grow text-indigo-200 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                            </div>
                            <p className="leading-relaxed mb-4 text-white">{ReactHtmlParser(Course.courseDetails)}</p>
                            <div className="flex mb-4">
                                <a className="flex-grow text-indigo-200 border-b-2 border-indigo-500 py-2 text-lg px-1">Features</a>
                            </div>
                            <ul className="mb-4 list-disc pl-4">
                                {Course.features && Course.features.split("\n").map(feature => (
                                    <li className="text-white" key={Math.random()}>{feature}</li>
                                ))}
                            </ul>
                            <div className="flex border-t border-gray-800 py-2">
                                <span className="text-indigo-100">Enrolled</span>
                                <span className="ml-auto text-white">{Course.enrolledCount}</span>
                            </div>
                            <div className="flex border-t border-gray-800 py-2">
                                <span className="text-indigo-100">Last Updated</span>
                                <span className="ml-auto text-white">{String(Course.updated_at).split("T")[0]}</span>
                            </div>
                            <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                                <span className="text-indigo-100">Views</span>
                                <span className="ml-auto text-white">{Course.views}</span>
                            </div>
                            <div className="flex">
                                <span className="title-font font-medium text-2xl text-white">BDT {Course.price}</span>
                                {
                                    UMCState.auth.username && UMCState.userDetails.enrolledCourse.indexOf(courseId) !== -1 ? (
                                        <p className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><Link onClick={saveCurrentCourse} to={`/courses/play/${courseId}`}>Start</Link></p>
                                    ) : <p className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"><Link onClick={saveCurrentCourse} to={`/courses/enroll/${courseId}`} >Enroll</Link></p>
                                }
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full lg:h-auto h-64 lg:mt-8">
                            <iframe className="w-full h-2/3" src={`https://www.youtube.com/embed/${Course.trailer}?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                        {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" /> */}
                    </div>
                </div>
            </section>
        )
    )
}


export default CourseView
