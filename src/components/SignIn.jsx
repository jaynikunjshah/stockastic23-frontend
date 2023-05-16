import { Formik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
  email: Yup.string()
    .required("VIT Email ID is a required field")
    .matches("[A-Za-z]+[.][A-Za-z]+202[0-4]{1}@vitstudent.ac.in", 'Enter VIT Email ID only')
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is a required field")
    .min(8, "Password must be at least 8 characters"),
});

function SignIn() {
  return (
    <div className="items-center tracking-[1px] text-[#fff] flex h-screen justify-center">
      <Formik
        validationSchema={schema}
        initialValues={{ email: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          console.log(JSON.stringify(values));
          resetForm();
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
          <div className="login grid md:grid-cols-2 gap-6 min-w-[60%] bg-[#0F0F0F]">
            <div className="bg-[#7353BA] hidden md:block m-4 rounded-e-2xl"></div>

            <div className="form w-100 text-center m-4">
              <a href="#" className="flex justify-end"><img className="w-12" src="logo.svg" alt="" /><div className="my-auto text-[#5FBDC8]">Stockastics</div></a>

              <form noValidate onSubmit={handleSubmit}>
                <span className="block font-[1000] text-2xl mt-9 mb-3">Sign In</span>
                <span className="block light">Welcome to Stockastics</span>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="Enter VIT Email ID"
                  className="form-control inp_text p-[10px] text-[14px] rounded-xl my-[15px] bg-[#1E1B1E] w-[100%]"
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
                  className="form-control p-[10px] text-[14px] rounded-xl my-[15px] bg-[#1E1B1E] w-[100%]"
                />
                <p className="error mb-[10px] text-left text-red-500 text-[10px]">
                  {errors.password && touched.password && errors.password}
                </p>
                <button type="submit" className="bg-[#7353BA] w-[100%] px-4 py-3 mt-5 rounded-xl mb-4">Sign In</button>
                <a href="#"><button type="submit" className="bg-[#1E1B1E] w-[100%] px-4 py-3 rounded-xl mb-[90px]">Create Account</button></a>
              </form>
              <a className="flex justify-end">
                <img src="gmail-grey.svg" alt="gmail"/>
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