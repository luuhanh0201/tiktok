import { HeaderOnly } from "@/components/Layout";
import FollowingPage from "@/Pages/FollowingPage";
import HomePage from "@/Pages/HomePage";
import ProfilePage from "@/Pages/ProfilePage";
import Search from "@/Pages/Search";
import UploadPage from "@/Pages/UploadPage";

export const publicRoutes = [
    {
        path: "/",
        component: HomePage,
    },
    {
        path: "/home",
        component: HomePage,
    },
    {
        path: "/@:nickname",
        component: ProfilePage,
    },
    {
        path: "/following",
        component: FollowingPage,
    },
    {
        path: "/upload",
        component: UploadPage,
        layout: HeaderOnly,
    },
    {
        path: "/search",
        component: Search,
        layout: null,
    },
];
