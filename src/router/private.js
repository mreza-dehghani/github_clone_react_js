import React from 'react';

const Dashboard = React.lazy(() => import('../containers/dashboard'));

export const privateRoute = [{ path: '/:username', component: Dashboard, layout: 'dashboard' }];
