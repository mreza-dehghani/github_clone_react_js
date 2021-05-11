import React from 'react';

const Login = React.lazy(() => import('../containers/auth/login'));

export const authRoute = [
	{
		path: '/login',
		component: Login,
		layout: 'auth',
	},
];
