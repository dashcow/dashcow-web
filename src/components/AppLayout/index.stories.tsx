import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import AppLayout from './index';
import {
  DashboardOutlined,
  FormOutlined,
  TableOutlined,
} from '@ant-design/icons';

export default {
  title: 'Components/AppLayout',
  component: AppLayout,
  decorators: [withA11y, withKnobs],
};

export const WithLayout = () => {
  const logo = (
    <div
      style={{
        padding: '21px 24px',
        color: 'white',
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
    >
      LOGO
    </div>
  );
  const dashboardMenu = {
    key: 'dashboard',
    icon: <DashboardOutlined />,
    title: text('text', 'Dashboard', 'dashboard'),
    disabled: boolean('disabled', false, 'dashboard'),
  };
  const formMenu = {
    key: 'form',
    icon: <FormOutlined />,
    title: text('text', 'Form', 'form'),
    disabled: boolean('disabled', false, 'form'),
    submenus: [
      {
        key: 'basic form',
        icon: <FormOutlined />,
        title: text('basic text', 'Basic', 'form'),
        disabled: boolean('basic form disabled', false, 'form'),
      },
      {
        key: 'step form',
        icon: <FormOutlined />,
        title: text('step form text', 'Step', 'form'),
        disabled: boolean('step form disabled', false, 'form'),
      },
      {
        key: 'advanced form',
        icon: <FormOutlined />,
        title: text('advanced form text', 'Advanced', 'form'),
        disabled: boolean('advanced form disabled', false, 'form'),
      },
    ],
  };
  const listMenu = {
    key: 'list',
    title: text('text', 'List', 'list'),
    icon: <TableOutlined />,
    disabled: boolean('list disabled', false, 'list'),
    submenus: [
      {
        key: 'search list',
        title: text('search text', 'Search', 'list'),
        icon: <TableOutlined />,
        disabled: boolean('search text disabled', false, 'form'),
        submenus: [
          {
            key: 'basic search list',
            icon: <TableOutlined />,
            title: text('basic search text', 'Basic', 'list'),
            disabled: boolean('basic search disabled', false, 'form'),
          },
          {
            key: 'advanced search list',
            icon: <TableOutlined />,
            title: text('advanced search text', 'Advanced', 'list'),
            disabled: boolean('advanced search disabled', false, 'form'),
          },
        ],
      },
      {
        key: 'basic list',
        icon: <TableOutlined />,
        title: text('basic list text', 'Basic', 'list'),
        disabled: boolean('basic list disabled', false, 'list'),
      },
      {
        key: 'advanced list',
        icon: <TableOutlined />,
        title: text('advanced list text', 'Advanced', 'list'),
        disabled: boolean('advanced list disabled', false, 'form'),
      },
    ],
  };
  const menu = [dashboardMenu, formMenu, listMenu];

  return (
    <AppLayout
      defaultCollapsed={false}
      defaultSelectedKey={'advanced search list'}
      onMenuClick={action('onMenuClick')}
      logo={logo}
      menus={menu}
    ></AppLayout>
  );
};
