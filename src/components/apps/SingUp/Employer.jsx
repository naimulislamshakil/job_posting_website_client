'use client';
import employer, {
	employers,
	hearUs,
	industrys,
	positions,
	typeofEmployer,
} from '@/config/App/SingUp/Employer';
import seeker, {
	availability,
	current_job_function,
	highest_qualification,
	jobFunction,
	years_of_experience,
} from '@/config/App/SingUp/Seeker';
import React, { useState } from 'react';
import PasswordStrength from './PasswordStrength';
import Link from 'next/link';
import { useFormik } from 'formik';
import { countryCodes } from '@/config/App/SingUp/Country';
import { employerSchema } from '@/config/Schema/Employer';

const initialValue = {
	First_Name: '',
	Last_Name: '',
	Email: '',
	Position: '',
	Country_Code: '',
	Number: '',
	Company_Name: '',
	Industry: '',
	Employees: '',
	EmployerType: '',
	Website: '',
	HearUs: '',
	Contact_Person: '',
	Notification_Email: '',
	Cuntry: '',
	Address: '',
	Phone_Number: '',
	CountryCode: '',
};

const Employer = () => {
	const [password, setPassword] = useState('');

	const { values, touched, errors, handleBlur, handleChange, handleSubmit } =
		useFormik({
			initialValues: initialValue,
			validationSchema: employerSchema,
			onSubmit: (values) => {
				console.log(values);
			},
		});

	return (
		<div className="container mx-auto mt-28">
			<h3 className="text-center text-3xl text-gray-700">{employer?.h4}</h3>
			<p className="text-lg text-center text-gray-500 mt-2">{employer?.p}</p>
			<h2 className="text-center text-2xl text-gray-500 mt-2 font-bold">
				{employer?.step1}
			</h2>

			{/* Create a card for Step 1 */}

			<div className="bg-gray-300 rounded p-5 mt-5 w-full">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-2">
					<div>
						<h4 className="text-lg font-semibold text-gray-700">
							{employer?.company_representative}
						</h4>
						<p className="pr-3 text-lg mt-3 text-gray-700">
							{employer?.companyDetils}
						</p>
					</div>
					<div className="col-span-3">
						{/* Create a card for from */}

						<div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
							<form>
								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="first_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											First name
										</label>
										<input
											type="text"
											id="first_name"
											name="First_Name"
											value={values.First_Name}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="John"
											required
										/>

										{errors.First_Name && touched.First_Name ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.First_Name}
											</p>
										) : null}
									</div>
									<div>
										<label
											for="last_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Last name
										</label>
										<input
											type="text"
											id="last_name"
											name="Last_Name"
											value={values.Last_Name}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="Doe"
											required
										/>
										{errors.Last_Name && touched.Last_Name ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Last_Name}
											</p>
										) : null}
									</div>
								</div>

								{/* Email & Password */}
								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="email"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Work Email
										</label>
										<input
											type="email"
											id="email"
											name="Email"
											value={values.Email}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="John@company.com"
											required
										/>
										{errors.Email && touched.Email ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Email}
											</p>
										) : null}
									</div>
									<div>
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
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="********"
											required
											onChange={(e) => setPassword(e.target.value)}
										/>

										{/* Password chacker Bar */}
										<PasswordStrength password={password} />
									</div>
								</div>

								{/* Date of Birth */}

								<div>
									<label
										for="dob"
										class="block mb-2 text-sm font-medium text-gray-900"
									>
										{employer?.Position_in_Company}
									</label>
									<div class="grid gap-6 mb-6 md:grid-cols-1">
										<div>
											<select
												id="dob"
												name="Position"
												value={values.Position}
												onChange={handleChange}
												onBlur={handleBlur}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												{positions?.map((position, i) => (
													<option key={i} value={position}>
														{position}
													</option>
												))}
											</select>
											{errors.Position && touched.Position ? (
												<p className="text-red-700 text-xs mt-1">
													{errors.Position}
												</p>
											) : null}
										</div>
									</div>
								</div>

								{/* Country code & phone number */}

								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="cc"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Country Code
										</label>
										<select
											id="cc"
											name="Country_Code"
											value={values?.Country_Code}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{countryCodes?.map((code, i) => (
												<option
													selected={code.name === 'Ghana' ? 'true' : 'false'}
													value={`${code.name} ${code.dial_code}`}
													key={i}
												>{`${code.name} ${code.dial_code}`}</option>
											))}
										</select>

										{errors.Country_Code && touched.Country_Code ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Country_Code}
											</p>
										) : null}
									</div>
									<div>
										<label
											for="pn"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											Phone Number
										</label>
										<input
											type="text"
											id="pn"
											name="Number"
											value={values.Number}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="9754234891"
											required
										/>
										{errors.Number && touched.Number ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Number}
											</p>
										) : null}
									</div>
								</div>

								<div className="flex justify-center items-center">
									<h3 className="mr-2">{seeker?.question}</h3>
									<Link href="/login" className="text-blue-600">
										{seeker?.login}
									</Link>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

			<h2 className="text-center text-2xl text-gray-500 my-4 font-bold">
				{employer?.step2}
			</h2>

			{/* Create a card for step 2 */}

			<div className="bg-gray-300 rounded p-5 mt-5 w-full">
				<div className="grid md:grid-cols-4 grid-cols-1 gap-2">
					<div>
						<h4 className="text-lg font-semibold text-gray-700">
							{employer?.companyInformation}
						</h4>
						<p className="pr-3 text-lg mt-3 text-gray-700">
							{employer?.information}
						</p>
					</div>
					<div className="col-span-3">
						{/* Create a card for from */}

						<div class="w-full p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8">
							<form>
								{/* company Detials */}
								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="first_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.company_name}
										</label>
										<input
											type="text"
											id="first_name"
											name="Company_Name"
											value={values.Company_Name}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="Webminds"
											required
										/>
										{errors.Company_Name && touched.Company_Name ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Company_Name}
											</p>
										) : null}
									</div>
									<div>
										<label
											for="last_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.industry}
										</label>
										<select
											id="hq"
											name="Industry"
											value={values.Industry}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{industrys?.map((industry, i) => (
												<option key={i} value={industry}>
													{industry}
												</option>
											))}
										</select>
										{errors.Industry && touched.Industry ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Industry}
											</p>
										) : null}
									</div>
								</div>

								{/* Highest Qualification */}

								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="hq"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.number_of_employees}
										</label>
										<select
											id="hq"
											name="Employees"
											value={values.Employees}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{employers?.map((number, i) => (
												<option key={i} value={number}>
													{number}
												</option>
											))}
										</select>
										{errors.Employees && touched.Employees ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Employees}
											</p>
										) : null}
									</div>
									<div>
										<label
											for="experience"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.typeofEmployer}
										</label>
										<select
											id="experience"
											name="EmployerType"
											value={values.EmployerType}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{typeofEmployer?.map((type, i) => (
												<option key={i} value={type}>
													{type}
												</option>
											))}
										</select>
										{errors.EmployerType && touched.EmployerType ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.EmployerType}
											</p>
										) : null}
									</div>
								</div>

								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="first_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.company_website}
										</label>
										<input
											type="url"
											id="first_name"
											name="Website"
											value={values.Website}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="webmindsit.com"
											required
										/>
										{errors.Website && touched.Website ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Website}
											</p>
										) : null}
									</div>
									<div>
										<label
											for="last_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.hearUs}
										</label>
										<select
											id="hq"
											name="HearUs"
											value={values.HearUs}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
										>
											{hearUs?.map((type, i) => (
												<option key={i} value={type}>
													{type}
												</option>
											))}
										</select>
										{errors.HearUs && touched.HearUs ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.HearUs}
											</p>
										) : null}
									</div>
								</div>

								<div class="grid gap-6 mb-6 md:grid-cols-2">
									<div>
										<label
											for="first_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.contactPerson}
										</label>
										<input
											type="text"
											id="first_name"
											name="Contact_Person"
											value={values.Contact_Person}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="Jon"
											required
										/>
										{errors.Contact_Person && touched.Contact_Person ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Contact_Person}
											</p>
										) : null}
									</div>
									<div>
										<label
											for="last_name"
											class="block mb-2 text-sm font-medium text-gray-900"
										>
											{employer?.notificationEmail}
										</label>
										<input
											type="email"
											id="first_name"
											name="Notification_Email"
											value={values.Notification_Email}
											onChange={handleChange}
											onBlur={handleBlur}
											class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											placeholder="Jon@gmail.com"
											required
										/>
										{errors.Notification_Email && touched.Notification_Email ? (
											<p className="text-red-700 text-xs mt-1">
												{errors.Notification_Email}
											</p>
										) : null}
									</div>
								</div>

								<div>
									<div class="grid gap-6 mb-6 md:grid-cols-3">
										<div>
											<label
												for="dob"
												class="block mb-2 text-sm font-medium text-gray-900"
											>
												{employer?.countryCode}
											</label>
											<select
												id="dob"
												name="CountryCode"
												value={values.CountryCode}
												onChange={handleChange}
												onBlur={handleBlur}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												{countryCodes?.map((code, i) => (
													<option
														selected={code.name === 'Ghana'}
														value={`${code.name} ${code.dial_code}`}
														key={i}
													>{`${code.name} ${code.dial_code}`}</option>
												))}
											</select>
											{errors.CountryCode && touched.CountryCode ? (
												<p className="text-red-700 text-xs mt-1">
													{errors.CountryCode}
												</p>
											) : null}
										</div>
										<div>
											<label
												for="dob"
												class="block mb-2 text-sm font-medium text-gray-900"
											>
												{employer?.phoneNumber}
											</label>
											<input
												type="text"
												id="first_name"
												name="Phone_Number"
												value={values.Phone_Number}
												onChange={handleChange}
												onBlur={handleBlur}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
												placeholder="9256123567"
												required
											/>
											{errors.Phone_Number && touched.Phone_Number ? (
												<p className="text-red-700 text-xs mt-1">
													{errors.Phone_Number}
												</p>
											) : null}
										</div>

										<div>
											<label
												for="dob"
												class="block mb-2 text-sm font-medium text-gray-900"
											>
												{employer?.country}
											</label>
											<select
												id="dob"
												name="Cuntry"
												value={values.Cuntry}
												onChange={handleChange}
												onBlur={handleBlur}
												class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
											>
												{countryCodes?.map((code, i) => (
													<option
														selected={code.name === 'Ghana'}
														value={code.name}
														key={i}
													>
														{code.name}
													</option>
												))}
											</select>
											{errors.Cuntry && touched.Cuntry ? (
												<p className="text-red-700 text-xs mt-1">
													{errors.Cuntry}
												</p>
											) : null}
										</div>
									</div>
								</div>

								<div>
									<label
										for="dob"
										class="block mb-2 text-sm font-medium text-gray-900"
									>
										{employer?.address}
									</label>
									<textarea
										id="message"
										rows="4"
										name="Address"
										value={values.Address}
										onChange={handleChange}
										onBlur={handleBlur}
										class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
										placeholder="Write your Address..."
									></textarea>

									{errors.Address && touched.Address ? (
										<p className="text-red-700 text-xs mt-1">
											{errors.Address}
										</p>
									) : null}
								</div>

								<div class="flex items-center my-6">
									<input
										id="link-checkbox"
										type="checkbox"
										value=""
										class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
									/>
									<label
										for="link-checkbox"
										class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
									>
										By clicking "Create Your Account", you agree to our
										<Link
											href="/"
											class="text-blue-600 dark:text-blue-500 hover:underline mx-1"
										>
											terms and conditions
										</Link>
										and
										<Link
											href="/"
											class="text-blue-600 dark:text-blue-500 hover:underline ml-1"
										>
											Privacy Policy
										</Link>
										.
									</label>
								</div>

								<button
									type="submit"
									class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
								>
									Create Your Account
								</button>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Employer;
