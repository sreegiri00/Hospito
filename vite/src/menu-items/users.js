// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons-react';

// constant
const icons = {
  IconTypography,
  IconPalette,
  IconShadow,
  IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const users = {
  id: 'users',
  title: 'Members',
  caption: 'users',
  type: 'group',
  children: [
    {
      id: 'users-workrs',
      title: 'Workers',
      type: 'collapse',
      icon: icons.IconTypography,
      
      children : [
        {
          id: 'users-doctor',
          title: 'Doctor',
          type: 'item',
          url: '/users/users-doctor',
          breadcrumbs: true
      
        },
        {
          id: 'users-nurse',
          title: 'Nurse',
          type: 'item',
          url: '/users/users-nurse',
          breadcrumbs: false
        }
      ]
    },
    {
      id: 'users-color',
      title: 'Color',
      type: 'item',
      url: '/utils/util-color',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'users-shadow',
      title: 'Shadow',
      type: 'item',
      url: '/utils/util-shadow',
      icon: icons.IconShadow,
      breadcrumbs: false
    }
  ]
};

export default users;
