import React from 'react';
import { bool, func } from 'prop-types';
import { StyledHamBurger } from './HamBurger.styled';

const HamBurger = ({ open, setOpen, ...props }) => {
  
  const isExpanded = open ? true : false;
  
  return (
    <StyledHamBurger aria-label="Toggle menu" aria-expanded={isExpanded} open={open} onClick={() => setOpen(!open)} {...props}>
      <span />
      <span />
      <span />
    </StyledHamBurger>
  )
}

HamBurger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default HamBurger;