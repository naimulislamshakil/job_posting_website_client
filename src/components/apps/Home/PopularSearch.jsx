'use client';
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const PopularSearch = () => {
	const swiper = useSwiper();

	const items = [
		'Coading',
		'Internship',
		'Tech Job',
		'Coading',
		'Internship',
		'Tech Job',
		'Coading',
		'Internship',
		'Tech Job',
		'Coading',
		'Internship',
		'Tech Job',
		'Coading',
		'Internship',
		'Tech Job',
		'Coading',
		'Internship',
		'Tech Job',
	];
	return (
		<div className="container mx-auto mt-12">
			<h4 className="text-gray-300">Popular searches</h4>

			<Swiper
				modules={[Navigation]}
				spaceBetween={10}
				slidesPerView={5}
				className="mt-2"
			>
				{items.map((item, i) => (
					<SwiperSlide
						key={i}
						className="px-2 py-2 tabs bg-[#7a42b2] rounded-md flex justify-center items-center text-white whitespace-nowrap"
					>
						<SearchIcon className="mr-4 ml-2" />
						{item}
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default PopularSearch;
