import React from 'react';
import styled, { css } from 'styled-components';
import { Props } from './types';

const Backdrop = styled.div`
  position: absolute;
  display: none;
  visibility: hidden;
  top: 0;
  left: 0;
  content: '';
  width: 100%;
  height: 100%;
  background: rgba(35, 35, 35, 0.82);
  transition: 0.25s ease;
  opacity: 0;
  z-index: 1;
  ${(props: { isShown: boolean }) =>
    props.isShown
      ? css`
          display: block;
          visibility: visible;
          opacity: 1;
        `
      : ``};
`;

const Overlay = ({ isShown, clickHandle }: Props) => {
  return <Backdrop isShown={isShown} onClick={clickHandle} />;
};

export default Overlay;
