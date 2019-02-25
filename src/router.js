import World from './views/world/index';
import Hello from './views/hellow/index';
import Child from './views/child/index';
import Login from './views/login/index';
import Desktop from './components/Layout';
const router = [
  {
    link: '/login',
    component: Login,
    text: 'login',
    name: 'login',
    meta: {
      auth: false,
    },
  },
  {
    link: '/',
    component: Desktop,
    text: 'Desktop',
    meta: {
      auth: false,
    },
    children: [
      {
        link: '/world',
        component: World,
        text: 'World',
        name: 'world',
        meta: {
          auth: true,
        },
      },
      {
        link: '/hellow',
        component: Hello,
        text: 'Hellow',
        name: 'hellow',
        icon: 'tag',
        meta: {
          auth: true,
        },
      },
      {
        text: 'submenus',
        name: 'submenus',
        icon: 'tag',
        meta: {
          auth: true,
        },
        submenu: [
          {
            link: '/child',
            component: Child,
            text: 'child',
            name: 'submenus:1',
            icon: 'tag',
          },
        ],
      },
    ],
  },
];
export default router;
