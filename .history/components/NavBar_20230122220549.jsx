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

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" style={{ backgroundColor: 'red' }} light expand="md">
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
                  <NavItem>
                    <PageLink href="/" className="nav-link" testId="navbar-csr">
                      Home
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink href="/InspectionForm" className="nav-link" testId="navbar-ssr">
                      Inspection Form
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink href="/inspectedMaterials" className="nav-link" testId="navbar-external">
                      Inspected Materials
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <PageLink href="/materialsDataTable" className="nav-link" testId="navbar-external">
                      Find Materials
                    </PageLink>
                  </NavItem>
                  <NavItem>
                    <UncontrolledDropdown>
                      <DropdownToggle caret className="bg-light text-dark nav-link">
                        Ware House
                      </DropdownToggle>
                      <DropdownMenu>
                        <DropdownItem>
                          <PageLink href="/materialsDataTable" className="nav-link" testId="navbar-external">
                            Materials Data Table
                          </PageLink>
                        </DropdownItem>
                        <DropdownItem>
                          <PageLink href="/approved" className="nav-link" testId="navbar-external">
                            Approved Materials
                          </PageLink>
                        </DropdownItem>
                        <DropdownItem>
                          <PageLink href="/getData" className="nav-link" testId="navbar-external">
                            Rejected Materials
                          </PageLink>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </NavItem>
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
