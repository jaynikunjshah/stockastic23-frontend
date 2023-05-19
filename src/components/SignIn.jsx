import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router";

function SignIn() {
  
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("VIT Email ID is a required field")
      .matches(
        "[A-Za-z]+[.][A-Za-z]+202[0-4]{1}@vitstudent.ac.in",
        "Enter VIT Email ID only"
      )
      .email("Invalid email format"),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
  });

  // const submissionHandle = async (values) => {
  //   console.log(e,values)
  //   await axios
  //     .post(`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/login`, values)
  //     .then((e) => {
  //       const status = e.data.status;
  //       if (status === "false") {
  //         alert(e.data.err);
  //       } else {
  //         alert("Successful ! Logging in");
  //         localStorage.setItem("jwt", e.data.jwt);
  //         navigate("/");
  //       }
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //       if (e.message != "Request failed with status code 400") {
  //         alert(e.message);
  //       } else {
  //         alert(e.response.data.err);
  //       }
  //     });
  // }}

  return (
    <div className="items-center tracking-[1px] text-[#fff] flex h-screen justify-center bg-[#0F0F0F]">
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await axios
            .post(`https://stockastic23-backend.onrender.com/auth/login`, values)
            .then((e) => {
              const status = e.data.status;
              if (status === "false") {
                alert(e.data.err);
              } else {
                alert("Successful ! Logging in");
                localStorage.setItem("jwt", e.data.jwt);
                navigate("/");
              }
            })
            .catch((e) => {
              console.log(e);
              if (e.message != "Request failed with status code 400") {
                alert(e.message);
              } else {
                alert(e.response.data.err);
              }
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
                <p className="error mb-[10px] text-left text-red-500 text-[10px]">
                  {errors.email && touched.email && errors.email}
                </p>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="Enter password"
                  className="form-control p-[10px] text-[14px] rounded-xl mb-[50px] bg-[#1E1B1E] mx-[10%] w-[80%]"
                  id="password"
                />
                <p className="error mb-[10px] text-left text-red-500 text-[10px]">
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
                    className="bg-[#1E1B1E] mx-[10%] w-[80%] px-4 py-3 rounded-xl mb-[30px] hover:ring hover:ring-violet-100"
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
    </div>
  );
}

export default SignIn;
