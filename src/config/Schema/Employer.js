import * as yup from 'yup';

export const employerSchema = yup.object({
	First_Name: yup.string().required('Enter Your First Name.'),
	Last_Name: yup.string().required('Enter Your Last Name.'),
	Email: yup.string().email().required('Enter Your Email.'),
	Position: yup.string().required('Select a Option.'),
	Country_Code: yup.string().required('Select a Option.'),
	Number: yup.string().min(10).max(10).required('Enter Your Phone Number.'),
	Company_Name: yup.string().required('Enter Your Company Name.'),
	Industry: yup.string().required('Select a Option.'),
	Employees: yup.string().required('Select a Option.'),
	EmployerType: yup.string().required('Select a Option.'),
	Website: yup.string().url().required('Enter your Website Address.'),
	HearUs: yup.string().required('Select a Option.'),
	Contact_Person: yup.string().required('Enter Your Contact person Name.'),
	Notification_Email: yup
		.string()
		.email()
		.required('Enter Notification Reciver Email.'),
	Cuntry: yup.string().required('Enter Your Country.'),
	Address: yup.string().required('Enter Your Address.'),
	Phone_Number: yup
		.string()
		.min(10)
		.max(10)
		.required('Enter Your Phone Number.'),
	CountryCode: yup.string().required('Select a Option.'),
});
