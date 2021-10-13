import React, { useEffect, useState } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useFormik } from 'formik'
import LoadingScreen from '../LoadingScreen';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

function EnrollPayment() {
    const [sectionLoading, setSectionLoading] = useState(false)
    const [Course, setCourse] = useState([])
    const [payment_method, setPaymentMethod] = useState("")
    const { courseId } = useParams()
    const UMCState = useSelector(state => state)
    const history = useHistory()
    const formik = useFormik({

        initialValues: {
            // payment_method: "",
            sender_number: "",
            transaction_id: "",
            receiver_number: "",
            paid_ammount: "",
            reference: ""
        },

        onSubmit: values => {
            if (payment_method && values.sender_number &&
                values.transaction_id && values.receiver_number &&
                values.paid_ammount) {
                setSectionLoading(true)
                axios.post(`${process.env.REACT_APP_API_DOMAIN}/order/create/`, {
                    ...values,
                    course: courseId,
                    student: UMCState.auth.userId
                }, {
                    headers: {
                        authorization: "Bearer " + localStorage.getItem("token")
                    }
                })
                    .then(function (response) {
                        setSectionLoading(false)
                        alert("Your order has been placed successfully. Your order will approve withing 24 Hours.")
                    })
                    .catch(function (error) {
                        setSectionLoading(false)
                        // console.log(error);
                        alert(error.response.data.msg)
                    });
            } else {
                alert("Please Fill Up All Field")
            }
        },

    });

    const grabCourse = () => {
        setSectionLoading(true)
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

    useEffect(() => {
        if (UMCState.auth.username) {
            if (UMCState.userDetails.enrolledCourse.indexOf(courseId) !== -1) {
                alert("You have already enrolled this course.")
                history.push(`/courses/play/${courseId}`)
            }
        }
        else {
            alert("Please Login To Enroll This Course")
            history.push("/login")
        }
        grabCourse()
    }, [])

    return (
        <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 border-white border-1 pl-4">
                        <h1 className="text-white text-3xl title-font font-medium mb-4">{Course.title}</h1>
                        <div className="flex mb-4">
                            <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">Description</a>
                        </div>
                        <p className="leading-relaxed mb-4 text-white">{ReactHtmlParser(Course.courseDetails)}</p>
                        <div className="flex border-t border-gray-800 py-2">
                            <span className="text-gray-500">Enrolled</span>
                            <span className="ml-auto text-white">{Course.enrolledCount}</span>
                        </div>
                        <div className="flex border-t border-gray-800 py-2">
                            <span className="text-gray-500">Last Updated</span>
                            <span className="ml-auto text-white">{String(Course.updated_at).split("T")[0]}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-800 py-2">
                            <span className="text-gray-500">Views</span>
                            <span className="ml-auto text-white">{Course.views}</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-white">BDT {Course.price}</span>
                        </div>
                    </div>
                    <div className="leading-loose lg:w-1/2 w-full  border-white border-2">
                        <form className="max-w-xl m-4 p-10 bg-gray-900 rounded shadow-xl" onSubmit={formik.handleSubmit}>
                            <p className="text-white text-xl font-medium">Payment information</p>
                            <div className="mt-4">
                                <label className=" block text-sm text-white" htmlFor="cus_email">Payment Method *</label>
                                <select className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="payment_method" required aria-label="Payment Method" onChange={(e) => setPaymentMethod(e.target.value)} value={payment_method}>
                                    <option values="">Select Payment Method</option>
                                    <option>bkash</option>
                                    <option>rocket</option>
                                    <option>nagad</option>
                                    <option>UMC Office</option>
                                </select>
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm text-white" htmlFor="cus_email">Number You Paid From *</label>
                                <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="sender_number" type="text" required placeholder="017xxxxxxx" aria-label="Number You Paid From" onChange={formik.handleChange} value={formik.values.sender_number} required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm text-white" htmlFor="cus_email">Transaction ID *</label>
                                <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="transaction_id" type="text" required placeholder="fvf548sd" aria-label="Transaction" onChange={formik.handleChange} value={formik.values.transaction_id} required />
                            </div>
                            <div className="mt-4">
                                <label className=" block text-sm text-white" htmlFor="cus_email">Receiver Number *</label>
                                <select className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="receiver_number" required aria-label="Number You Sent Money" onChange={formik.handleChange} value={formik.values.receiver_number}>
                                    <option value="">Select Receiver Number</option>
                                    {
                                        payment_method == "bkash" ? (
                                            <>
                                                <option value="01717722655">01717722655 (Agent Number)</option>
                                                <option value="01774649518">01774649518 (Personal Number)</option>
                                            </>
                                        ) : payment_method == "rocket" ? (
                                            <>
                                                <option value="01785001111">01785001111 (Personal Number)</option>
                                                <option value="01711905962">01711905962 (Personal Number)</option>
                                            </>
                                        ) : payment_method == "nagad" ? (
                                            <>
                                                <option value="01785001111">01785001111 (Personal Number)</option>
                                                <option value="01711905962">01711905962 (Personal Number)</option>
                                                <option value="01774649518">01774649518 (Personal Number)</option>
                                            </>

                                        ) : (
                                                        <>
                                                            <option value="01717722655">01717722655 (Agent Number)</option>
                                                            <option value="01774649518">01774649518 (Personal Number)</option>
                                                            <option value="01785001111">01785001111 (Personal Number)</option>
                                                            <option value="01711905962">01711905962 (Personal Number)</option>
                                                            <option value="01785001111">01785001111 (Personal Number)</option>
                                                            <option value="01711905962">01711905962 (Personal Number)</option>
                                                            <option value="01774649518">01774649518 (Personal Number)</option>
                                                        </>
                                                    )
                                    }
                                </select>
                            </div>
                            <div className="mt-4">
                                <label className=" block text-sm text-white" htmlFor="cus_email">Paid Ammount *</label>
                                <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="paid_ammount" type="number" required placeholder="5500" aria-label="Paid Ammount" onChange={formik.handleChange} value={formik.values.paid_ammount} required />
                            </div>
                            <div className="mt-4">
                                <label className=" block text-sm text-white" htmlFor="cus_email">Reference</label>
                                <input className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded" id="cus_email" name="reference" type="text" placeholder="July2022" aria-label="Reference" onChange={formik.handleChange} value={formik.values.reference} required />
                            </div>
                            <div className="mt-4">
                                <button className="px-4 py-1 text-white border-2 font-bold tracking-wider bg-indigo-700 rounded" type="submit">Pay {Course.price} BDT</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EnrollPayment
