import React, { useState, useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { MenuProps } from 'antd/lib/menu';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import './index.css';

const { Header, Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

interface MenuFoldIconProps {
  collapsed: boolean;
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
}

export interface AppLayoutProps {
  menus: AppMenuProps[];
  defaultCollapsed?: boolean;
  onCollapse?: () => void;
  onMenuClick?: MenuProps['onClick'];
  logo?: React.ReactNode;
  header?: React.ReactNode;
  content?: React.ReactNode;
  footer?: React.ReactNode;
  defaultSelectedKey?: string;
  selectedKey?: string;
  menuItemRender?: (
    menu: AppMenuProps,
    sameLevelMenus: AppMenuProps[]
  ) => React.ReactNode;
}

export interface AppMenuProps {
  key: string;
  title: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  submenus?: AppMenuProps[];
}

function getMenuItems(
  menus: AppMenuProps[],
  menuItemRender?: AppLayoutProps['menuItemRender']
): React.ReactNode[] {
  return menus.map(menu => {
    const { key, icon, title, disabled, submenus } = menu;
    return submenus ? (
      <SubMenu
        key={key}
        icon={icon}
        title={menuItemRender ? menuItemRender(menu, menus) : title}
        disabled={disabled}
      >
        {getMenuItems(submenus, menuItemRender)}
      </SubMenu>
    ) : (
      <Menu.Item key={key} icon={icon} disabled={disabled}>
        {menuItemRender ? menuItemRender(menu, menus) : title}
      </Menu.Item>
    );
  });
}

function findMenuItemAncestors(
  selectedItemKey: string,
  menus: AppMenuProps[]
): AppMenuProps['key'][] | undefined {
  for (let i = 0; i < menus.length; ++i) {
    const menu = menus[i];
    const isMatch = menu.key === selectedItemKey;
    if (isMatch) {
      return [menu.key];
    } else if (menu.submenus) {
      const ancestors = findMenuItemAncestors(selectedItemKey, menu.submenus);
      if (ancestors) {
        return [...ancestors, menu.key];
      }
    }
  }
}

const MenuFoldIcon: React.FC<MenuFoldIconProps> = ({
  collapsed,
  onClick,
  className,
}) => {
  const FoldIcon = collapsed ? MenuUnfoldOutlined : MenuFoldOutlined;
  return <FoldIcon className={className} onClick={onClick}></FoldIcon>;
};

const AppLayout: React.FC<AppLayoutProps> = ({
  defaultCollapsed = false,
  onCollapse,
  menus,
  onMenuClick,
  logo,
  header,
  content,
  footer,
  defaultSelectedKey,
  selectedKey: selectedKeyProp,
  menuItemRender,
}) => {
  const [defaultOpenKeys] = useState(() =>
    defaultSelectedKey && !defaultCollapsed
      ? findMenuItemAncestors(defaultSelectedKey, menus)
      : undefined
  );
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [selectedKey, setSelectedKey] = useState(
    selectedKeyProp || defaultSelectedKey
  );
  const menuItems = useMemo(() => getMenuItems(menus, menuItemRender), [
    menus,
    menuItemRender,
  ]);

  const closeAllMenus: () => void = () => {
    setOpenKeys(undefined);
  };
  const openSelectedMenu: () => void = () => {
    setOpenKeys(
      selectedKey ? findMenuItemAncestors(selectedKey, menus) : undefined
    );
  };

  const handleMenuClicked: MenuProps['onClick'] = clickParam => {
    if (!selectedKeyProp) {
      setSelectedKey(clickParam.key);
    }
    onMenuClick && onMenuClick(clickParam);
  };
  const handleCollapseClicked: AppLayoutProps['onCollapse'] = () => {
    const willCollapse = !collapsed;
    setCollapsed(willCollapse);
    if (willCollapse) {
      closeAllMenus();
    } else {
      openSelectedMenu();
    }
    onCollapse && onCollapse();
  };

  return (
    <Layout className="app-layout">
      <Sider
        collapsible
        defaultCollapsed={defaultCollapsed}
        collapsed={collapsed}
        trigger={null}
      >
        {logo}
        <Menu
          theme="dark"
          mode="inline"
          onClick={handleMenuClicked}
          defaultSelectedKeys={
            defaultSelectedKey ? [defaultSelectedKey] : undefined
          }
          selectedKeys={selectedKey ? [selectedKey] : undefined}
          openKeys={openKeys}
          onOpenChange={setOpenKeys}
        >
          {menuItems}
        </Menu>
      </Sider>
      <Layout>
        <Header className="app-layout__header">
          <MenuFoldIcon
            collapsed={collapsed}
            onClick={handleCollapseClicked}
            className="app-layout__header__trigger"
          ></MenuFoldIcon>
          {header}
        </Header>
        {content && (
          <Content className="app-layout__content">{content}</Content>
        )}
        {footer && <Footer>{footer}</Footer>}
      </Layout>
    </Layout>
  );
};

AppLayout.defaultProps = {
  defaultCollapsed: false,
};

export default AppLayout;
