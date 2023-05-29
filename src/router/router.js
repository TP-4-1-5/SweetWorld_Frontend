import Index from "../pages/Index/Index";
import { Navigate } from "react-router";
import Products from "../pages/Products";
import ProductsCategory from "../pages/ProductsCategory";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Comments from "../pages/Comments";

export const privateRoutes = [
  { path: '/', element: <Index/> },
  { path: '/account', element: <Profile/> },
  { path: '/products', element: <Products/> },
  { path: '/categories/:id', element: <ProductsCategory/> },
  { path: '/comments/:id', element: <Comments/>},
  { path: '*', element: <Navigate to="/" replace/> },
]

export const publicRoutes = [
  { path: '/', element: <Index/> },
  { path: '/products', element: <Products/> },
  { path: '/account', element: <Profile/> },
  { path: '/categories/:id', element: <ProductsCategory/> },
  { path: '/registration', element: <Registration/> },
  { path: '/login', element: <Login/> },
  { path: '/comments/:id', element: <Comments/>},
  { path: '*', element: <Navigate to="/" replace/> },
]
