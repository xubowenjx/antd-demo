import World from "./views/world/index";
import Hello from "./views/hellow/index";
import Login from "./views/login/index";
import Desktop from "./components/Layout";
const router = [
  {
    link: "/login",
    component: Login,
    text: "login",
    meta: {
      auth: false
    }
  },
  {
    link: "/",
    component: Desktop,
    text: "Desktop",
    meta: {
      auth: false
    },
    children: [
      {
        link: "/world",
        component: World,
        text: "World",
        meta: {
          auth: true
        }
      },
      {
        link: "/hellow",
        component: Hello,
        text: "Hello",
        meta: {
          auth: true
        }
      }
    ]
  }
];
export default router;
