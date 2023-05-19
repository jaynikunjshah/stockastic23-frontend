import React, { useEffect } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import axios from "axios";

function VerifyUser() {
  const navigate = useNavigate();

  const checkEmail = () => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkEmail();
  }, []);

  const schema = Yup.object().shape({
    otp: Yup.number().required("OTP must be entered"),
  });
  return (
    <div className="items-center tracking-[1px] text-[#fff] flex justify-center bg-[#0F0F0F]">
      <Formik
        validationSchema={schema}
        initialValues={{
          otp: "",
        }}
        onSubmit={async (values) => {
            console.log('pressed')
          await axios
            .post(`https://stockastic23-backend.onrender.com/auth/verify`, {
              email: localStorage.getItem("email"),
              otp: values.otp,
            })
            .then((e) => {
                console.log(e)
              const status = e.data.status;
              if (status === "false") {
                alert(e.data.err);
              } else {
                alert("Successful ! Logging in");
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
            <div className="form w-100 text-center m-4">
              <a href="#" className="flex">
                <img className="w-12" src="logo.svg" alt="" />
                <div className="my-auto text-[#5FBDC8]">Stockastics</div>
              </a>

              <form noValidate onSubmit={handleSubmit}>
                <span className="block font-[500] text-2xl mt-9 mb-3">
                  VERIFY YOUR ACCOUNT
                </span>
                <input
                  type="number"
                  name="otp"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.otp}
                  placeholder="Enter OTP"
                  className="form-control inp_text p-[10px] text-[14px] rounded-xl my-[15px] bg-[#1E1B1E]  mx-[10%] w-[80%]"
                  id="otp"
                />
                <p className="error mb-[10px] text-left text-red-500 text-[10px]">
                  {errors.otp && touched.otp && errors.otp}
                </p>
                <button
                  type="submit"
                  className="bg-[#7353BA]  mx-[10%] w-[80%] px-4 py-3 mt-4 rounded-xl mb-6 hover:opacity-75"
                >
                  Verify
                </button>
                <a href="#">
                  <button
                    className="bg-[#1E1B1E]  mx-[10%] w-[80%] px-4 py-3 rounded-xl mb-[30px] hover:ring hover:ring-violet-100"
                  >
                    Resend OTP
                  </button>
                </a>
              </form>
              <a href="mailto:DM@gmail.com" className="flex mt-[4.3%] bottom-4">
                <img src="gmail-grey.svg" alt="gmail" />
                <div className="ms-2 my-auto">DM@gmail.com</div>
              </a>
            </div>
            <div className="bg-[#7353BA] hidden md:flex m-4 rounded-e-2xl">
              <img className="mx-auto" src="SignUpPic.svg" alt="" />
            </div>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default VerifyUser;
