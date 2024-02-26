import AdvanceSection from '@/components/apps/Home/AdvanceSection';
import Banner from '@/components/apps/Home/Banner';
import CurrentHiring from '@/components/apps/Home/CurrentHiring';
import ForEmployers from '@/components/apps/Home/ForEmployers';
import JobVacancies from '@/components/apps/Home/JobVacancies.jsx';
import UpgradeCV from '@/components/apps/Home/UpgradeCV';
import Image from 'next/image';

export default function Home() {
	return (
		<div>
			<Banner />
			<JobVacancies />
			<CurrentHiring />
			<AdvanceSection />
			<UpgradeCV />
			<ForEmployers />
		</div>
	);
}
