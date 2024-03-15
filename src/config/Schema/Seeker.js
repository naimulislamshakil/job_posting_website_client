import * as yup from 'yup';

export const seekerSchema = yup.object({
	First_Name: yup.string().required('Enter Your First Name.'),
	Last_Name: yup.string().required('Enter Your Last Name.'),
	Email: yup.string().required('Enter Your Email Name.'),
	Days: yup.string().required('Select a Optin.'),
	Months: yup.string().required('Select a Optin.'),
	Years: yup.string().required('Select a Optin.'),
	Gender: yup.string().required('Select a Optin.'),
	Nationality: yup.string().required('Select a Optin.'),
	Location: yup.string().required('Select a Optin.'),
	Country_Code: yup.string().required('Select a Optin.'),
	Phone_Number: yup.string().required('Enter Your Phone Number.'),
	Qualification: yup.string().required('Select a Optin.'),
	Experience: yup.string().required('Select a Optin.'),
	Job_Function: yup.string().required('Select a Optin.'),
	Availability: yup.string().required('Select a Optin.'),
});
