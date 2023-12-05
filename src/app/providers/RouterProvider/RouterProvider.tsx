import {useRoutes} from "react-router-dom";
import {MainLayout} from "~pages/layouts/main-layout/MainLayout.tsx";
import {Loadable} from "~shared/lib/loadable/Loadable.tsx";
import {lazy} from "react";

const MainPage = Loadable(lazy(() => import('~pages/main-page')))

export const AppProvider = () => {
  return useRoutes([
    {
      element:<MainLayout/>,
      children: [
        {
          element: <MainPage/>,
          path: '/'
        }
      ]
    }
  ])
}