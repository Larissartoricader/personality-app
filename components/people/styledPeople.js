import styled from "styled-components";

export const StyledList = styled.ul`
  background-color: lightgrey;
  padding: 5px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  border: solid black 2px;
  border-radius: 5px;
  box-shadow: 10px 5px 5px gray;
  padding: 5px;
  margin: 5px;
  text-align: center;
`;
