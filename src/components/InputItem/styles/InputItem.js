import styled from "styled-components";

const COLORS = ["#00fffa", "#07f407", "#ffcf00", "#ff5722", "#ff0000"];

export const InputComponent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: center;
  padding: 1em;
  border: 1px solid black;
  border-radius: 1em;
  background-color: #8e1a3b;
  box-shadow: 5px 5px 20px 6px black;
  color: white;
  width: 80%;
  max-width: 350px;
  transition: all 2s ease;
`;

export const Input = styled.input`
  width: 100%;
  font-family: "New Tegomin", serif;
  letter-spacing: 0.5px;
  text-decoration: none;
  border: none;
  outline: none;
  color: #5f6368;
  font-weight: bold;
  font-size: 20px;
  border-bottom: 0.5px solid #5f6368;
  border-top: 0.5px solid #5f6368;
  padding: 0.5em 0 0.6em 0;
  border-radius: 0.5em;
  padding-left: 0.5em;

  &:focus {
    box-shadow: 0px 0px 5px 2px
      ${({ name }) => (name >= 0 ? COLORS[name] : "white")};
  }

  &::placeholder {
    font-style: italic;
  }
`;

export const SubmitButton = styled.button`
  display: inline-block;
  font-family: "New Tegomin", serif;
  padding: 0.75em 1.5em;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 0.3em;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1rem;
  color: white;
  background-color: hsl(343, 100%, 10%);
  margin: 0 auto;
  width: 100%;
  text-transform: uppercase;

  &:hover,
  &:focus {
    background-color: hsl(343, 100%, 20%);
  }
`;

export const PriorityComponent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 0.2em;
  margin: 0.5em auto;
`;
export const PriorityText = styled.div`
  margin: 0.5em;
  font-size: 0.8rem;
  line-height: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  text-transform: uppercase;
`;
export const PriorityItem = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${({ name }) => (name >= 0 ? COLORS[name] : "white")};
  cursor: pointer;
  border: 0.5px solid black;
  transition: all 0.2s ease;
  margin: 0;

  &:hover {
    transform: scale(2);
  }
`;

export const Warning = styled.div`
  color: red;
  font-weight: bold;
`;
