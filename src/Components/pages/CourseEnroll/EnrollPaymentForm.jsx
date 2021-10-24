import React from "react";

function EnrollPaymentForm({
  formik,
  payment_method,
  setPaymentMethod,
  Course,
}) {
  return (
    <>
      <p className="text-white text-xl font-medium mt-4">Payment information</p>
      <div className="mt-4">
        <label className=" block text-sm text-white" htmlFor="cus_email">
          Payment Method *
        </label>
        <select
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="payment_method"
          required
          aria-label="Payment Method"
          onChange={(e) => setPaymentMethod(e.target.value)}
          value={payment_method}
        >
          <option key={Math.random()} values="">
            Select Payment Method
          </option>
          <option>bkash</option>
          <option>rocket</option>
          <option>nagad</option>
          <option>UMC Office</option>
        </select>
      </div>
      <div className="mt-4">
        <label className="block text-sm text-white" htmlFor="cus_email">
          Number You Paid From *
        </label>
        <input
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="sender_number"
          type="text"
          required
          placeholder="017xxxxxxx"
          aria-label="Number You Paid From"
          onChange={formik.handleChange}
          value={formik.values.sender_number}
          required
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm text-white" htmlFor="cus_email">
          Transaction ID *
        </label>
        <input
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="transaction_id"
          type="text"
          required
          placeholder="fvf548sd"
          aria-label="Transaction"
          onChange={formik.handleChange}
          value={formik.values.transaction_id}
          required
        />
      </div>
      <div className="mt-4">
        <label className=" block text-sm text-white" htmlFor="cus_email">
          Receiver Number *
        </label>
        <select
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="receiver_number"
          required
          aria-label="Number You Sent Money"
          onChange={formik.handleChange}
          value={formik.values.receiver_number}
        >
          <option key={Math.random()} value="">
            Select Receiver Number
          </option>
          {payment_method == "bkash" ? (
            <>
              <option key={Math.random()} value="01717722655">
                01717722655 (Agent Number)
              </option>
              <option key={Math.random()} value="01774649518">
                01774649518 (Personal Number)
              </option>
            </>
          ) : payment_method == "rocket" ? (
            <>
              <option key={Math.random()} value="01785001111">
                01785001111 (Personal Number)
              </option>
              <option key={Math.random()} value="01711905962">
                01711905962 (Personal Number)
              </option>
            </>
          ) : payment_method == "nagad" ? (
            <>
              <option key={Math.random()} value="01785001111">
                01785001111 (Personal Number)
              </option>
              <option key={Math.random()} value="01711905962">
                01711905962 (Personal Number)
              </option>
              <option key={Math.random()} value="01774649518">
                01774649518 (Personal Number)
              </option>
            </>
          ) : (
            <>
              <option key={Math.random()} value="01717722655">
                01717722655 (Agent Number)
              </option>
              <option key={Math.random()} value="01774649518">
                01774649518 (Personal Number)
              </option>
              <option key={Math.random()} value="01785001111">
                01785001111 (Personal Number)
              </option>
              <option key={Math.random()} value="01711905962">
                01711905962 (Personal Number)
              </option>
              <option key={Math.random()} value="01785001111">
                01785001111 (Personal Number)
              </option>
              <option key={Math.random()} value="01711905962">
                01711905962 (Personal Number)
              </option>
              <option key={Math.random()} value="01774649518">
                01774649518 (Personal Number)
              </option>
            </>
          )}
        </select>
      </div>
      <div className="mt-4">
        <label className=" block text-sm text-white" htmlFor="cus_email">
          Paid Ammount *
        </label>
        <input
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="paid_ammount"
          type="number"
          required
          placeholder="5500"
          aria-label="Paid Ammount"
          onChange={formik.handleChange}
          value={formik.values.paid_ammount}
          required
        />
      </div>
      <div className="mt-4">
        <label className=" block text-sm text-white" htmlFor="cus_email">
          Reference
        </label>
        <input
          className="w-full px-5  py-1 text-gray-700 bg-gray-200 rounded"
          id="cus_email"
          name="reference"
          type="text"
          placeholder="July2022"
          aria-label="Reference"
          onChange={formik.handleChange}
          value={formik.values.reference}
        />
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-1 text-white border-2 font-bold tracking-wider bg-indigo-700 rounded"
          type="submit"
        >
          Pay {Course.price} BDT
        </button>
      </div>
    </>
  );
}

export default EnrollPaymentForm;
