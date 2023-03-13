import { Language } from '@material-ui/icons';
import { Person, Search, AddShoppingCart } from '@material-ui/icons';
import React, { useState } from 'react';
import { Button, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Navigation() {
  const [isExpanded, setIsExpanded] = useState(false);

  const iconFontSize = { fontSize: '1.25rem' };

  return (
    <>
      <Navbar
        expanded={isExpanded}
        bg='primary'
        variant='dark'
        fixed='top'
        className='px-4 py-2'
        expand='md'
      >
        <Navbar.Brand
        // onClick={() => {
        // 	dispatch(resetAdvancedSearch());
        // }}
        //   to={`${configState.organizationUrl || '/'}`}
        >
          Eduplan Ella
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='navbar-admin'
          onClick={() => setIsExpanded(!isExpanded)}
        />
        <Navbar.Collapse id='navbar-admin'>
          <Nav className='me-auto mt-2 mt-md-0'>
            <>
              <Dropdown>
                <Dropdown.Toggle
                  className='w-100'
                  variant='primary'

                  // id='dropdown-split-basic'
                >
                  dss{' '}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item
                    variant='primary'
                    //   to={`${configState.organizationUrl}/admin/cards/dnd`}
                  >
                    asdfasd
                  </Dropdown.Item>
                  <Dropdown.Item
                    title='asdfas'
                    //   to={`${configState.organizationUrl}/admin/fields`}
                  >
                    dasdfasdasdfasdfasd
                  </Dropdown.Item>
                  <Dropdown.Item
                    title='asdf'
                    //   to={`${configState.organizationUrl}/admin/users`}
                  >
                    asdfasd
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              {/* )} */}
            </>
          </Nav>

          <Nav className=' mt-1 mt-md-0'>
            <Button
              aria-haspopup='dialog'
              className='me-0 me-md-1 mb-1 mb-md-0'
              variant='primary'
              onClick={() => {
                setIsExpanded(false);
                // dispatch(resetAdvancedSearch());
              }}
            >
              <Search className='me-1' style={iconFontSize} />
              asdfas
            </Button>
            <Dropdown navbar>
              <Dropdown.Toggle
                className='w-100'
                variant='primary'
                id='nav-user-dropdown'
                aria-label='profile'
              >
                <Person style={iconFontSize} />
              </Dropdown.Toggle>

              <Dropdown.Menu align='end'>
                <NavDropdown.Divider />
                <Dropdown.Header>asdfas</Dropdown.Header>

                <Dropdown.Divider />
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown navbar>
              <Dropdown.Toggle
                className='w-100'
                variant='primary'
                id='nav-user-dropdown-language'
              >
                <div className='d-inline-block'>
                  <Language className='me-1' style={iconFontSize} />
                  <p className='m-0 d-inline'>asdfasd</p>
                </div>
              </Dropdown.Toggle>

              <Dropdown.Menu align='end'></Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Nav className=' mt-1 mt-md-0'>
            {/* {!!userState.data ? ( */}
            <Dropdown navbar>
              <Button
                className='w-100'
                variant='primary'
                id='nav-user-dropdown'
                aria-label='profile'
              >
                <AddShoppingCart style={iconFontSize} />
              </Button>
            </Dropdown>
            {/* ) : null} */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
