import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'ui-component/Loadable';


// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/dashboard')));

// utilities routing
const UtilsTypography = Loadable(lazy(() => import('views/utilities/Typography')));
const UtilsColor = Loadable(lazy(() => import('views/utilities/Color')));
const UtilsShadow = Loadable(lazy(() => import('views/utilities/Shadow')));
// const UtilsMaterialIcons = Loadable(lazy(() => import('views/utilities/MaterialIcons')));
// const UtilsTablerIcons = Loadable(lazy(() => import('views/utilities/TablerIcons')));

// members routing 
const DoctorList = Loadable(lazy(() => import('views/members/worker/DoctorList')));
const NurseList = Loadable(lazy(() => import('views/members/worker/NurseList')));
const PatientsList = Loadable(lazy(() => import('views/members/PatientsList')));
const PharmacistList = Loadable(lazy(() => import('views/members/PharmacistList')));


// sample page routing
const SamplePage = Loadable(lazy(() => import('views/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      children: [
        {
          path: 'default',
          element: <DashboardDefault />
        }
      ]
    },
    {
      path : 'users',
      children : [
        {
          path : 'users-doctor',
          element : <DoctorList/>
        },
        {
          path : 'users-nurse',
          element : <NurseList/>
        },
        {
          path : 'users-patients',
          element : <PatientsList/>
        },
        {
          path : 'users-pharmacist',
          element : <PharmacistList/>
        }
      ]
    },
    {
      path: 'utils',
      children: [
        {
          path: 'util-typography',
          element: <UtilsTypography />
        },
        {
          path: 'util-color',
          element: <UtilsColor />
        },
        {
          path: 'util-shadow',
          element: <UtilsShadow />
        }
      ]
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
