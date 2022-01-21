import { defineConfig } from 'dumi';
  // more config: https://d.umijs.org/config
export default defineConfig({
  title: 'garron-hooks',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
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
          'useRequest/doc',
        ]
      },
      {
        'title':'dom',
        children:[
          'dom/useMouse',
          'dom/useScroll',
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
      path: 'https://github.com/umijs/dumi',
    }
  ],
});
