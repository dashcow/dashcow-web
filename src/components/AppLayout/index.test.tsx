import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import {
  DashboardOutlined,
  FormOutlined,
  TableOutlined,
} from '@ant-design/icons';
import AppLayout, { AppMenuProps, AppLayoutProps } from './index';

const dashboardIcon = <DashboardOutlined />;
const dashboardTitle = 'dashboard';
const formIcon = <FormOutlined />;
const formTitle = 'form';
const tableIcon = <TableOutlined />;
const tableTitle = 'table';
const emptyMenu: AppMenuProps[] = [];
const menu: AppMenuProps[] = [
  {
    key: dashboardTitle,
    icon: dashboardIcon,
    title: dashboardTitle,
    submenus: [
      {
        key: formTitle,
        icon: formIcon,
        title: formTitle,
      },
    ],
  },
  {
    key: tableTitle,
    icon: tableIcon,
    title: tableTitle,
  },
];
const menuWithDisabledItems: AppMenuProps[] = [
  {
    key: dashboardTitle,
    icon: dashboardIcon,
    title: dashboardTitle,
    disabled: true,
    submenus: [
      {
        key: formTitle,
        icon: formIcon,
        title: formTitle,
        disabled: true,
      },
    ],
  },
  {
    key: tableTitle,
    icon: tableIcon,
    title: tableTitle,
    disabled: true,
  },
];
const getSelectedMenu = (container: HTMLElement) =>
  container.querySelector('.ant-menu-item-selected');
const getHasSubmenuMenus = (container: HTMLElement) =>
  container.querySelectorAll('.ant-menu-submenu');
const isMenuOpen = (hasSubmenuMenu?: HTMLElement | Element | null) =>
  hasSubmenuMenu && hasSubmenuMenu.classList.contains('ant-menu-submenu-open');
const isSiderCollapsed = (siderElement?: HTMLElement | Element | null) =>
  siderElement && siderElement.classList.contains('ant-layout-sider-collapsed');

let mockOnMenuClick: (...args: any[]) => any;

beforeEach(() => {
  mockOnMenuClick = jest.fn();
});

/**
 * ----------------------------------------------------
 * Describe render
 * ----------------------------------------------------
 */
describe('render', () => {
  test('renders header', () => {
    // Arrange
    const headerContent = 'test header';
    const { container, getByText } = render(
      <AppLayout
        menus={emptyMenu}
        header={<div>{headerContent}</div>}
      ></AppLayout>
    );
    const headerElement = container.querySelector('header');
    const headerContentElement = getByText(headerContent);

    // Assert
    expect(headerElement).toBeInTheDocument();
    expect(headerContentElement).toBeInTheDocument();
  });

  test('renders side bar', () => {
    // Arrange
    const { container } = render(<AppLayout menus={emptyMenu}></AppLayout>);
    const sideBarElement = container.querySelector('aside');

    // Assert
    expect(sideBarElement).toBeInTheDocument();
  });

  test('renders footer', () => {
    // Arrange
    const footerContent = 'test footer';
    const { container, getByText } = render(
      <AppLayout
        menus={emptyMenu}
        footer={<div>{footerContent}</div>}
      ></AppLayout>
    );
    const footerElement = container.querySelector('footer');
    const footerContentElement = getByText(footerContent);

    // Assert
    expect(footerElement).toBeInTheDocument();
    expect(footerContentElement).toBeInTheDocument();
  });

  test('renders main content', () => {
    // Arrange
    const mainContent = 'test main content';
    const { container, getByText } = render(
      <AppLayout
        menus={emptyMenu}
        content={<div>{mainContent}</div>}
      ></AppLayout>
    );
    const mainElement = container.querySelector('main');
    const mainContentElement = getByText(mainContent);

    // Assert
    expect(mainElement).toBeInTheDocument();
    expect(mainContentElement).toHaveTextContent(mainContent);
  });

  test('renders logo', () => {
    // Arrange
    const logoContent = 'logo';
    const { getByText } = render(
      <AppLayout menus={emptyMenu} logo={<div>{logoContent}</div>}></AppLayout>
    );
    const logoElement = getByText(logoContent);

    // Assert
    expect(logoElement).toBeInTheDocument();
  });
});

/**
 * ----------------------------------------------------
 * Describe menu
 * ----------------------------------------------------
 */
describe('menu', () => {
  /**
   * ----------------------------------------------------
   * Describe render menu
   * ----------------------------------------------------
   */
  describe('render', () => {
    test('renders menu', () => {
      // Arrange
      const {
        getByText,
        queryByText,
        getByLabelText,
        queryByLabelText,
      } = render(<AppLayout menus={menu}></AppLayout>);
      const dashboardIconElement = getByLabelText('dashboard');
      const dashboardTitleElement = getByText(dashboardTitle);
      const formIconElement = queryByLabelText('form');
      const formTitleElement = queryByText(formTitle);
      const tableIconElement = getByLabelText('table');
      const tableTitleElement = getByText(tableTitle);

      // Assert
      expect(dashboardIconElement).toBeInTheDocument();
      expect(dashboardTitleElement).toBeInTheDocument();
      expect(tableIconElement).toBeInTheDocument();
      expect(tableTitleElement).toBeInTheDocument();
      // submenu won't be in the document before parent open
      expect(formIconElement).not.toBeInTheDocument();
      expect(formTitleElement).not.toBeInTheDocument();
    });

    test('menu renders correctly when collapse', () => {
      // Arrange
      const {
        getByText,
        queryByText,
        getByLabelText,
        queryByLabelText,
      } = render(<AppLayout menus={menu} defaultCollapsed={true}></AppLayout>);
      const dashboardIconElement = getByLabelText('dashboard');
      const dashboardTitleElement = getByText(dashboardTitle);
      const tableIconElement = getByLabelText('table');
      const tableTitleElement = getByText(tableTitle);
      const formIconElement = queryByLabelText('form');
      const formTitleElement = queryByText(formTitle);

      // Assert
      expect(dashboardIconElement).toBeInTheDocument();
      expect(dashboardTitleElement).toBeInTheDocument();
      expect(tableIconElement).toBeInTheDocument();
      expect(tableTitleElement).toBeInTheDocument();
      // submenu won't be in the document before parent open
      expect(formIconElement).not.toBeInTheDocument();
      expect(formTitleElement).not.toBeInTheDocument();
    });

    test('render custom menu renderer correctly', () => {
      const customContent = 'test custom';
      const customRenderer: AppLayoutProps['menuItemRender'] = (
        menu,
        currentLevelMenus
      ) => (
        <div>{`${menu.title}${customContent}${currentLevelMenus.indexOf(
          menu
        )}`}</div>
      );
      const { getByText, getByLabelText } = render(
        <AppLayout
          menus={menu}
          defaultSelectedKey={formTitle}
          menuItemRender={customRenderer}
        ></AppLayout>
      );
      const dashboardIconElement = getByLabelText('dashboard');
      const dashboardTitleElement = getByText(
        `${dashboardTitle}${customContent}0`
      );
      const tableIconElement = getByLabelText('table');
      const tableTitleElement = getByText(`${tableTitle}${customContent}1`);
      const formIconElement = getByLabelText('form');
      // show menus of current level
      const formTitleElement = getByText(`${formTitle}${customContent}0`);

      // Assert
      expect(dashboardIconElement).toBeInTheDocument();
      expect(dashboardTitleElement).toBeInTheDocument();
      expect(tableIconElement).toBeInTheDocument();
      expect(tableTitleElement).toBeInTheDocument();
      expect(formIconElement).toBeInTheDocument();
      expect(formTitleElement).toBeInTheDocument();
    });
  });

  /**
   * ----------------------------------------------------
   * Describe menu collapse
   * ----------------------------------------------------
   */
  describe('collapse', () => {
    test('side bar collapsible', () => {
      // Arrange
      const { container, getByLabelText } = render(
        <AppLayout menus={emptyMenu}></AppLayout>
      );
      const foldIcon = getByLabelText('menu-fold');
      const sideBarElement = container.querySelector('aside');

      // Act
      fireEvent.click(foldIcon);

      // Assert
      const unfoldIcon = getByLabelText('menu-unfold');
      expect(unfoldIcon).toBeInTheDocument();
      expect(isSiderCollapsed(sideBarElement)).toBe(true);
    });

    test('can default collapse sider', () => {
      // Arrange
      const { container, getByLabelText } = render(
        <AppLayout menus={emptyMenu} defaultCollapsed={true}></AppLayout>
      );
      const unfoldIcon = getByLabelText('menu-unfold');
      const sideBarElement = container.querySelector('aside');

      // Assert
      expect(unfoldIcon).toBeInTheDocument();
      expect(isSiderCollapsed(sideBarElement)).toBe(true);
    });
  });

  /**
   * ----------------------------------------------------
   * Describe select menu
   * ----------------------------------------------------
   */
  describe('select menu', () => {
    test('can select menu', () => {
      // Arrange
      const { container, getByText } = render(
        <AppLayout menus={menu}></AppLayout>
      );
      const tableMenuElement = getByText(tableTitle);

      // Act
      fireEvent.click(tableMenuElement);

      // Assert
      const selectedMenuElement = getSelectedMenu(container);
      expect(selectedMenuElement).toHaveTextContent(tableTitle);
    });

    test('can default select menu', () => {
      // Arrange
      const { container, getByText, getByLabelText } = render(
        <AppLayout menus={menu} defaultSelectedKey={formTitle}></AppLayout>
      );
      const formIconElement = getByLabelText('form');
      const formTitleElement = getByText(formTitle);
      const selectedMenuElement = getSelectedMenu(container);

      // Assert
      expect(formIconElement).toBeInTheDocument();
      expect(formTitleElement).toBeInTheDocument();
      expect(selectedMenuElement).toHaveTextContent(formTitle);
    });

    test('selected menu ancestors opens', () => {
      // Arrange
      const { container, getByText } = render(
        <AppLayout menus={menu} defaultSelectedKey={formTitle}></AppLayout>
      );
      const formTitleElement = getByText(formTitle);
      const ancestorMenuElement = getHasSubmenuMenus(container)[0];

      // Assert
      expect(formTitleElement).toBeInTheDocument();
      expect(ancestorMenuElement).toHaveTextContent(dashboardTitle);
      expect(isMenuOpen(ancestorMenuElement)).toBe(true);
    });

    test('selected menu ancestors opens when uncollapse', () => {
      // Arrange
      const { container, getByText, getByLabelText } = render(
        <AppLayout
          menus={menu}
          defaultSelectedKey={formTitle}
          defaultCollapsed={true}
        ></AppLayout>
      );
      const ancestorMenuElement = getHasSubmenuMenus(container)[0];
      const unfoldIcon = getByLabelText('menu-unfold');

      // Act
      fireEvent.click(unfoldIcon);

      // Assert
      const formTitleElement = getByText(formTitle);
      expect(formTitleElement).toBeInTheDocument();
      expect(ancestorMenuElement).toHaveTextContent(dashboardTitle);
      expect(isMenuOpen(ancestorMenuElement)).toBe(true);
    });

    test('selected submenu close when collapse', () => {
      // Arrange
      const { getByLabelText, queryByText } = render(
        <AppLayout menus={menu} defaultSelectedKey={formTitle}></AppLayout>
      );
      const foldIcon = getByLabelText('menu-fold');

      // Act
      fireEvent.click(foldIcon);

      // Assert
      const formTitleElement = queryByText(formTitle);
      expect(formTitleElement).not.toBeInTheDocument();
    });
  });

  /**
   * ----------------------------------------------------
   * Describe collapsed menu hover
   * ----------------------------------------------------
   */
  describe('collapsed menu hover', () => {
    test('hover when collapse shows submenu', async () => {
      // Arrange
      const { getByText } = render(
        <AppLayout
          menus={menu}
          defaultSelectedKey={formTitle}
          defaultCollapsed={true}
        ></AppLayout>
      );
      const dashboardTitleElement = getByText(dashboardTitle);

      // Act
      fireEvent.mouseEnter(dashboardTitleElement);

      // Assert
      await waitFor(() => {
        const formTitleElement = getByText(formTitle);
        expect(formTitleElement).toBeInTheDocument();
      });
    });
  });

  /**
   * ----------------------------------------------------
   * Describe disable menu
   * ----------------------------------------------------
   */
  describe('disable menu', () => {
    test('can disable menu item', () => {
      // Arrange
      const { getByText } = render(
        <AppLayout
          menus={menuWithDisabledItems}
          defaultSelectedKey={formTitle}
        ></AppLayout>
      );
      const dashboardTitleElement = getByText(dashboardTitle);
      const formTitleElement = getByText(formTitle);
      const tableTitleElement = getByText(tableTitle);

      // Act
      fireEvent.click(dashboardTitleElement);
      fireEvent.click(formTitleElement);
      fireEvent.click(tableTitleElement);

      // Assert
      expect(mockOnMenuClick).not.toBeCalled();
    });
  });

  /**
   * ----------------------------------------------------
   * Describe menu events
   * ----------------------------------------------------
   */
  describe('events', () => {
    test('can dispatch onMenuClick correctly', () => {
      // Arrange
      const { getByText } = render(
        <AppLayout
          menus={menu}
          onMenuClick={mockOnMenuClick}
          defaultSelectedKey={formTitle}
        ></AppLayout>
      );
      const dashboardTitleElement = getByText(dashboardTitle);
      const formTitleElement = getByText(formTitle);

      // Act
      fireEvent.click(dashboardTitleElement);
      fireEvent.click(formTitleElement);

      // Assert
      // submenu item onClick won't dispatch onMenuClick
      expect(mockOnMenuClick).toBeCalledTimes(1);
      expect(mockOnMenuClick).toHaveBeenCalledWith(
        expect.objectContaining({
          key: formTitle,
          keyPath: expect.arrayContaining([formTitle, dashboardTitle]),
          item: expect.any(Object),
          domEvent: expect.any(Object),
        })
      );
    });

    test('can dispatch onCollapse correctly', () => {
      // Arrange
      const mockHandleCollapse = jest.fn();
      const { getByLabelText } = render(
        <AppLayout
          menus={emptyMenu}
          onCollapse={mockHandleCollapse}
        ></AppLayout>
      );
      const foldIcon = getByLabelText('menu-fold');

      // Act
      fireEvent.click(foldIcon);

      // Assert
      expect(mockHandleCollapse).toBeCalledTimes(1);
    });
  });
});
