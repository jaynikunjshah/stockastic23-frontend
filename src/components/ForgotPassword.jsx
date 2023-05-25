import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router";
import axios from "axios";

function ForgotPassword() {

	const location = useLocation()
	const pathName = location.pathname.replace('/resetpassword/','')

  const [sucessSnack, setSuccessSnack] = useState(false);

  const showSnackbar = (message, duration) => {
    var snackbar = document.getElementById("snackbar");
    snackbar.innerHTML = message;
    snackbar.classList.add("visible");
    snackbar.classList.remove("invisible");
    setTimeout(function () {
      snackbar.classList.remove("visible");
      snackbar.classList.add("invisible");
    }, duration);
  };

  const schema = Yup.object().shape({
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    passwordConfirm: Yup.string()
      .required("Password confirm is a required field")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
  });
  return (
    <div className="text-white h-screen flex">
      <div className="mx-auto my-auto w-[80%] md:w-[40%]">
        <Formik
          validationSchema={schema}
          initialValues={{
            password: "",
            passwordConfirm: "",
          }}
		  onSubmit={async (values) => {
			await axios
			  .patch(
				`${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/auth/resetPassword/${pathName}`,
				values
			  )
			  .then((e) => {
				const status = e.data.status;
				if (status === "false") {
				  setSuccessSnack(false);
				  showSnackbar(e.data.err, 1500);
				} else {
				  setSuccessSnack(true);
				  showSnackbar("Successful ! Password changed", 1500);
				  setTimeout(() => {
					navigate("/");
				  }, 2000);
				}
			  })
			  .catch((e) => {
				console.log(e);
				  setSuccessSnack(false);
				  showSnackbar(e.response.data.message, 1500);
			  });
		  }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <div className="text-center">
              <form noValidate onSubmit={handleSubmit}>
                <span className="block font-[500] text-2xl mt-[60px] mb-9">
                  CREATE NEW PASSWORD
                </span>

                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control p-[10px] text-[14px] rounded-xl my-[15px] bg-[#1E1B1E] w-full"
                />
                <p className="error text-left text-red-500 text-[10px]">
                  {errors.password && touched.password && errors.password}
                </p>
                <input
                  type="password"
                  name="passwordConfirm"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.passwordConfirm}
                  placeholder="Confirm Password"
                  className="form-control inp_text p-[10px] text-[14px] rounded-xl my-[15px] bg-[#1E1B1E] w-full"
                  id="passwordConfirm"
                />
                <p className="error mb-[10px] text-left text-red-500 text-[10px]">
                  {errors.passwordConfirm &&
                    touched.passwordConfirm &&
                    errors.passwordConfirm}
                </p>
                <button
                  type="submit"
                  className="bg-[#7353BA] md:w-[30%] px-4 py-3 mt-4 rounded-xl mb-6 hover:opacity-75"
                >
                  Submit
                </button>
              </form>
            </div>
          )}
        </Formik>
      </div>
      {sucessSnack ? (
        <div
          id="snackbar"
          className={
            "w-fit h-fit bg-green-400 border-green-800 text-black-700 border px-4 py-3 rounded transition invisible fixed bottom-4 left-4"
          }
          role="alert"
        >
          Snackbar message here.
        </div>
      ) : (
        <div
          id="snackbar"
          className={
            "w-fit h-fit bg-red-100 border-red-400 text-red-700 border px-4 py-3 rounded transition invisible fixed bottom-4 left-4"
          }
          role="alert"
        >
          Snackbar message here.
        </div>
      )}
    </div>
  );
}

export default ForgotPassword;
