import React, { useState } from 'react'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router'
import axios from 'redaxios'
import { Helmet } from 'react-helmet'

function SignUp() {
  const navigate = useNavigate()

  const [sucessSnack, setSuccessSnack] = useState(false)
  const [signingUp, setSigningUp] = useState(false)

  const showSnackbar = (message, duration) => {
    var snackbar = document.getElementById('snackbar')
    snackbar.innerHTML = message
    snackbar.classList.add('visible')
    snackbar.classList.remove('invisible')
    setTimeout(function () {
      snackbar.classList.remove('visible')
      snackbar.classList.add('invisible')
    }, duration)
  }

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('Email ID is a required field')
      .matches(
        /^[\w.%+-]+@vitstudent\.ac\.in$/,
        'Enter VIT Email ID only'
      ),
    password: Yup.string()
      .required('Password is a required field')
      .min(8, 'Password must be at least 8 characters'),
    passwordConfirm: Yup.string()
      .required('Password confirm is a required field')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
    regNo: Yup.string()
      .required('Register Number is a required field')
      .matches('^2[0-4][A-Z]{3}[0-4][0-9]{3}$', 'Invalid Register Number'),
    phone: Yup.number().required('Phone number is a required field'),
  })

  return (
    <>
      <Helmet>
        <title>Stockastic&apos;23 | Sign Up</title>
        <link rel='icon' type='image/svg+xml' href='/stockastic_logo.svg' />
        <meta name='description' content="Stockastic'23 SignUp Page" />
      </Helmet>
      <div className='items-center tracking-[1px] text-[#fff] flex justify-center bg-[#0F0F0F]'>
        <Formik
          validationSchema={schema}
          initialValues={{
            email: '',
            password: '',
            passwordConfirm: '',
            regNo: '',
            phone: '',
          }}
          onSubmit={async (values) => {
            setSigningUp(true)
            await axios
              .post(
                `${import.meta.env.VITE_NEXT_PUBLIC_SERVER_URL}/auth/signup`,
                values
              )
              .then((e) => {
                const status = e.data.status
                if (status === 'false') {
                  setSuccessSnack(false)
                  showSnackbar(e.data.err, 1500)
                } else {
                  setSuccessSnack(true)
                  showSnackbar('Proceeding with Account Verification', 1500)
                  setTimeout(() => {
                    localStorage.setItem('email', values.email)
                    navigate('/verifyuser')
                  }, 2000)
                }
              })
              .catch((e) => {
                console.log(e)
                setSuccessSnack(false)
                showSnackbar(e.data.message, 1500)
              })
            setSigningUp(false)
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
            <div className='login grid md:grid-cols-2 w-[100%] h-[100%]'>
              <div className='form text-center m-4'>
                <a href='/' className='flex w-fit'>
                  <img className='w-12' src='logo.svg' alt='logo' />
                  <div className='my-auto text-[#5FBDC8]'>Stockastic</div>
                </a>

                <form noValidate onSubmit={handleSubmit}>
                  <span className='block font-[500] text-2xl mt-[60px] mb-3'>
                    CREATE AN ACCOUNT
                  </span>
                  <span className='block text-[#858585] mb-3'>Sign up now...</span>

                  <div class='flex flex-col items-center'>
                    <div class='w-[80%]'>
                      <input
                        type='email'
                        name='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder='Enter VIT Email ID only'
                        className='form-control inp_text bg-[#1E1B1E] rounded-xl p-2 w-full mb-2'
                        id='email'
                      />
                      <p className='error text-left ps-1 text-red-500 text-[10px] max-w-[80%] mb-2'>
                        {errors.email && touched.email && errors.email}
                      </p>
                    </div>

                    <div class='ml-5 w-[80%]'>
                      <input
                        type='number'
                        name='phone'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phone}
                        placeholder='Enter phone number'
                        className='form-control inp_text bg-[#1E1B1E] rounded-xl p-2 w-full mb-2'
                        style={{ marginBottom: '0.5rem' , marginLeft: '-1.5rem' }}
                        id='phone'
                      />
                      <p className='error text-left ml-[-6px] text-red-500 text-[10px] max-w-[80%] mb-2'>
                        {errors.phone && touched.phone && errors.phone}
                      </p>
                    </div>

                    <div class='w-[80%]'>
                      <input
                        type='text'
                        name='regNo'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.regNo}
                        placeholder='Enter Registration Number'
                        className='form-control inp_text bg-[#1E1B1E] rounded-xl p-2 w-full mb-2'
                        id='regNo'
                      />
                      <p className='error text-left ps-1 text-red-500 text-[10px] max-w-[80%] mb-2'>
                        {errors.regNo && touched.regNo && errors.regNo}
                      </p>
                    </div>

                    <div class='w-[80%]'>
                      <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder='Enter Password'
                        className='form-control inp_text bg-[#1E1B1E] rounded-xl p-2 w-full mb-2'
                        id='password'
                      />
                      <p className='error text-left ps-1 text-red-500 text-[10px] max-w-[80%] mb-2'>
                        {errors.password && touched.password && errors.password}
                      </p>
                    </div>

                    <div class='w-[80%]'>
                      <input
                        type='password'
                        name='passwordConfirm'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.passwordConfirm}
                        placeholder='Confirm your password'
                        className='form-control inp_text bg-[#1E1B1E] rounded-xl p-2 w-full mb-2'
                        id='passwordConfirm'
                      />
                      <p className='error text-left ps-1 text-red-500 text-[10px] max-w-[80%] mb-2'>
                        {errors.passwordConfirm &&
                          touched.passwordConfirm &&
                          errors.passwordConfirm}
                      </p>
                    </div>
                  </div>
                  <button
                    type='submit'
                    className={`mx-[10%] w-[50%] px-4 py-3 rounded-xl mb-6 hover:opacity-75 mt-[20px] ${
                      signingUp ? 'bg-[#7353BA] opacity-75' : 'bg-[#7353BA]'
                    }`}
                    disabled={signingUp}
                  >
                    {signingUp ? 'Creating Account...' : 'Create Account'}
                  </button>
                </form>
                <button
                      type='button'
                      className='bg-[#1E1B1E] mx-[10%] w-[50%] px-4 py-3 rounded-xl mb-[30px] hover:ring hover:ring-violet-100'
                      onClick={() => {navigate("/signin")}}
                    >
                      Sign In
                    </button>
                <a
                  href='mailto:dreammerchantsvit@gmail.com'
                  className='md:flex md:w-fit hidden md:absolute md:bottom-3'
                >
                  <img src='gmail-grey.svg' alt='gmail' />
                  <div className='ms-2 my-auto'>
                    dreammerchantsvit@gmail.com
                  </div>
                </a>
              </div>
              <div class='h-[97vh] md:block hidden'>
                <div className='bg-[#7353BA] hidden md:flex m-4 rounded-e-2xl h-full'>
                  <img className='mx-auto' src='SignUpPic.svg' alt='sign up' />
                </div>
              </div>
            </div>
          )}
        </Formik>
        {sucessSnack ? (
          <div
            id='snackbar'
            className={
              'w-fit h-fit bg-green-400 border-green-800 text-black-700 border px-4 py-3 rounded transition invisible fixed bottom-4 left-4'
            }
            role='alert'
          >
            Snackbar message here.
          </div>
        ) : (
          <div
            id='snackbar'
            className={
              'w-fit h-fit bg-red-100 border-red-400 text-red-700 border px-4 py-3 rounded transition invisible fixed bottom-4 left-4'
            }
            role='alert'
          >
            Snackbar message here.
          </div>
        )}
      </div>
    </>
  )
}

export default SignUp