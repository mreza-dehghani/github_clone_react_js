export default data => {
	return [
		{
			id: 0,
			path: `/user/${data.fullName}`,
			name: 'Your profile',
		},
		{
			id: 1,
			path: `/user/${data.fullName}`,
			name: 'Your repositories',
		},
		{
			id: 2,
			path: `/user/${data.fullName}`,
			name: 'Your projects',
		},
	];
};
