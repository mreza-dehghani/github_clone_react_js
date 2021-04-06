import React from 'react';

const Home = React.lazy(() => import('../containers/home'));

export const privateRoute = [{ path: '/:username', component: Home, layout: 'dashboard' }];
