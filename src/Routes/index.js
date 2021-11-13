import { lazy } from 'react';
const Landing = lazy(() => import('../pages/Landing'));
const Login = lazy(() => import('../pages/Login'));
const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const Crafts = lazy(() => import('../pages/Crafts'));
const whishlist = lazy(() => import('../pages/whishlist'));


export const AllRoutes = [
    { path: '/home', Component: Home, title: "Home" },
    { path: '/about', Component: About, title: "About" },
    { path: '/crafts', Component: Crafts, title: "Crafts" },
    { path: '/list', Component: whishlist, title: "Whishlist" },
    { path: '/', Component: Landing, title: "Landing" },
    { path: '/login', Component: Login, title: "Login" },
];
