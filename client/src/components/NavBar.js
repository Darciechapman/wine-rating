import React from 'react';
import { Link as domLink } from 'react-router-dom';
// import { Navbar, Nav, Container } from 'react-bootstrap';
import BookIcon from '@material-ui/icons/Book';
import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Link } from '@material-ui/core';

function AppNavbar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position='sticky' style={{ backgroundColor: '#644536' }}>
            {/* i think this needs to be applied to the theme instead:*/}
            <Toolbar style={{ justifyContent: 'space-between',  color: '#E4D7C8'  }} >
                <BookIcon style={{ color: '#E4D7C8' }} />

                {window.innerWidth < 960 ? (<>
                    {/* if window width is less than 960, we want a menu for the nav links */}
                    <IconButton style={{ color: '#E4D7C8' }} onClick={handleClick} >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}

                    >
                        <MenuItem component={domLink} to='/' onClick={handleClose}>Search for Wines</MenuItem>
                        <MenuItem component={domLink} to='/saved' onClick={handleClose}>See Saved Wines</MenuItem>
                    </Menu>
                </>) : (<>
                    {/* if window width is 960 or greater, we want nav links side by side */}
                    <div>
                        <Link  style={{ marginRight: '1rem' }} underline='none' display='inline-block' justifySelf='flex-end' color="inherit" component={domLink} to='/'>Search for Wines</Link>
                        <Link style={{ marginLeft: '1rem' }} display='inline-block' justifySelf='flex-end' color="inherit" component={domLink} to='/saved'>See Saved Wines</Link>
                    </div>


                </>)}


            </Toolbar>

        </AppBar>
        // <Navbar bg='dark' variant='dark' expand='lg'>
        //     <Container fluid>
        //         <Navbar.Brand as={Link} to='/'>Google Books Search</Navbar.Brand>
        //         <Navbar.Toggle aria-controls='navbar'/>
        //         <Navbar.Collapse id='navbar'>
        //             <Nav className='ml-auto'> 
        //                 <Nav.Link as={Link} to='/'>Search For Books</Nav.Link>
        //                 <Nav.Link as={Link} to='/saved'>See Saved Books</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )
}

export default AppNavbar;