export const dobyears = (startYear) => {
	var currentYear = new Date().getFullYear(),
		years = [];
	startYear = startYear || 1980;
	while (startYear <= currentYear) {
		years.push(startYear++);
	}
	return years;
};

export const dobMonths = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const dobDays = () => {
	const days = [];

	for (let i = 1; i <= 30; i++) {
		days.push(i);
	}

	return days;
};
