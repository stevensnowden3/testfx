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
            items: [{ label: 'Home', url: '/', key: 0 }]
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
              { label: 'Form', url: '/form', key: 1, style: { backgroundColor: '#b5bd36', color: 'red !important' } },
              { label: 'Inspectors', url: '/inspectors', key: 2 }
            ]
          }
        ],
        [
          {
            label: ' Materials',
            items: [
              { label: 'Form Example', url: '/fm', key: 3 },
              { label: 'Approved', url: '/approved', key: 4 }
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
              { label: 'Form', url: '/form', key: 5 },
              { label: 'Inspectors', url: '/inspectors', key: 6 }
            ]
          }
        ],
        [
          {
            label: 'Approved Materials',
            items: [
              { label: 'Approved', url: '/approved', key: 7 },
              { label: 'Form Example', url: '/fm', key: 8 }
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
              { label: 'poles 2', key: 26 },
              { label: 'poles 2', key: 9 }
            ]
          }
        ],
        [
          {
            label: 'Transformers',
            items: [
              { label: 'Transformers 1', key: 25 },
              { label: 'Transformers 2', key: 10 }
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
              { label: 'Event 1.1', key: 24 },
              { label: 'Event 1.2', key: 11 }
            ]
          }
        ],
        [
          {
            label: 'Event 3',
            items: [
              { label: 'Event 3.1', key: 23 },
              { label: 'Event 3.2', key: 12 }
            ]
          }
        ]
      ]
    },
    {
      label: 'Inspectors',
      icon: 'pi pi-fw pi-users',
      items: [
        [
          {
            label: 'Event 1',
            items: [
              { label: 'Event 1.1', key: 22 },
              { label: 'Event 1.2', key: 13 }
            ]
          }
        ],
        [
          {
            label: 'Event 3',
            items: [
              { label: 'Event 3.1', key: 21 },
              { label: 'Event 3.2', key: 14 }
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
                    {/* <MegaMenu model={items} /> */}
                    {items.map((item, index) => (
                      <MegaMenu key={index} {...item} />
                    ))}
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