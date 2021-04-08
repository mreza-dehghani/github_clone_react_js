import React from 'react';

const Dashboard = React.lazy(() => import('../containers/dashboard'));
const Explore = React.lazy(() => import('../containers/explore'));
const Pulls = React.lazy(() => import('../containers/pulls'));
const MarketPlace = React.lazy(() => import('../containers/marketPlace'));
const Issues = React.lazy(() => import('../containers/issues'));

export const privateRoute = [
	{ path: '/user/:username', component: Dashboard, layout: 'dashboard' },
	{ path: '/pulls', component: Pulls, layout: 'dashboard' },
	{ path: '/issues', component: Issues, layout: 'dashboard' },
	{ path: '/explore', component: Explore, layout: 'dashboard' },
	{ path: '/marketplace', component: MarketPlace, layout: 'dashboard' },
];
