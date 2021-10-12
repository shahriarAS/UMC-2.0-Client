import { Route } from 'react-router-dom';
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./Components/root/NavBar";
import HomePage from "./Components/pages/HomePage/HomePage";
import { Switch } from 'react-router-dom';
import CoursePage from './Components/pages/CoursePage/CoursePage';
import Footer from './Components/root/Footer';
import CourseView from './Components/pages/CourseView/CourseView';
import LoginPage from './Components/pages/AuthPage/LoginPage';
import jwt_decode from 'jwt-decode';
import UMCReducer from './Components/redux/umcReducer';
import { useEffect } from 'react';
import LoadingScreen from './Components/pages/LoadingScreen';
import PasswordForgot from './Components/pages/AuthPage/PasswordForgot';
import SignUpPage from './Components/pages/AuthPage/SignUpPage';
import EnrollPayment from './Components/pages/CourseEnroll/EnrollPayment';
import axios from 'axios';
import CourseClass from './Components/pages/CoursePlayer/CourseClass';
import NotFound404 from './Components/root/NotFound404';
import PasswordReset from './Components/pages/AuthPage/PasswordReset';
import PasswordVerify from './Components/pages/AuthPage/AccountVerify';
import AccountVerify from './Components/pages/AuthPage/AccountVerify';
import ProfilePage from './Components/pages/ProfilePage/ProfilePage';
// import dotenv from "dotenv"  

function App() {

  // dotenv.config()

  var UMCState = useSelector((state) => state);

  // Redux Dispatch
  const dispatch = useDispatch(UMCReducer);

  const grabLoginData = () => {
    if (localStorage.token) {
      const decoded = jwt_decode(localStorage.token);
      dispatch({
        type: "login_action",
        payload: decoded
      })

      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        dispatch({
          type: "logout_action"
        });
      }
    }
  }

  const grabUserDetails = () => {
    axios.get(`${process.env.REACT_APP_API_DOMAIN}/student/view`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    })
      .then(response => {
        dispatch({
          type: "populate_user_details",
          payload: response.data.result
        })
        dispatch({
          type: "finish_loading",
        })
      })
      .catch(error => {
        // console.log(error)
        dispatch({
          type: "finish_loading",
        })
      })
  }

  useEffect(() => {
    grabLoginData()
    grabUserDetails()

  }, [])

  return (
    UMCState.loading_status == "finished" ? (
      <>
        <NavBar />
        <Switch>

          {/* Client Route */}
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

          {/* Error Route */}
          <Route path="*" component={NotFound404} />
        </Switch>
        <Footer />
      </>
    ) : <LoadingScreen />
  );
}

export default App;
