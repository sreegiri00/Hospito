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
          breadcrumbs: false
      
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
      id: 'users-patient',
      title: 'Patients',
      type: 'item',
      url: '/users/users-patients',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
    {
      id: 'users-pharmacistList',
      title: 'Pharmacist',
      type: 'item',
      url: '/users/users-pharmacist',
      icon: icons.IconPalette,
      breadcrumbs: false
    },
  ]
};

export default users;
