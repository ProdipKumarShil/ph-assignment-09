import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import JobDetails from './components/JobDetails/JobDetails';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Home from './components/Home/Home';
import Error from './components/Error/Error';
import FakeJobDetails from './components/fakeJobDetails/fakeJobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/data2.json')
      },
      {
        path: 'jobDetails',
        element: <FakeJobDetails></FakeJobDetails>
      },
      {
        path: 'jobDetails/:Ids',
        element: <JobDetails></JobDetails>,
        loader: (x) => x.params.Ids,
      },
      {
        path: 'yourJobs',
        element: <AppliedJobs></AppliedJobs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
