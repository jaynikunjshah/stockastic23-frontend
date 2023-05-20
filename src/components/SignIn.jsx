import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "redaxios";
import { useNavigate } from "react-router";

function SignIn() {
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
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  return (
    <div className="items-center tracking-[1px] text-[#fff] flex h-screen justify-center bg-[#0F0F0F]">
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await axios
            .post(
              `https://stockastic23-backend.onrender.com/auth/login`,
              values
            )
            .then((e) => {
              const status = e.data.status;
              if (status === "false") {
                setSuccessSnack(false);
                showSnackbar(e.data.err, 1500);
              } else {
                setSuccessSnack(true);
                showSnackbar("Successful ! Logging In", 1500);
                localStorage.setItem("jwt", e.data.jwt);
                setTimeout(() => {
                  navigate("/");
                }, 2000);
              }
            })
            .catch((e) => {
              console.log(e);
              setSuccessSnack(false);
              showSnackbar(e.message, 1500);
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
              <img className="mx-auto" src="man_with_pc.svg" alt="Sign In" />
            </div>

            <div className="form w-100 text-center justify-between m-4">
              <a href="#" className="flex justify-end">
                <img className="w-12" src="logo.svg" alt="" />
                <div className="my-auto text-[#5FBDC8]">Stockastics</div>
              </a>

              <form noValidate onSubmit={handleSubmit}>
                <span className="block font-[1000] text-2xl mt-[17%] mb-3">
                  Sign In
                </span>
                <span className="block light">Welcome to Stockastics</span>
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
                <p className="error mb-[10px] text-left text-red-500 text-[10px] ms-[10%]">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control p-[10px] text-[14px] rounded-xl bg-[#1E1B1E] mx-[10%] w-[80%] mb-[15px]"
                />
                <p className="error text-left text-red-500 text-[10px] ms-[10%] mb-[50px]">
                  {errors.password && touched.password && errors.password}
                </p>
                <button
                  type="submit"
                  className="bg-[#7353BA] mx-[10%] w-[80%] px-4 py-3 rounded-xl mb-6 hover:opacity-75"
                >
                  Sign In
                </button>
                <a href="#">
                  <button
                    type="submit"
                    className="bg-[#1E1B1E] mx-[10%] w-[80%] px-4 py-3 rounded-xl mb-[30px] hover:ring hover:ring-violet-100 "
                  >
                    Create Account
                  </button>
                </a>
              </form>
              <a className="flex absolute bottom-4 right-4">
                <img src="gmail-grey.svg" alt="gmail" />
                <div className="ms-2 my-auto">DM@gmail.com</div>
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

export default SignIn;
