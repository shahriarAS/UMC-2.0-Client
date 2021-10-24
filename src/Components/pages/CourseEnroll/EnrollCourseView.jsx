import React from "react";

function EnrollCourseView({ Course, ReactHtmlParser }) {
  return (
    <>
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0 border-white border-1 pl-4">
        <h1 className="text-white text-3xl title-font font-medium mb-4">
          {Course.title}
        </h1>
        <div className="flex mb-4">
          <a className="flex-grow text-indigo-400 border-b-2 border-indigo-500 py-2 text-lg px-1">
            Description
          </a>
        </div>
        <p className="leading-relaxed mb-4 text-white">
          {ReactHtmlParser(Course.courseDetails)}
        </p>
        <div className="flex border-t border-gray-800 py-2">
          <span className="text-gray-500">Enrolled</span>
          <span className="ml-auto text-white">{Course.enrolledCount}</span>
        </div>
        <div className="flex border-t border-gray-800 py-2">
          <span className="text-gray-500">Last Updated</span>
          <span className="ml-auto text-white">
            {String(Course.updated_at).split("T")[0]}
          </span>
        </div>
        <div className="flex border-t border-b mb-6 border-gray-800 py-2">
          <span className="text-gray-500">Views</span>
          <span className="ml-auto text-white">{Course.views}</span>
        </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-white">
            BDT {Course.price}
          </span>
        </div>
      </div>
    </>
  );
}

export default EnrollCourseView;
