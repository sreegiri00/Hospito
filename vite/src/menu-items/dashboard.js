// assets
import { IconDashboard ,IconShoppingCart} from '@tabler/icons-react';


// constant
const icons = { IconDashboard ,IconShoppingCart};

// ==============================|| DASHBOARD MENU ITEMS ||============================== //

const dashboard = {
  id: 'dashboard',
  title: 'Dashboard',
  type: 'group',
  children: [
    {
      id: 'default',
      title: 'Dashboard',
      type: 'item',
      url: '/dashboard/default',
      icon: icons.IconDashboard,
      breadcrumbs: false
    },
    {
      id: '',
      title: 'Add To Cart',
      type: 'item',
      url: '/dashboard/addtocart',
      icon: icons.IconShoppingCart,
      breadcrumbs: false
    }
  ]
};

export default dashboard;
