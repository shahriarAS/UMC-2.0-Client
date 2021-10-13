import React, { useState, useEffect, useRef } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import "../../../assets/css/sidebar.css"
import DropDownMenu from './DropDownMenu';
import EmbdedPlayer from './EmbdedPlayer';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import LoadingScreen from '../LoadingScreen';

function CourseClass() {
    const [sectionLoading, setSectionLoading] = useState(true)
    const { courseId } = useParams()
    const [Course, setCourse] = useState([])
    const [ClassData, setClassData] = useState([])
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const UMCState = useSelector(state => state)
    const history = useHistory()

    const toggleSidebar = () => {
        setSidebarOpen(sidebarOpen ? false : true)
    }

    const grabEnrolledCourse = () => {
        axios.get(`${process.env.REACT_APP_API_DOMAIN}/course/viewenrolled/${courseId}`, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                setCourse(response.data.result)
                setClassData(response.data.result.parts[0].chapters[0].classes[0])
                setSectionLoading(false)
            })
            .catch(err => {
                // console.log(err)
                setSectionLoading(false)
            })
    }

    const startClass = (classData) => {
        setClassData(classData)
    }

    useEffect(() => {
        if (UMCState.auth.username) {
            if (UMCState.userDetails.enrolledCourse.indexOf(courseId) === -1) {
                alert("Please Enroll This Course To Access")
                history.push(`/courses/enroll/${courseId}`)
            }
        }
        else {
            alert("Please Login To Enroll This Course")
            history.push("/login")
        }

        grabEnrolledCourse()
    }, [])

    return (
        sectionLoading ? <LoadingScreen /> : (
            <>
                <div className="bgNeed min-h-screen h-full">
                    <h1 className="font-bold text-xl py-2 border-b text-center text-white">{Course.title}</h1>
                    <div className="flex">
                        <div className={`${sidebarOpen ? "w-60" : "w-0"} bg-gray-800 whitespace-nowrap md:w-60 z-50 md:static overflow-hidden transition-all duration-300 ${sidebarOpen ? "p-4" : "p-0"} md:p-4 h-full absolute`}>
                            <h2 className="text-xl mb-4 font-bold text-center text-white">Class Menu</h2>
                            <ul className="text-white">
                                {
                                    Course.parts && Course.parts.sort((a, b) => { return a.partNumber - b.partNumber }).map(part => (
                                        <DropDownMenu key={Math.random()} title={part.title} height="h-auto">
                                            {part.chapters.sort((a, b) => { return a.chapterNumber - b.chapterNumber }).map(chapter =>
                                                <DropDownMenu key={Math.random()} title={chapter.title} chapterStatus={chapter.chapterStatus} height="h-auto">
                                                    {chapter.classes.sort((a, b) => { return a.classNumber - b.classNumber }).map(classItem =>
                                                        <li key={Math.random()} onClick={() => startClass(classItem)} className="cursor-pointer font-bold border-2 border-white text-center my-2 hover:bg-white hover:text-black transition-all">{classItem.title}</li>
                                                    )}
                                                </DropDownMenu>)}
                                        </DropDownMenu>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="w-full min-h-screen">
                            <div className={`${sidebarOpen ? "p-4 pl-64" : "p-4"} md:hidden transition-all duration-300`} onClick={toggleSidebar}>
                                {
                                    sidebarOpen ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="20" height="20" overflow="visible" stroke="white" strokeWidth="10" strokeLinecap="round">
                                            <line x1="0" y1="0" x2="50" y2="50" />
                                            <line x1="50" y1="0" x2="0" y2="50" />
                                        </svg>
                                    ) : (
                                            <svg fill="#ffffff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="30px" height="30px"><path fill="white" stroke="white" strokeMiterlimit="10" strokeWidth="2" d="M2 12L22 12M2 6L22 6M2 18L22 18" /></svg>
                                        )
                                }
                            </div>
                            <div className="w-full min-h-screen flex flex-col md:flex-row">
                                <div className="md:w-2/3 w-full mt-2 md:p-4 h-full ">
                                    <EmbdedPlayer classTitle={ClassData.title ? ClassData.title : "Class Title Here"} videoLink={ClassData.videoLink} />
                                    <div className="w-full mt-2 mb-4 p-4 whitespace-normal">
                                        {ReactHtmlParser(ClassData.classCaption)}
                                    </div >
                                </div >
                                <div className="md:w-1/3 w-full md:h-60 mt-2 md:p-4 min-h-screen p-4">
                                    <h2 className="text-xl mb-4 font-bold text-center text-white">Class Resources</h2>
                                    <div>
                                        <p className="text-lg font-bold mb-2 text-white">PDF</p>
                                        <ul className="px-0">
                                            {ClassData.pdfs && ClassData.pdfs.map(pdf =>
                                                <a key={Math.random()} href={pdf.link} target="_blank" className="hover:text-red-800 hover:font-bold"><li className="hover:bg-white hover:text-black transition-all duration-150 border list-none  rounded-sm px-3 py-3 mb-2 text-white">{pdf.title}</li></a>
                                            )}
                                        </ul>
                                    </div>
                                    <div className="my-2">
                                        <p className="text-lg font-bold mb-2 text-white">Exam</p>
                                        <ul className="px-0">
                                            <a key={Math.random()} href="#" target="_blank" className="hover:text-red-800 hover:font-bold"><li className="hover:bg-white hover:text-black transition-all duration-150 border list-none  rounded-sm px-3 py-3 mb-2 text-white">Exam</li></a>
                                        </ul>
                                    </div>
                                </div>
                            </div >
                        </div >
                    </div >
                </div >
            </>
        )
    )
}

export default CourseClass
