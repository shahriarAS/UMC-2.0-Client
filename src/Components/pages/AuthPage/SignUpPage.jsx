import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import axios from "axios";
import { useFormik } from "formik";
import { useSelector } from "react-redux";
import { emailValidation, urlValidation } from "./../../utils/ValidationUtil";
import LoadingScreen from "../LoadingScreen";

function SignUpPage() {
  const [sectionLoading, setSectionLoading] = useState(false);
  const history = useHistory();
  const UMCState = useSelector((state) => state);
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },

    onSubmit: (values) => {
      if (values.password === values.confirmPassword) {
        if (values.username && values.email && emailValidation(values.email)) {
          setSectionLoading(true);
          axios
            .post(`${process.env.REACT_APP_API_DOMAIN}/student/signup`, values)
            .then(function (response) {
              setSectionLoading(false);
              alert(response.data.msg);
              history.push("/");
            })
            .catch(function (error) {
              setSectionLoading(false);
              // console.log(error);
              alert(error.response.data.msg);
            });
        } else {
          alert("Please Fill Up All Field");
        }
      } else {
        alert("Password & Confirm Password Didn't Matched");
      }
    },
  });
  return UMCState.auth.username ? (
    <Redirect to="/login" />
  ) : sectionLoading ? (
    <LoadingScreen />
  ) : (
    <div className="flex flex-col pb-8 items-center justify-center bg-gray-900 text-white">
      <form
        className="w-screen max-w-4xl px-4 lg:px-0 bg-gray-900 mt-8"
        onSubmit={formik.handleSubmit}
      >
        <h1 className="text-4xl text-white text-center mb-8">Sign Up Here</h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Username ( যে ইউজারনেম দিয়ে তুমি পরবর্তীতে সাইটে প্রবেশ করতে চাও )
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="shahriar"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="email"
              placeholder="myemail@email.com"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Password ( যে পাসওয়ার্ড দিয়ে তুমি পরবর্তীতে সাইটে প্রবেশ করতে চাও
              )
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="password"
              placeholder="************"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              required
            />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              htmlFor="grid-last-name"
            >
              Confirm Password ( আবার একই পাসওয়ার্ড লিখ )
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="password"
              placeholder="************"
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              required
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 my-2 mt-8">
          <div className="w-full md:w-full px-3 mb-6 md:mb-0">
            <input
              className="flex cursor-pointer items-center justify-center h-12 px-6 w-full bg-blue-600 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
              id="grid-first-name"
              type="submit"
              value="Sign Up"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

export default SignUpPage;
