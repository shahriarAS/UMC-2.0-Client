import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import axios from "axios";
import LoadingScreen from "../LoadingScreen";

function PDFCourse() {
  const [sectionLoading, setSectionLoading] = useState(true);
  const { courseId } = useParams();
  const [pdfList, setPDFList] = useState([]);
  const headers = ["Chapter", "Topic", "Link"];

  const grabAllPDF = () => {
    axios
      .get(`${process.env.REACT_APP_API_DOMAIN}/pdf/view/${courseId}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        setPDFList(response.data.result);
        setSectionLoading(false);
      })
      .catch((err) => {
        // console.log(err)
        setSectionLoading(false);
      });
  };

  useEffect(() => {
    grabAllPDF();
  }, []);

  return sectionLoading ? (
    <LoadingScreen />
  ) : (
    <div className="bgNeed min-h-screen flex flex-col items-center py-8 px-4 md:px-12">
      <h1 className="text-4xl text-white font-black pb-4 text-center">
        Full Course PDF
      </h1>
      <div className="bg-white shadow-lg hover:shadow-xl rounded-md overflow-hidden w-full mt-4">
        <table className="table flex table-auto w-full leading-normal">
          <thead className="uppercase text-gray-600 text-xs font-semibold bg-gray-200">
            <tr className="hidden md:table-row">
              {headers.map((pdfHeader) => (
                <th key={Math.random()} className="text-center p-3">
                  <p>{pdfHeader}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="flex-1 text-gray-700 sm:flex-none">
            {pdfList.map((pdfData) => (
              <tr
                key={Math.random()}
                className="border-t first:border-t-0 border-b-4 md:border-b-0 border-black md:border-gray-200 flex p-1 md:p-3 hover:bg-gray-100 md:table-row flex-col w-full flex-wrap"
              >
                <td className="p-1 md:p-3">
                  <label
                    className="text-xs text-gray-500 uppercase font-semibold md:hidden"
                    htmlFor=""
                  >
                    Chapter
                  </label>
                  <p className="text-left md:text-center">
                    {pdfData.chapter.title}
                  </p>
                  <p className="text-left md:text-center">
                    <a className="text-blue-700 font-bold" target="_blank"></a>
                  </p>
                </td>
                <td className="p-1 md:p-3">
                  <label
                    className="text-xs text-gray-500 uppercase font-semibold md:hidden"
                    htmlFor=""
                  >
                    Topic
                  </label>
                  <p className="text-left md:text-center">{pdfData.title}</p>
                </td>
                <td className="p-1 md:p-3">
                  <label
                    className="text-xs text-gray-500 uppercase font-semibold md:hidden"
                    htmlFor=""
                  >
                    Link
                  </label>
                  <p className="text-left md:text-center">
                    <a
                      className="text-blue-700 font-bold"
                      target="_blank"
                      href={`${pdfData.link}`}
                    >
                      PDF
                    </a>
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PDFCourse;
