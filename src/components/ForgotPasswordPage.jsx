import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "redaxios";
import { useNavigate } from "react-router";

function ForgotPasswordPage() {
  const navigate = useNavigate();

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
    email: Yup.string()
      .required("VIT Email ID is a required field")
      .matches(
        "[a-z]+[.][a-z]+202[0-4]{1}[a-z]?@vitstudent.ac.in",
        "Enter VIT Email ID only"
      )
      .email("Invalid email format"),
  });

  return (
    <div className="items-center tracking-[1px] text-[#fff] flex h-screen justify-center bg-[#0F0F0F]">
      <Formik
        validationSchema={schema}
        initialValues={{ email: ""}}
        onSubmit={async (values) => {
          await axios
            .post(
              `${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/auth/forgotPassword`,
              values
            )
            .then((e) => {
              const status = e.data.status;
              if (status === "false") {
                setSuccessSnack(false);
                showSnackbar(e.data.err, 1500);
              } else {
                setSuccessSnack(true);
                showSnackbar("Successful ! Reset Email sent", 1500);
                setTimeout(() => {
                  navigate("/signin");
                }, 2000);
              }
            })
            .catch((e) => {
              console.log(e);
                setSuccessSnack(false);
                showSnackbar(e.data.message, 1500);
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
          <div className="login grid md:grid-cols-2 w-[100%] h-[100%]">
            <div className="bg-[#7353BA] hidden md:flex m-4 rounded-s-2xl">
              <img className="mx-auto" src="man_with_pc.svg" alt="Forgot password" />
            </div>

            <div className="form text-center m-4">
              <a href="/" className="flex w-fit">
                <img className="w-12" src="logo.svg" alt="" />
                <div className="my-auto text-[#5FBDC8]">Stockastic</div>
              </a>

              <form noValidate onSubmit={handleSubmit}>
                <span className="block font-[1000] text-2xl mt-[17%] mb-3">
                  Enter Email to reset your password
                </span>
                <span className="block light">Welcome to Stockastic</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter VIT Email ID"
                  className="form-control inp_text p-[10px] text-[14px] rounded-xl mt-[50px] mb-[15px] bg-[#1E1B1E] mx-[10%] w-[80%]"
                  id="email"
                />
                <p className="error mb-[10px] text-left text-red-500 text-[12px] ms-[10%] mt-[-5px]">
                  {errors.email && touched.email && errors.email}
                </p>
                <button
                  type="submit"
                  className="bg-[#7353BA] mx-[10%] w-[80%] px-4 py-3 rounded-xl mb-6 hover:opacity-75"
                >
                  Reset Password
                </button>
                <a href="/signin">
                  <button
                    type="button"
                    className="bg-[#1E1B1E] mx-[10%] w-[80%] px-4 py-3 rounded-xl mb-[30px] hover:ring hover:ring-violet-100 "
                    onClick={() => {navigate("/signin")}}
                  >
                    Go back
                  </button>
                </a>
              </form>
              {/* Mail */}
              <a
                href="mailto:dreammerchantsvit@gmail.com"
                className="flex absolute bottom-4 md:right-4"
              >
                <img src="gmail-grey.svg" alt="gmail" />
                <div className="ms-2 my-auto">dreammerchantsvit@gmail.com</div>
              </a>
            </div>
          </div>
        )}
      </Formik>
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

export default ForgotPasswordPage;