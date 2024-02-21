import Banner from '@/components/apps/Home/Banner';
import JobVacancies from '@/components/apps/Home/JobVacancies.jsx';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Banner />
			<JobVacancies />
		</div>
	);
}
