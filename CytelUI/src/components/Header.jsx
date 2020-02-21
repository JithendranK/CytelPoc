import React, { useState, useRef } from 'react'
import { Navbar, Overlay, Popover } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const CytelLogo = require('../assets/images/Cytel-Logo.png').default

function Header() {
    const [show, setShow] = useState(false)
    const [target, setTarget] = useState(null)
    const userIcon = useRef(null)

    const handleClick = event => {
        setShow(!show)
        setTarget(event.target)
    }

    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home" className="no-padding">
                <img className="logo" src={CytelLogo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
                <FontAwesomeIcon className="user-icon fa-lg" icon="bell" />
                <div ref={userIcon}>
                    <FontAwesomeIcon
                        className="user-icon fa-lg"
                        onClick={handleClick}
                        icon="user"
                    />
                    <Overlay
                        show={show}
                        target={target}
                        placement="bottom"
                        container={userIcon.current}
                        containerPadding={20}
                    >
                        <Popover id="popover-contained">
                            <Popover.Title as="h3">User Name</Popover.Title>
                            <Popover.Content>
                                <strong>Holy guacamole!</strong>
                                Check this info.........
                            </Popover.Content>
                        </Popover>
                    </Overlay>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
