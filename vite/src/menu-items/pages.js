// assets
import { IconKey } from '@tabler/icons-react';

// constant
const icons = {
  IconKey
};

// ==============================|| EXTRA PAGES MENU ITEMS ||============================== //

const pages = {
  id: 'users',
  title: 'Usres',
  caption: 'Members',
  type: 'group',
  children: [
    {
      id: 'workes',
      title: 'Workes',
      type: 'collapse',
      icon: icons.IconKey,
      children: [
        {
          id: 'login3',
          title: 'Docters',
          type: 'item',
          url:"/utils/util-typography",
          target: true,
        },
        {
          id: 'register3',
          title: 'Sisters',
          type: 'item',

          target: true
        }
      ]
    },
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    },
    {
      id: 'authentication',
      title: 'Authentication',
      type: 'collapse',
      icon: icons.IconKey,

      children: [
        {
          id: 'login3',
          title: 'Login',
          type: 'item',
          url: '/pages/login/login3',
          target: true
        },
        {
          id: 'register3',
          title: 'Register',
          type: 'item',
          url: '/pages/register/register3',
          target: true
        }
      ]
    }
  ]
};

export default pages;
