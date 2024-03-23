'use client';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Common/Navbar/index.jsx';
import Footer from '../components/Common/Footer/index.jsx';
import 'flowbite';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
// 	title: 'Create Next App',
// 	description: 'Generated by create next app',
// };

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link
					href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css"
					rel="stylesheet"
				/>
			</head>

			<body>
				<Navbar />
				{children}
				<Footer />

				<ToastContainer
					position="bottom-center"
					autoClose={6000}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>

				{/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
				<script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script>
			</body>
		</html>
	);
}
