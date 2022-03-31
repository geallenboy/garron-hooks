import { defineConfig } from 'dumi';
  // more config: https://d.umijs.org/config
export default defineConfig({
  title: '组件',
  favicon:'./public/logo.svg',
  logo: 'logo.svg',
  resolve: {
    includes: ['docs', 'src'],
  },
  mode: 'site',
  menus: {
    '/': [
      {
        title: '首页',
        path: 'index',
      },
    ],
    '/guide': [
      {
        title: '介绍',
        path: '/guide',
      }
    ],
    "/hooks":[
      {
        'title':'异步请求',
        children:[
          '/useRequest/doc/index',
        ]
      },
      {
        'title':'常用hook',
        children:[
          '/useMouse',
          '/useScroll',
          '/useToggle',
          '/useRouter',
          '/useEventListener',
          '/useSetState'
        ]
      }
    ]
  },
  navs: [
    {
      title: '指南',
      path: '/guide',
    }, 
    {
      title: 'Hooks',
      path: '/hooks',
    },
    {
      title: 'GitHub',
      path: 'https://github.com',
    }
  ],
});
