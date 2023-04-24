import styled from "styled-components";

interface INavLi {
  focus: boolean;
}

export const Container = styled.header`
  width: 100%;
  padding: 10px 0;
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
`;

export const Inner = styled.div`
  max-width: 840px;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  > ul {
    display: flex;
    gap: 10px;
  }
`;

export const NavLi = styled.li<INavLi>`
  color: ${(props) => (props.focus ? "#1976d2" : "black")};
`;

export const BtnGroup = styled.ul`
  display: flex;
  gap: 10px;
`;
