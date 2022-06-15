import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";
import Users from "./views/Users.vue";
import User from "./views/User.vue";
import NotFound from "./views/NotFound.vue";

const routes = [
  {
    path: "/",
    component: Home,
    name: "HomePage",
    meta: {
      transition: "fade",
    },
  },
  {
    path: "/about",
    component: About,
    alias: ["/o-nas", "/about-us", "/ob-us"],
    meta: {
      transition: "fade",
    },
    children: [{ path: "contact", component: Contact }],
  },
  {
    path: "/users",
    component: Users,
    children: [
      {
        path: ":id(\\d+)",
        name: "UserBio",
        component: User,
      },
    ],
  },
  //"/users/:id+" matches "users/1" "users/1/2" "users/1/2/3"
  //"/users/:id*" matches "users/" "users/1" "users/1/2" "users/1/2/3"
  {
    path: "/404",
    component: NotFound,
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    // redirect: "/404",
  },
];

export default routes;
