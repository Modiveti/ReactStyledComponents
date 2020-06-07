import React from 'react';
import styled, { css } from "styled-components";

export const Container = styled.main`
  position: relative;
  width: 65vw
`;

export const Section = styled.section`
  position: relative;
`;

export const InnerSection = styled.div`
  position: relative;
  max-width: 65vw;
`;

export const AccordionContainer = styled.div``;

export const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid black;
`;

export const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

export const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
  color: #000000;
`;

export const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;
  color: #000000;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

export const AccordionContent = styled.p`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
`;

export const menuAccordionData = [
  {
    title: "Cakes",
    content: "By type"
  },
  {
    title: "Gifts",
    content: "By type"
  },
  {
    title: "Flowers",
    content: "By type"
  }
];