import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App, { loader as AppLoader } from '~/routes/calendar'
import Home from '~/routes/home'
import Login from '~/routes/auth/login'
import Sigin from '~/routes/auth/sigin'
import Users from '~/routes/users'
import UserRemove from '~/routes/users/remove'
import UserCreate from '~/routes/users/create'
import UserUpdate from '~/routes/users/update'

function Router() {
  return (
    <RouterProvider router={createBrowserRouter([
      { path: 'auth', children: [
        { path: 'sigin', element: <Sigin /> },
        { index: true, element: <Login /> },
      ] },
      { index: true, element: <App />, loader: AppLoader },
      { index: true, element: <Home /> },
      { path: 'users', children: [
        { index: true, element: <Users /> },
        { path: 'create', element: <UserCreate /> },
        { path: 'update', element: <UserUpdate /> },
        { path: 'remove', action: UserRemove },
      ] }
    ])}  />
  )
}

export default Router
