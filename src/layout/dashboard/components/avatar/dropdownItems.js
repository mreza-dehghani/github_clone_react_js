export default data => {
	return [
		{
			id: 0,
			path: `/${data.fullName}`,
			name: 'Your profile',
		},
		{
			id: 1,
			path: `/${data.fullName}`,
			name: 'Your repositories',
		},
		{
			id: 2,
			path: `/${data.fullName}`,
			name: 'Your projects',
		},
	];
};
