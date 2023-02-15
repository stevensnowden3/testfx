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
},{
  label: 'Material Checklist',
  icon: 'pi pi-fw pi-list',
  items: [
    [
      {
        label: 'Materials',
        items: [
          { label: 'Form', url: '/form', key: 'form', style: { backgroundColor: '#b5bd36', color: 'red !important' } },
          { label: 'Inspectors', url: '/inspectors', key: 'inspectors' }
        ]
      }
    ],
    [      {        label: ' Materials',        items: [          { label: 'Form Example', url: '/fm', key: 'form-example' },          { label: 'Approved', url: '/approved', key: 'approved' }        ]
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
    [      {        label: 'Approved Materials',        items: [          { label: 'Approved', url: '/approved', key: 'ware-approved' },          { label: 'Form Example', url: '/fm', key: 'ware-form-example' }        ]
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
    [      {        label: 'Transformers',        items: [          { label: 'Transformers 1', key: 'transformers-1' },
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
    [      {        label: 'Event 3',        items: [          { label: 'Event 3.1', key: 'event-3-1' },          { label: 'Event 3.2', key: 'event-3-2' }        ]
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
          { label: 'Event 1.1', key: 'inspectors-1-1' },
          { label: 'Event 1.2', key: 'inspectors-1-2' }
        ]
      }
    ],
    [      {        label: 'Event 3',        items: [          { label: 'Event 3.1', key: 'inspectors-3-1' },          { label: 'Event 3.2', key: 'inspectors-3-2' }        ]
      }
    ]
  ]
}
];

return (
<Navbar color='light' light expand='md'>
<Container>
<NavbarToggler onClick={toggle}
<MegaMenu model={items} />
</Container>
</Navbar>
);
};

export default NavBar;