import React from 'react';
import zxcvbn from 'zxcvbn';

const PasswordStrength = ({ password }) => {
	const testResult = zxcvbn(password);
	const provideScore = (testResult.score * 100) / 4;
	console.log(provideScore);

	// provideScore === 0
	// 		? ''
	// 		: provideScore === 25
	// 		? 'bg-[#d42b3d]'
	// 		: provideScore === 50
	// 		? 'bg-[#f97316]'
	// 		: provideScore === 75
	// 		? 'bg-[#389660]'
	// 		: provideScore === 100
	// 		? 'bg-green-900'
	// 		: 'bg-[#D3D3D3]';
	const color1 = (score) => {
		if (score === 0) {
			return 'bg-[#d42b3d]';
		} else {
		}
	};
	return (
		<div class="flex mt-2">
			<div
				class={`item rounded ${
					provideScore === 25
						? 'bg-[#d42b3d]'
						: provideScore === 50
						? 'bg-[#f97316]'
						: provideScore === 75
						? 'bg-[#389660]'
						: provideScore === 100
						? 'bg-green-900'
						: 'bg-[#D3D3D3]'
				}`}
			></div>
			<div
				class={`item rounded ${
					provideScore === 25
						? 'bg-[#d42b3d]'
						: provideScore === 50
						? 'bg-[#f97316]'
						: provideScore === 75
						? 'bg-[#389660]'
						: provideScore === 100
						? 'bg-green-900'
						: 'bg-[#D3D3D3]'
				}`}
			></div>
			<div
				class={`item rounded ${
					provideScore === 50
						? 'bg-[#f97316]'
						: provideScore === 75
						? 'bg-[#389660]'
						: provideScore === 100
						? 'bg-green-900'
						: 'bg-[#D3D3D3]'
				}`}
			></div>
			<div
				class={`item rounded ${
					provideScore === 75
						? 'bg-[#389660]'
						: provideScore === 100
						? 'bg-green-900'
						: 'bg-[#D3D3D3]'
				}`}
			></div>
			<div
				class={`item rounded ${
					provideScore === 100 ? 'bg-green-700' : 'bg-[#D3D3D3]'
				}`}
			></div>
		</div>
	);
};

export default PasswordStrength;
