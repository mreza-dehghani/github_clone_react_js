import React from 'react';

const Login = React.lazy(() => import('../containers/auth/login'));

export const publicRoute = [
	{
		path: '/login',
		component: Login,
		layout: 'public',
	},
];
