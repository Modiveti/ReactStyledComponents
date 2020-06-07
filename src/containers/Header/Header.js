import React, { useState, useRef } from 'react';
import { StyledHeader } from './Header.styled';
import { HamBurger, Menu } from '../../components';
import { useOnClickOutside } from '../../hooks';

const Header = ({ ...props }) => {
    const [open, setOpen] = useState(false);
    const node = useRef();
    const menuId = "main-menu";
    useOnClickOutside(node, () => setOpen(false));

    return (
        <header>
            <StyledHeader>
                <div ref={node}>
                    <HamBurger open={open} setOpen={setOpen} aria-controls={menuId} />
                    <Menu open={open} setOpen={setOpen} id={menuId} />
                </div>
            </StyledHeader>
        </header>
    )
}

export default Header;