import React, { useEffect, useState } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useFormik } from "formik";
import LoadingScreen from "../LoadingScreen";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import EnrollUserForm from "./EnrollUserForm";
import { urlValidation } from "../../utils/ValidationUtil";
import EnrollPaymentForm from "./EnrollPaymentForm";
import EnrollCourseView from "./EnrollCourseView";

function EnrollPayment() {
  const [sectionLoading, setSectionLoading] = useState(false);
  const [Course, setCourse] = useState([]);
  const [payment_method, setPaymentMethod] = useState("");
  const { courseId } = useParams();
  const UMCState = useSelector((state) => state);
  const history = useHistory();
  const formik = useFormik({
    initialValues: {
      // payment_method: "",
      sender_number: "",
      transaction_id: "",
      receiver_number: "",
      paid_ammount: "",
      reference: "",

      facebook: UMCState.userDetails.facebook,
      phone: UMCState.userDetails.phone,
      fullName: UMCState.userDetails.fullName,
      bloodGroup: UMCState.userDetails.bloodGroup,
      fatherPhone: UMCState.userDetails.fatherPhone,
      fatherOccupation: UMCState.userDetails.fatherOccupation,
      motherPhone: UMCState.userDetails.motherPhone,
      motherOccupation: UMCState.userDetails.motherOccupation,
      hscBatch: UMCState.userDetails.hscBatch,
      schoolName: UMCState.userDetails.schoolName,
      collegeName: UMCState.userDetails.collegeName,
    },

    onSubmit: (values) => {
      if (
        payment_method &&
        values.sender_number &&
        values.transaction_id &&
        values.receiver_number &&
        values.paid_ammount &&
        values.facebook &&
        urlValidation(values.facebook) &&
        values.phone &&
        values.fullName &&
        values.bloodGroup &&
        values.fatherPhone &&
        values.fatherOccupation &&
        values.motherPhone &&
        values.motherOccupation &&
        values.hscBatch &&
        values.schoolName &&
        values.collegeName
      ) {
        setSectionLoading(true);
        axios
          .put(`${process.env.REACT_APP_API_DOMAIN}/student/update`, values, {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          })
          .then(function (response) {
            // setSectionLoading(false);
            // alert(response.data.msg);
            axios
              .post(
                `${process.env.REACT_APP_API_DOMAIN}/order/create/`,
                {
                  ...values,
                  payment_method: payment_method,
                  course: courseId,
                  student: UMCState.auth.userId,
                },
                {
                  headers: {
                    authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              )
              .then(function (response) {
                setSectionLoading(false);
                alert(
                  "Your order has been placed successfully. Your order will approve within 24 Hours."
                );
                history.push(`/courses/view/${courseId}`);
              })
              .catch(function (error) {
                setSectionLoading(false);
                // console.log(error);
                alert(error.response.data.msg);
              });
          })
          .catch(function (error) {
            setSectionLoading(false);
            // console.log(error);
          });
      } else {
        alert("Please Fill Up All Field. Also Phone & Facebook Has To Be Unqiue.");
      }
    },
  });

  const grabCourse = () => {
    setSectionLoading(true);
    axios
      .get(`${process.env.REACT_APP_API_DOMAIN}/course/view/${courseId}`)
      .then((response) => {
        setCourse(response.data.result);
        setSectionLoading(false);
      })
      .catch((err) => {
        // console.log(err)
        setSectionLoading(false);
      });
  };

  useEffect(() => {
    if (UMCState.auth.username) {
      if (UMCState.userDetails.enrolledCourse.indexOf(courseId) !== -1) {
        alert("You have already enrolled this course.");
        history.push(`/courses/play/${courseId}`);
      }
    } else {
      alert("Please Login To Enroll This Course");
      history.push("/login");
    }
    grabCourse();
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <EnrollCourseView Course={Course} ReactHtmlParser={ReactHtmlParser} />
          <div className="leading-loose lg:w-1/2 w-full  border-white border-2">
            <form
              className="max-w-xl m-4 p-10 bg-gray-900 rounded shadow-xl"
              onSubmit={formik.handleSubmit}
            >
              {UMCState.userDetails &&
              UMCState.userDetails.fullName &&
              UMCState.userDetails.facebook &&
              UMCState.userDetails.phone &&
              UMCState.userDetails.fatherPhone &&
              UMCState.userDetails.fatherOccupation &&
              UMCState.userDetails.motherPhone &&
              UMCState.userDetails.motherOccupation &&
              UMCState.userDetails.hscBatch &&
              UMCState.userDetails.schoolName &&
              UMCState.userDetails.collegeName &&
              UMCState.userDetails.bloodGroup ? null : (
                <EnrollUserForm formik={formik} />
              )}
              <EnrollPaymentForm
                formik={formik}
                payment_method={payment_method}
                setPaymentMethod={setPaymentMethod}
                Course={Course}
              />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EnrollPayment;
