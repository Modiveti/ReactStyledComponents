import styled from 'styled-components';

export const StyledHamBurger = styled.button`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 40px;
  height: 40px;
  top: 5%
  left: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  visibility: ${({ open }) => open ? 'hidden' : 'visible'}

  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
  }
`;
