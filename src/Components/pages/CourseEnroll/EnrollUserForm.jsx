import React from "react";

function EnrollUserForm({ formik }) {
  return (
    <>
      <p className="text-white text-xl font-medium mt-4">
        Personal information
      </p>
      <div className="mt-4">
        <label className="block text-sm text-white" htmlFor="cus_email">
          Full Name
        </label>
        <input
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="fullName"
          type="text"
          required
          placeholder="Your Full Name"
          aria-label="Full Name"
          onChange={formik.handleChange}
          value={formik.values.fullName}
          required
        />
        <div className="mt-4">
          <label className="block text-sm text-white" htmlFor="cus_email">
            Facebook
          </label>
          <input
            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="facebook"
            type="url"
            required
            placeholder="Facebook ID Url"
            aria-label="Facebook ID Url"
            onChange={formik.handleChange}
            value={formik.values.facebook}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white" htmlFor="cus_email">
            Phone
          </label>
          <input
            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="phone"
            type="text"
            required
            placeholder="Mobile Phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white" htmlFor="cus_email">
            Father's / Guardian Phone
          </label>
          <input
            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="fatherPhone"
            type="text"
            required
            placeholder="Father's / Guardian Phone"
            onChange={formik.handleChange}
            value={formik.values.fatherPhone}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white" htmlFor="cus_email">
            Father's / Guardian Occupation
          </label>
          <input
            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="fatherOccupation"
            type="text"
            required
            placeholder="Father's / Guardian Occupation"
            onChange={formik.handleChange}
            value={formik.values.fatherOccupation}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white" htmlFor="cus_email">
            Mother's Phone
          </label>
          <input
            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="motherPhone"
            type="text"
            required
            placeholder="Mother's Phone"
            aria-label="Mother's Phone"
            onChange={formik.handleChange}
            value={formik.values.motherPhone}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white" htmlFor="cus_email">
            Mother's Occupation
          </label>
          <input
            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="motherOccupation"
            type="text"
            required
            placeholder="Mother's Occupation"
            onChange={formik.handleChange}
            value={formik.values.motherOccupation}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white" htmlFor="cus_email">
            School Name
          </label>
          <input
            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="schoolName"
            type="text"
            required
            placeholder="School Name"
            onChange={formik.handleChange}
            value={formik.values.schoolName}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-sm text-white" htmlFor="cus_email">
            College Name
          </label>
          <input
            className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
            id="cus_email"
            name="collegeName"
            type="text"
            required
            placeholder="College Name"
            onChange={formik.handleChange}
            value={formik.values.collegeName}
            required
          />
        </div>
        <div className="mt-4">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            HSC Batch
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="hscBatch"
              onChange={formik.handleChange}
              value={formik.values.hscBatch}
              required
            >
              <option key={Math.random()} value="">
                Select HSC Batch
              </option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
            htmlFor="grid-state"
          >
            Blood Group
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              name="bloodGroup"
              onChange={formik.handleChange}
              value={formik.values.bloodGroup}
              required
            >
              <option key={Math.random()} value="">
                Select Blood Group
              </option>
              <option>O+</option>
              <option>O-</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>B-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnrollUserForm;
