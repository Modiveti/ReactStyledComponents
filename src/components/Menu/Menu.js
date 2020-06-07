import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import MenuOptions from '../MenuOptions'

const Menu = ({ open, ...props }) => {
  
  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;

  return (
    <StyledMenu open={open} aria-hidden={!isHidden} {...props}>
      <MenuOptions />
    </StyledMenu>
  )
}

Menu.propTypes = {
  open: bool.isRequired,
}

export default Menu;
