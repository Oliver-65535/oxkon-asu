// ** Icons Import
import {
  Menu,
  Circle,
  EyeOff,
  Folder,
  LifeBuoy,
  Shield,
  List,
  Table,
  Edit,
  Box,
} from 'react-feather'

export default [
  {
    header: 'Misc',
  },
  {
    id: 'data-panel',
    title: 'Data Panel',
    icon: <Table size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/data-panel',
  },
  {
    id: 'generator',
    title: 'Generator',
    icon: <Edit size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/generator',
  },
  {
    id: 'access-control',
    title: 'Access Control',
    icon: <Box size={12} />,
    action: 'read',
    resource: 'ACL',
    navLink: '/access-control',
  },

  {
    id: 'menuLevels',
    title: 'Menu Levels',
    icon: <Menu size={20} />,
    children: [
      {
        id: 'secondLevel',
        title: 'Second Level 2.1',
        icon: <Circle size={12} />,
        navLink: '',
      },
      {
        id: 'secondLevel1',
        title: 'Second Level 2.2',
        icon: <Circle size={12} />,
        children: [
          {
            id: 'ThirdLevel',
            title: 'Third Level 3.1',
            navLink: '',
          },
          {
            id: 'ThirdLevel1',
            title: 'Third Level 3.2',
            navLink: '',
          },
        ],
      },
    ],
  },
  {
    id: 'disabledMenu',
    title: 'Disabled Menu',
    icon: <EyeOff size={20} />,
    navLink: '#',
    disabled: true,
  },
  {
    id: 'documentation',
    title: 'Documentation',
    icon: <Folder size={20} />,
    externalLink: true,
    newTab: true,
    navLink:
      'https://pixinvent.com/demo/vuexy-react-admin-dashboard-template/documentation',
  },
  {
    id: 'raiseSupport',
    title: 'Raise Support',
    icon: <LifeBuoy size={20} />,
    externalLink: true,
    newTab: true,
    navLink: 'https://pixinvent.ticksy.com/',
  },
]
