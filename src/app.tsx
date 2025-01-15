import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from '~/routes/app'
import Calendar, { loader as CalendarLoader, action as CalendarAction } from '~/routes/calendar'
import Detail  from '~/routes/calendar/:detail'
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
      { path: '', element: <App />, children: [
        { index: true, element: <Calendar />, loader: CalendarLoader, action: CalendarAction },
        { path: ':detail', element: <Detail /> },
        { path: 'users', children: [
        { index: true, element: <Users /> },
        { path: 'create', element: <UserCreate /> },
        { path: 'update', element: <UserUpdate /> },
        { path: 'remove', action: UserRemove },
      ] }
      ] },
      { index: true, element: <Home /> },
    ])}  />
  )
}

export default Router
