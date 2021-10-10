import React from 'react'
import HomePage from "./Components/pages/HomePage/HomePage";
import CoursePage from './Components/pages/CoursePage/CoursePage';
import CourseView from './Components/pages/CourseView/CourseView';
import LoginPage from './Components/pages/AuthPage/LoginPage';
import PasswordForgot from './Components/pages/AuthPage/PasswordForgot';
import SignUpPage from './Components/pages/AuthPage/SignUpPage';
import EnrollPayment from './Components/pages/CourseEnroll/EnrollPayment';
import CourseClass from './Components/pages/CoursePlayer/CourseClass';
import PasswordReset from './Components/pages/AuthPage/PasswordReset';
import AccountVerify from './Components/pages/AuthPage/AccountVerify';
import ProfilePage from './Components/pages/ProfilePage/ProfilePage';
import { Route } from 'react-router-dom'
import NotFound404 from './Components/root/NotFound404';

function ClientRoute() {
    return (
        <>
            <Route path="/" exact component={HomePage} />
            <Route path="/signup" exact component={SignUpPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/forgot" exact component={PasswordForgot} />
            <Route path="/courses" exact component={CoursePage} />
            <Route path="/courses/view/:courseId" exact component={CourseView} />
            <Route path="/courses/enroll/:courseId" exact component={EnrollPayment} />
            <Route path="/courses/play/:courseId" exact component={CourseClass} />
            <Route path="/student/verify/:username/:randString" exact component={AccountVerify} />
            <Route path="/student/forgot/:username/" exact component={PasswordForgot} />
            <Route path="/student/reset/:username/:randString" exact component={PasswordReset} />
            <Route path="/profile/:username" exact component={ProfilePage} />
            <Route path="*" component={NotFound404} />
        </>
    )
}

export default ClientRoute
