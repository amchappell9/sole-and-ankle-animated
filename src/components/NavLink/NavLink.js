import React from "react";
import styled from "styled-components/macro";
import { WEIGHTS } from "../../constants";

const NavLink = ({ children, ...rest }) => {
  return (
    <NavLinkWrapper {...rest}>
      <MainText>{children}</MainText>
      <HoverText>{children}</HoverText>
    </NavLinkWrapper>
  );
};

const NavLinkWrapper = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  position: relative;
  overflow: hidden;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Text = styled.span`
  display: block;

  transform: translateY(var(--from));
  transition: transform 500ms;

  ${NavLinkWrapper}:hover & {
    transform: translateY(var(--to));
    transition: transform 200ms;
  }
`;

const MainText = styled(Text)`
  --from: 0%;
  --to: -100%;
`;

const HoverText = styled(Text)`
  position: absolute;
  top: 0;
  font-weight: bold;

  --from: 100%;
  --to: 0%;
`;

export default NavLink;
