import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import axios from "redaxios";

function SignUp() {

  const navigate = useNavigate();

  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Email ID is a required field")
      .matches(
        "^[a-z]+[.][a-z]+202[0-4]{1}[0-9]?@vitstudent.ac.in$",
        "Enter VIT Email ID only"
      ),
    password: Yup.string()
      .required("Password is a required field")
      .min(8, "Password must be at least 8 characters"),
    passwordConfirm: Yup.string()
      .required("Password confirm is a required field"),
    regNo: Yup.string()
      .required("Register Number is a required field")
      .matches("^2[0-4][A-Z]{3}[0-4][0-9]{3}$", "Invalid Register Number"),
  });
  return (
    <div className="items-center tracking-[1px] text-[#fff] flex justify-center bg-[#0F0F0F]">
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "", passwordConfirm: "",  regNo: ""}}
        onSubmit={async (values) => {
          await axios
            .post(`https://stockastic23-backend.onrender.com/auth/signup`, values)
            .then((e) => {
              const status = e.data.status;
              if (status === "false") {
                alert(e.data.err);
              } else {
                alert("Successful ! Logging in");
                localStorage.setItem("email", values.email);
                navigate("/verifyuser");
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
						<div className="form w-100 text-center m-4">
							<a href="#" className="flex">
								<img className="w-12" src="logo.svg" alt="" />
								<div className="my-auto text-[#5FBDC8]">Stockastics</div>
							</a>

							<form noValidate onSubmit={handleSubmit}>
								<span className="block font-[500] text-2xl mt-[60px] mb-3">
									CREATE AN ACCOUNT
								</span>
								<span className="block text-[#858585]">Sign up now...</span>
								<input
									type="name"
									name="name"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.name}
									placeholder="Enter Name"
									className="form-control inp_text p-[10px] text-[14px] rounded-xl my-[15px] bg-[#1E1B1E]  mx-[10%] w-[80%]"
									id="name"
								/>
								<p className="error mb-[10px] text-left text-red-500 text-[10px]  ms-[10%]">
									{errors.name && touched.name && errors.name}
								</p>
								<input
									type="email"
									name="email"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.email}
									placeholder="Enter VIT Email ID"
									className="form-control inp_text p-[10px] text-[14px] rounded-xl my-[15px] bg-[#1E1B1E]  mx-[10%] w-[80%]"
									id="email"
								/>
								<p className="error mb-[10px] text-left text-red-500 text-[10px] ms-[10%]">
									{errors.email && touched.email && errors.email}
								</p>
								<input
									type="registration_number"
									name="registration_number"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.registration_number}
									placeholder="Enter Registration Number"
									className="form-control inp_text p-[10px] text-[14px] rounded-xl my-[15px] bg-[#1E1B1E]  mx-[10%] w-[80%]"
									id="registration_number"
								/>
								<p className="error mb-[10px] text-left text-red-500 text-[10px]  ms-[10%]">
									{errors.registration_number &&
										touched.registration_number &&
										errors.registration_number}
								</p>
								<input
									type="password"
									name="password"
									onChange={handleChange}
									onBlur={handleBlur}
									value={values.password}
									placeholder="Enter password"
									className="form-control p-[10px] text-[14px] rounded-xl my-[15px] bg-[#1E1B1E]  mx-[10%] w-[80%]"
								/>
								<p className="error mb-[40px] text-left text-red-500 text-[10px]  ms-[10%]">
									{errors.password && touched.password && errors.password}
								</p>
								<button
									type="submit"
									className="bg-[#7353BA]  mx-[10%] w-[80%] px-4 py-3 mt-4 rounded-xl mb-6 hover:opacity-75"
								>
									Create Account
								</button>
								<a href="/SignIn">
									<button
										type="button"
										className="bg-[#1E1B1E]  mx-[10%] w-[80%] px-4 py-3 rounded-xl mb-[30px] hover:ring hover:ring-violet-100"
									>
										Sign In
									</button>
								</a>
							</form>
							<a href="mailto:DM@gmail.com" className="flex mt-[4.3%] bottom-4">
								<img src="gmail-grey.svg" alt="gmail" />
								<div className="ms-2 my-auto">DM@gmail.com</div>
							</a>
						</div>
						<div className="bg-[#7353BA] hidden md:flex m-4 rounded-e-2xl ">
							<img className="mx-auto" src="SignUpPic.svg" alt="" />
						</div>
					</div>
        )}
      </Formik>
    </div>
  );
}

export default SignUp;
