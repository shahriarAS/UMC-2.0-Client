import React from 'react'
import axios from "axios"
import { Formik, useFormik } from 'formik';

function SignUpPage() {

    const formik = useFormik({

        initialValues: {
            username: "",
            email: "",
            password: "",
            phone: "",
            fullName: "",
            facebook: "",
            bloodGroup: "",
            fatherPhone: "",
            fatherOccupation: "",
            motherPhone: "",
            motherOccupation: "",
            hscBatch: "",
            schoolName: "",
            collegeName: "",
        },

        onSubmit: values => {
            axios.post(`${process.env.REACT_APP_API_DOMAIN}/student/signup`, values)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            alert(JSON.stringify(values, null, 2));
        },

    });

    return (
        <div>
            Sign Up Page
            <form onSubmit={formik.handleSubmit}>
                <input required type="text" name="username" id="" placeholder="username" onChange={formik.handleChange} value={formik.values.username} />
                <input required type="email" name="email" id="" placeholder="email" onChange={formik.handleChange} value={formik.values.email} />
                <input required type="password" name="password" id="" placeholder="password" onChange={formik.handleChange} value={formik.values.password} />
                <input required type="phone" name="phone" id="" placeholder="phone" onChange={formik.handleChange} value={formik.values.phone} />
                <input required type="text" name="facebook" id="" placeholder="facebook" onChange={formik.handleChange} value={formik.values.facebook} />
                <input required type="text" name="fullName" id="" placeholder="fullName" onChange={formik.handleChange} value={formik.values.fullName} />
                <input required type="text" name="bloodGroup" id="" placeholder="bloodGroup" onChange={formik.handleChange} value={formik.values.bloodGroup} />
                <input required type="text" name="fatherPhone" id="" placeholder="fatherPhone" onChange={formik.handleChange} value={formik.values.fatherPhone} />
                <input required type="text" name="fatherOccupation" id="" placeholder="fatherOccupation" onChange={formik.handleChange} value={formik.values.fatherOccupation} />
                <input required type="text" name="motherPhone" id="" placeholder="motherPhone" onChange={formik.handleChange} value={formik.values.motherPhone} />
                <input required type="text" name="motherOccupation" id="" placeholder="motherOccupation" onChange={formik.handleChange} value={formik.values.motherOccupation} />
                <input required type="text" name="hscBatch" id="" placeholder="hscBatch" onChange={formik.handleChange} value={formik.values.hscBatch} />
                <input required type="text" name="schoolName" id="" placeholder="schoolName" onChange={formik.handleChange} value={formik.values.schoolName} />
                <input required type="text" name="collegeName" id="" placeholder="collegeName" onChange={formik.handleChange} value={formik.values.collegeName} />
                <input required type="submit" value="Reg" />
            </form>
        </div>
    )
}

export default SignUpPage
