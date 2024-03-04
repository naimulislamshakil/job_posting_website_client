import login from '@/config/App/Home/Login';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
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
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] mb-5 p-2.5"
							placeholder="John@gmail.com"
							required
						/>
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
							class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[80%] p-2.5"
							placeholder="********"
							required
							// onChange={(e) => setPassword(e.target.value)}
						/>
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
