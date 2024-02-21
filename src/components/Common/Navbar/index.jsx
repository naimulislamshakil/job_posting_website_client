import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const index = () => {
	const navs = [
		{
			text: 'Job Seekers',
			id: 'dropdownNavbar',
			dropdowns: [
				{
					text: 'Job Vacancies',
					path: 'jobs',
				},
				{
					text: 'CV Review Service',
					path: 'cv_service',
				},
				{
					text: 'Job Search Advice',
					path: 'job_search_advice',
				},
			],
		},
		{
			text: 'Career',
			id: 'dropdownNavbar2',
			dropdowns: [
				{
					text: 'Career Development',
					path: 'career_development',
				},
				{
					text: 'Life At Work',
					path: 'life_at_work',
				},
				{
					text: 'Job Market News',
					path: 'job_market_news',
				},
			],
		},

		{
			text: 'Employers',
			id: 'dropdownNavbar3',
			dropdowns: [
				{
					text: 'Best Match',
					path: 'best_match',
				},
				{
					text: 'Skill Assessments',
					path: 'skill_assessments',
				},
				{
					text: 'Jobberman Business Training',
					path: 'jobberman_business_training',
				},
				{
					text: 'Employers Corner',
					path: 'employers_corner',
				},
			],
		},
		{
			text: 'Help Center',
			id: 'dropdownNavbar4',
			dropdowns: [
				{
					text: 'Frequently Asked Questions',
					path: 'faq',
				},
				{
					text: 'Contact Us',
					path: 'contact_us',
				},
			],
		},
	];

	return (
		<nav class="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
			<div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a
					href="https://flowbite.com/"
					class="flex items-center space-x-3 rtl:space-x-reverse"
				>
					{/* <img src="/accats/next.svg" class="h-9" alt="Flowbite Logo" /> */}
					<Image height={36} width={200} src="/accats/next.svg" alt="ahsg" />
				</a>
				<div class="flex md:order-2   rtl:space-x-reverse">
					<Link
						href="/login"
						id="dropdownNavbarLink"
						// data-dropdown-toggle={nav.id}
						class="md:flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent mr-4 hidden"
					>
						Login
					</Link>

					<Link
						href="/sing_up"
						id="dropdownNavbarLink"
						// data-dropdown-toggle={nav.id}
						class="md:flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent mr-4 hidden"
					>
						Sing Up
					</Link>

					<Link
						href="/login"
						class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hidden md:block"
					>
						Post A Job
					</Link>

					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded="false"
					>
						<span class="sr-only">Open main menu</span>
						<svg
							class="w-5 h-5"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 17 14"
						>
							<path
								stroke="currentColor"
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M1 1h15M1 7h15M1 13h15"
							/>
						</svg>
					</button>
				</div>
				<div
					class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
						{navs.map((nav, i) => (
							<li key={i}>
								<button
									id="dropdownNavbarLink"
									data-dropdown-toggle={nav.id}
									class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
								>
									{nav.text}
									<svg
										class="w-2.5 h-2.5 ms-2.5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 10 6"
									>
										<path
											stroke="currentColor"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="m1 1 4 4 4-4"
										/>
									</svg>
								</button>
								{/* <!-- Dropdown menu --> */}
								<div
									id={nav.id}
									class="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
								>
									<ul
										class="py-2 text-sm text-gray-700 dark:text-gray-400"
										aria-labelledby="dropdownLargeButton"
									>
										{nav?.dropdowns.map((menu, i) => (
											<li key={i}>
												<Link
													class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
													href={menu.path}
												>
													{menu.text}
												</Link>
											</li>
										))}
									</ul>
								</div>
							</li>
						))}

						<li>
							<Link
								href="/login"
								id="dropdownNavbarLink"
								// data-dropdown-toggle={nav.id}
								class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent mr-4 md:hidden"
							>
								Login
							</Link>
						</li>
						<li>
							<Link
								href="/sing_up"
								id="dropdownNavbarLink"
								// data-dropdown-toggle={nav.id}
								class="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent mr-4 md:hidden"
							>
								Sing Up
							</Link>
						</li>

						<li>
							<Link
								href="/login"
								class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:hidden block"
							>
								Post A Job
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default index;
