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
items: [{ label: 'Home', url: '/', key: home }]
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
          { label: 'Form', url: '/form', key: `form`, style: { backgroundColor: '#b5bd36', color: 'red !important' } },
          { label: 'Inspectors', url: '/inspectors', key: `inspectors` }
        ]
      }
    ],
    [      {        label: ' Materials',        items: [          { label: 'Form Example', url: '/fm', key: `fm` },          { label: 'Approved', url: '/approved', key: `approved` }        ]
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
          { label: 'Form', url: '/form', key: `form-warehouse` },
          { label: 'Inspectors', url: '/inspectors', key: `inspectors-warehouse` }
        ]
      }
    ],
    [      {        label: 'Approved Materials',        items: [          { label: 'Approved', url: '/approved', key: `approved-warehouse` },          { label: 'Form Example', url: '/fm', key: `fm-warehouse` }        ]
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
          { label: 'poles 2', key: `poles-1` },
          { label: 'poles 2', key: `poles-2` }
        ]
      }
    ],
    [      {        label: 'Transformers',        items: [,
[
{
label: 'Event 2',
items: [
{ label: 'Event 2.1', key: 21 },
{ label: 'Event 2.2', key: 14 }
]
}
]
]
}
];

return (
<Navbar color="light" light expand="md">
<Container>
<PageLink href="/">
<img
src="/logo.png"
alt="Logo"
style={{ width: '150px', height: '50px' }}
/>
</PageLink>
<NavbarToggler onClick={toggle} />
<Collapse isOpen={isOpen} navbar>
<Nav className="ml-auto" navbar>
{!isLoading && user && (
<NavItem>
<AnchorLink href="#">Welcome, {user.name}</AnchorLink>
</NavItem>
)}
<UncontrolledDropdown nav inNavbar>
<DropdownToggle nav caret>
Menu
</DropdownToggle>
<DropdownMenu right>
<MegaMenu model={items} style={{ width: '300px' }} />
</DropdownMenu>
</UncontrolledDropdown>
</Nav>
</Collapse>
</Container>
</Navbar>
);
};

export default NavBar;