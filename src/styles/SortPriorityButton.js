import styled from "styled-components";

export const SortPriorityButton = styled.button`
  display: ${({ show, itemsLength }) =>
    show && itemsLength > 1 ? "inline-block" : "none"};
  border: none;
  outline: none;
  margin-top: 1em;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
  background-color: transparent;
  font-family: "New Tegomin", serif;
  transition: all 2s ease;
  transition-delay: 1s;
`;
