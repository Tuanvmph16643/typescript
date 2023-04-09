// 1. Xây dựng giao diện form
// 2. Cần import thư viện quản lý form
// 3. Khai bao cac truong du lieu trong form va validate form
// 4. Su dung resolver de tich hop yup va react-hook-form

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import {Link, useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
import { SignupForm, signupSchema } from '../models';
import { signup } from '../api/auth';
import logo from '../asset/logo.png'



const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<SignupForm>({
        resolver: yupResolver(signupSchema)
    })

    const navigate = useNavigate()

    const onSubmit = async (data: SignupForm) => {
        try {
            const response = await signup(data)
            console.log(response);
            navigate('/signin')
            
        }catch(err) {
            console.log(err);
            
        }

    }

    return <section className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <main
                aria-label="Main"
                className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:py-12 lg:px-16 xl:col-span-6"
            >
                <div className="max-w-xl lg:max-w-3xl">
                    <a className="block text-blue-600" href="/">
                        <span className="sr-only">Home</span>
                        <img src={logo} alt="logo" />
                    </a>

                    <h1
                        className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                    >
                        Đăng ký
                    </h1>

                    <form action="#" className="mt-8 grid grid-cols-6 gap-6" onSubmit={handleSubmit(onSubmit)}>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="FirstName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                First Name
                            </label>

                            <input
                                {...register('firstName')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>
                                {errors.firstName && errors.firstName.message}
                            </p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="LastName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Last Name
                            </label>

                            <input
                                {...register('lastName')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.lastName && errors.lastName.message}
                            </p>
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>

                            <input
                                {...register('email')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.email && errors.email.message}
                            </p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="Password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>

                            <input
                                type="password"
                                {...register('password')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.password && errors.password.message}
                            </p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="PasswordConfirmation"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password Confirmation
                            </label>

                            <input
                                type="password"
                                {...register('confirmPassword')}
                                className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                            />
                            <p className='text-red-600 text-[10px]'>

                                {errors.confirmPassword && errors.confirmPassword.message}
                            </p>
                        </div>
                        <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                            <button
                                className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                            >
                                Create an account
                            </button>

                            <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                                Bạn đã có tài khoản?
                                <Link to="/signin" className="text-gray-700 underline">Log in</Link>.
                            </p>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    </section>

}

export default Signup