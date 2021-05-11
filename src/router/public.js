import React from 'react';

const Home = React.lazy(() => import('../containers/home'));
const About = React.lazy(() => import('../containers/about'));

export const publicRoute = [
	{
		path: '/home',
		component: Home,
		layout: 'public',
	},
	{
		path: '/about',
		component: About,
		layout: 'public',
	},
];
