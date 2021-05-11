import React from 'react';

const Home = React.lazy(() => import('../containers/home/private'));
const Dashboard = React.lazy(() => import('../containers/dashboard'));
const Explore = React.lazy(() => import('../containers/explore'));
const Pulls = React.lazy(() => import('../containers/pulls'));
const MarketPlace = React.lazy(() => import('../containers/marketPlace'));
const Issues = React.lazy(() => import('../containers/issues'));
const Repository = React.lazy(() => import('../containers/repository'));
const CreateRepository = React.lazy(() => import('../containers/repository/create'));

export const privateRoute = [
	{
		path: '/',
		component: Home,
		layout: 'dashboard',
	},
	{
		path: '/issues',
		component: Issues,
		layout: 'dashboard',
	},
	{
		path: '/pulls',
		component: Pulls,
		layout: 'dashboard',
	},
	{
		path: '/explore',
		component: Explore,
		layout: 'dashboard',
	},
	{
		path: '/marketplace',
		component: MarketPlace,
		layout: 'dashboard',
	},
	{
		path: '/:username/:repo',
		component: Repository,
		layout: 'dashboard',
	},
	{
		path: '/:username/create-repository',
		component: CreateRepository,
		layout: 'dashboard',
	},
	{
		path: '/:username',
		component: Dashboard,
		layout: 'dashboard',
	},
];
