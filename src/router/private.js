import React from 'react';

const Home = React.lazy(() => import('../containers/home'));

export const PrivateRoute = [{ path: '/', component: Home, layout: 'dashboard' }];
