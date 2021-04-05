import React from 'react';

const Login = React.lazy(() => import('../containers/auth/login'));

export const PublicRoute = [
	{
		path: '/login',
		component: Login,
		layout: 'public',
	},
];
