
import React from 'react';

const Dashboardcomponents = React.lazy(() => import('dashboard/my_container'));
const Agentcomponents = React.lazy(() => import('agent/agentapp'));
function App() {
  return (
    <React.Suspense fallback='Loading Button'>
          <Dashboardcomponents />
          <Agentcomponents/>
    </React.Suspense>
  );
}

export default App;
