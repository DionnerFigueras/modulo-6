import { createBrowserRouter,  RouterProvider } from "react-router-dom";
import LoginEmployee from './LoginEmployee';
import LoginEmployeer from './LoginEmployeer';
import RegisterEmployee from './RegisterEmployee';
import RegisterEmployeer from './RegisterEmployeer';
import Applicants from './Applicants';
import RegisterJobOffer from './RegisterJobOffer';
import Home from './Home';

function Routes(  ) {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/loginEmployee',
            element: <LoginEmployee />,
        },
        {
            path: '/loginEmployeer',
            element: <LoginEmployeer />,
        },
        {
            path: '/registerEmployee',
            element: <RegisterEmployee />
        },
        {
            path: '/registerEmployeer',
            element: <RegisterEmployeer />
        },
        {
            path: '/applicants',
            element: <Applicants />
        },
        {
            path: '/registerJobOffer',
            element: <RegisterJobOffer />
        },
    ]);

    return (
        <RouterProvider router={routes} />
    )
}

export default Routes;
