'use client';

import login from '@/config/App/Home/Login';
import { loginSchema } from '@/config/Schema/Login';
// import { useFormik } from 'formik';
import { useFormik } from 'formik';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const initialValue = {
	Email: '',
	Password: '',
};

const Login = () => {
	const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValue,
			validationSchema: loginSchema,
			onSubmit: (values) => {
				console.log(values);
			},
		});

	console.log(errors);
	return (
		<div className="container mx-auto mt-[85px]">
			<div className="grid md:grid-cols-3">
				<div className="mt-7">
					<h2 class="text-4xl font-bold text-gray-900 text-center">
						{login?.h2}
					</h2>

					<div>
						<label
							for="email"
							class="block mb-2 text-sm font-medium text-gray-900"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="Email"
							value={values.Email}
							onChange={handleChange}
							onBlur={handleBlur}
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] mb-1 p-2.5"
							placeholder="John@gmail.com"
							required
						/>
						{errors.Email && touched.Email ? (
							<p className="text-red-700 text-xs">{errors.Email}</p>
						) : null}
					</div>
					<div className="mb-3">
						<label
							for="password"
							class="block mb-2 text-sm font-medium text-gray-900"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							name="Password"
							value={values.Password}
							onChange={handleChange}
							onBlur={handleBlur}
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5 mb-1"
							placeholder="********"
							required
							// onChange={(e) => setPassword(e.target.value)}
						/>
						{errors.Password && touched.Password ? (
							<p className="text-red-700 text-xs">{errors.Password}</p>
						) : null}
					</div>

					<Link href="/" className="hover:underline text-blue-600">
						{login.forgotPassword}
					</Link>

					<div class="flex items-center my-4">
						<input
							id="default-checkbox"
							type="checkbox"
							value=""
							class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
						/>
						<label
							for="default-checkbox"
							class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
						>
							Keep me logged in
						</label>
					</div>

					<div className="">
						<button
							type="submit"
							onClick={handleSubmit}
							class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
						>
							LogIn
						</button>
					</div>

					<div className="mt-3">
						<p>
							{login?.text}{' '}
							<Link
								href="/sing_up"
								className="text-blue-600 dark:text-blue-500 hover:underline"
							>
								{login?.singUp}
							</Link>
						</p>
					</div>
				</div>

				<div className="col-span-2">
					<Image
						src="/accats/login_banner.jpg"
						layout="responsive"
						width={1920}
						height={500}
						alt="Login "
					/>
				</div>
			</div>
		</div>
	);
};

export default Login;
