'use client';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const CurrentHiring = () => {
	const companys = [
		'https://i.roamcdn.net/kazi/gh/base/0e594422e758807ebc71b90a42b709f0/-/advertiser-img-gh-jobs-prod/dealer-images/advid204397/adv204397_1588677898.jpg',
		'https://i.roamcdn.net/kazi/gh/base/e35951a3921968dab590b5075570be9d/-/advertiser-img-gh-jobs-prod/dealer-images/advid5939/adv5939_1588714783.jpg',
		'https://i.roamcdn.net/kazi/gh/base/f8cdc6864c398d93331e36991c205ce1/-/advertiser-img-gh-jobs-prod/dealer-images/advid197770/adv197770_1588679022.jpg',
		'https://i.roamcdn.net/kazi/gh/base/bf965bcc4a54a7d3b5ff4978310d7117/-/advertiser-img-gh-jobs-prod/dealer-images/advid201261/adv201261_1588715794.jpg',
		'https://i.roamcdn.net/kazi/gh/base/ce44af874dd65842983482cf0724b216/-/advertiser-img-gh-jobs-prod/dealer-images/advid271024/adv271024_1685461641.jpg',
		'https://i.roamcdn.net/kazi/gh/base/47eb8c1433f91168d2701108212b52b3/-/advertiser-img-gh-jobs-prod/dealer-images/advid14931/adv14931_1529011615.jpg',
		'https://i.roamcdn.net/kazi/gh/base/0ad22105ab86ee1890d64be6b5276fd3/-/advertiser-img-gh-jobs-prod/dealer-images/advid6208/adv6208_1529010688.jpg',
		'https://i.roamcdn.net/kazi/gh/base/9b940a11f2c6ade38086407532866e2b/-/advertiser-img-gh-jobs-prod/dealer-images/advid197576/adv197576_1588678496.jpg',
		'https://i.roamcdn.net/kazi/gh/base/6adcdd2d421a87172d8be210ddbc5fa2/-/advertiser-img-gh-jobs-prod/dealer-images/advid92854/adv92854_1588717972.jpg',
	];
	return (
		<div className="container mx-auto">
			<h3 className="text-3xl font-bold text-[#374151] text-center mt-10">
				Companies currently hiring in Ghana
			</h3>

			{/* Swiper.js */}
			<Swiper
				modules={[Navigation]}
				spaceBetween={10}
				slidesPerView={5}
				navigation
				className="mt-2 flex justify-center items-center h-28 whitespace-nowrap"
			>
				{companys.map((item, i) => (
					<SwiperSlide key={i} className="">
						<Image height={30} width={200} src={item} alt="Company" />
					</SwiperSlide>
				))}
			</Swiper>

			<div className="flex justify-center items-center mt-2">
				<button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
					View All Companies Hiring
				</button>
			</div>
		</div>
	);
};

export default CurrentHiring;
