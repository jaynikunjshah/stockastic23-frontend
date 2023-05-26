import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router";
import axios from "redaxios";

function VerifyUser() {
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

  const checkEmail = () => {
    const email = localStorage.getItem("email");
    if (!email) {
      navigate("/");
    }
  };

  useEffect(() => {
    checkEmail();
  }, []);

  const resendOTP = async () => {
    await axios
      .post(`${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/auth/resendotp`, {
        email: localStorage.getItem("email"),
      })
      .then((e) => {
        const status = e.data.status;
        if (status === "fail") {
          setSuccessSnack(false);
          showSnackbar(e.data.err, 1500);
        } else {
          setSuccessSnack(true);
          showSnackbar("Successful ! OTP sent", 1500);
          console.log(sucessSnack)
        }
      })
      .catch((e) => {
        setSuccessSnack(false);
        showSnackbar(e.data.message, 1500);
      });
  };

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
          console.log("pressed");
          await axios
            .post(
              `${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/auth/verify`,
              {
                email: localStorage.getItem("email"),
                otp: values.otp,
              }
            )
            .then((e) => {
              console.log(e);
              const status = e.data.status;
              if (status === "false") {
                setSuccessSnack(false);
                showSnackbar(e.data.err, 1500);
              } else {
                setSuccessSnack(true);
                showSnackbar("Account Successfully Created !", 1500);
                setTimeout(() => {
                  localStorage.clear();
                  localStorage.setItem("name", e.data.data.name);
                  localStorage.setItem("jwt", e.data.token);
                  navigate("/teamdashboard");
                }, 2000);
              }
            })
            .catch((e) => {
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
          <div className="verifyuser grid md:grid-cols-2 w-[100%] h-screen">
            <div className="form text-center m-4">
              <a className="flex w-fit cursor-default">
                <img className="w-12" src="logo.svg" alt="" />
                <div className="my-auto text-[#5FBDC8]">Stockastic</div>
              </a>

              <form noValidate onSubmit={handleSubmit} className="mt-[200px]">
                <span className="block font-[500] text-2xl mt-[60px] mb-3">
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
                <p className="error mb-[10px] mt-[5px] text-left text-red-500 text-[12px] ms-[10%]">
                  {errors.otp && touched.otp && errors.otp}
                </p>
                <button
                  type="submit"
                  className="bg-[#7353BA]  mx-[10%] w-[50%] px-4 py-3 mt-4 rounded-xl mb-6 hover:opacity-75"
                >
                  Verify
                </button>
                <button
                  type="button"
                  onClick={resendOTP}
                  className="bg-[#1E1B1E] mx-[10%] w-[50%] px-4 py-3 rounded-xl mb-[30px] hover:ring hover:ring-violet-100"
                >
                  Resend OTP
                </button>
              </form>
              <a
                href="mailto:dreammerchantsvit@gmail.com"
                className="flex bottom-4 w-fit md:mt-[170px]"
              >
                <img src="gmail-grey.svg" alt="gmail" />
                <div className="ms-2 my-auto">dreammerchantsvit@gmail.com</div>
              </a>
            </div>
            <div className="bg-[#7353BA] hidden md:flex m-4 rounded-e-2xl">
              <img className="mx-auto" src="SignUpPic.svg" alt="" />
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

export default VerifyUser;
