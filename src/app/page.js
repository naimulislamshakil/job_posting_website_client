import AdvanceSection from '@/components/apps/Home/AdvanceSection';
import Banner from '@/components/apps/Home/Banner';
import CurrentHiring from '@/components/apps/Home/CurrentHiring';
import JobVacancies from '@/components/apps/Home/JobVacancies.jsx';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Banner />
			<JobVacancies />
			<CurrentHiring />
			<AdvanceSection />
		</div>
	);
}
