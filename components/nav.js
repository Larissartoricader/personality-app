import styled from "styled-components";

export default function NavBar() {
  const StyledNavBox = styled.ul`
    background-color: gray;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1;
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    width: 100%;
    height: 5vh;
    list-style: none;
    padding-top: 10px;
  `;

  return (
    <StyledNavBox>
      <li>People</li>
      <li>Personality</li>
      <li>Add</li>
    </StyledNavBox>
  );
}
