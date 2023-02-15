import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0/client';
import { MegaMenu } from 'primereact/megamenu';

import PageLink from './PageLink';
import AnchorLink from './AnchorLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  const items = [
    {
      label: 'Home',
      icon: 'pi pi-fw pi-home',
      items: [
        [
          {
            items: [{ label: 'Home', url: '/', key: 'home' }]
          }
        ]
      ]
    },
    {
      label: 'Material Checklist',
      icon: 'pi pi-fw pi-list',
      items: [
        [
          {
            label: 'Materials',
            items: [
              {
                label: 'Form',
                url: '/form',
                key: 'form',
                style: { backgroundColor: '#b5bd36', color: 'red !important' }
              },
              { label: 'Inspectors', url: '/inspectors', key: 'inspectors' }
            ]
          }
        ],
        [
          {
            label: ' Materials',
            items: [
              { label: 'Form Example', url: '/fm', key: 'form-example' },
              { label: 'Approved', url: '/approved', key: 'approved' }
            ]
          }
        ]
      ]
    },
    {
      label: 'Ware House',
      icon: 'pi pi-fw pi-plus-circle',
      items: [
        [
          {
            label: 'Materials',
            items: [
              { label: 'Form', url: '/form', key: 'ware-form' },
              { label: 'Inspectors', url: '/inspectors', key: 'ware-inspectors' }
            ]
          }
        ],
        [
          {
            label: 'Approved Materials',
            items: [
              { label: 'Approved', url: '/approved', key: 'ware-approved' },
              { label: 'Form Example', url: '/fm', key: 'ware-form-example' }
            ]
          }
        ]
      ]
    },
    {
      label: 'Critical Items',
      icon: 'pi pi-fw pi-verified',
      items: [
        [
          {
            label: 'Poles',
            items: [
              { label: 'poles 2', key: 'poles-1' },
              { label: 'poles 2', key: 'poles-2' }
            ]
          }
        ],
        [
          {
            label: 'Transformers',
            items: [
              { label: 'Transformers 1', key: 'transformers-1' },
              { label: 'Transformers 2', key: 'transformers-2' }
            ]
          }
        ]
      ]
    },
    {
      label: 'Reports',
      icon: 'pi pi-fw pi-file',
      iconStyle: { backgroundColor: 'yellow' },
      items: [
        [
          {
            label: 'Event 1',
            items: [
              { label: 'Event 1.1', key: 'event-1-1' },
              { label: 'Event 1.2', key: 'event-1-2' }
            ]
          }
        ],
        [
          {
            label: 'Event 3',
            items: [
              { label: 'Event 3.1', key: 'event-3-1' },
              { label: 'Event 3.2', key: 'event-3-2' }
            ]
          }
        ]
      ]
    }
  ];

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          {/* <NavbarBrand className="logo" /> */}

          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              {!user && (
                <NavItem>
                  <PageLink href="/" className="nav-link" testId="navbar-home">
                    Home
                  </PageLink>
                </NavItem>
              )}
              {user && (
                <>
                  <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                    <MegaMenu model={items} />
                  </UncontrolledDropdown>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <AnchorLink
                    href="/api/auth/login"
                    className="btn btn-primary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Log in
                  </AnchorLink>
                </NavItem>
              )}
              {user && (
                <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                      height="50"
                      // eslint-disable-next-line react/no-unknown-property
                      decode="async"
                      data-testid="navbar-picture-desktop"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {user.name}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile" tag="span">
                      <PageLink href="/profile" icon="user" testId="navbar-profile-desktop">
                        Profile
                      </PageLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <AnchorLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                        Log out
                      </AnchorLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <AnchorLink
                  href="/api/auth/login"
                  className="btn btn-primary btn-block"
                  tabIndex={0}
                  testId="navbar-login-mobile">
                  Log in
                </AnchorLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      // eslint-disable-next-line react/no-unknown-property
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <PageLink href="/profile" icon="user" testId="navbar-profile-mobile">
                    Profile
                  </PageLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <AnchorLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile">
                    Log out
                  </AnchorLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
