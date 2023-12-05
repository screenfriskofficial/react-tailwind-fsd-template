import {BrowserRouter} from "react-router-dom";
import {AppProvider} from "~app/providers/RouterProvider/RouterProvider.tsx";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <AppProvider/>
    </BrowserRouter>
  )
}