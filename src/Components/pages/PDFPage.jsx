import React, { useState } from "react";

function PDFPage() {
  const [pdfList, setPDFList] = useState({
    headers: ["Chapter", "Topic", "Link"],
    data: [
      // {
      //   Chapter: "Matrix & Diterminent",
      //   Topic: "1st Class",
      //   Link: "https://google.com",
      // },
      // {
      //   Chapter: "Matrix & Diterminent",
      //   Topic: "1st Class",
      //   Link: "https://google.com",
      // },
    ],
  });

  return (
    <div className="bgNeed min-h-screen flex flex-col items-center py-8 px-4 md:px-12">
      <h1 className="text-4xl text-white font-black pb-4 text-center">
        Short Syllabus PDF
      </h1>
      <div className="bg-white shadow-lg hover:shadow-xl rounded-md overflow-hidden w-full mt-4">
        <table className="table flex table-auto w-full leading-normal">
          <thead className="uppercase text-gray-600 text-xs font-semibold bg-gray-200">
            <tr className="hidden md:table-row">
              {pdfList.headers.map((pdfHeader) => (
                <th key={Math.random()} className="text-center p-3">
                  <p>{pdfHeader}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="flex-1 text-gray-700 sm:flex-none">
            { pdfList.data.map((pdfData) => (
              <tr key={Math.random()} className="border-t first:border-t-0 border-b-4 md:border-b-0 border-black md:border-gray-200 flex p-1 md:p-3 hover:bg-gray-100 md:table-row flex-col w-full flex-wrap">
                {Object.entries(pdfData).map((pdfDataEntries) => (
                  <td key={Math.random()} className="p-1 md:p-3">
                    <label
                      className="text-xs text-gray-500 uppercase font-semibold md:hidden"
                      htmlFor=""
                    >
                      {pdfDataEntries[0]}
                    </label>
                    {pdfDataEntries[0] == "Link" ? (
                      <p className="text-left md:text-center">
                        <a
                          href={`${pdfDataEntries[1]}`}
                          className="text-blue-700 font-bold"
                          target="_blank"
                        >
                          PDF
                        </a>
                      </p>
                    ) : (
                      <p className="text-left md:text-center">
                        {pdfDataEntries[1]}
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PDFPage;
