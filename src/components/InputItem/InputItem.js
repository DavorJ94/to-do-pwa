import React, { useState, useEffect, useRef } from "react";
import {
  Input,
  SubmitButton,
  InputComponent,
  PriorityComponent,
  PriorityText,
  PriorityItem,
  Warning,
} from "./styles/InputItem";

const PRIORITIES = Array.from(Array(5).keys());

export default function InputItem({ itemAddition }) {
  const [inputItem, setInputItem] = useState("");
  const [priority, setPriority] = useState(0);
  const [showInput, setShowInput] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const wrapperRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleClickOutside(event) {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
      setShowInput(false);
    } else {
      setShowInput(true);
    }
  }

  const handleInputChange = (e) => {
    setInputItem(e.target.value);
    if (warningMessage) setWarningMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputItem === "") {
      setWarningMessage("Please fill the task.");
      return;
    }
    const addedObj = { text: inputItem, priority: priority };
    itemAddition(addedObj);
    setShowInput(false);
    setPriority(0);
    setInputItem("");
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) handleSubmit(e);
  };

  return (
    <>
      <InputComponent ref={wrapperRef} onKeyUp={handleKeyPress}>
        <Input
          onChange={handleInputChange}
          value={inputItem}
          placeholder="Add item"
          active={showInput}
        />

        <PriorityComponent style={{ display: showInput ? "" : "none" }}>
          <PriorityText>Priority: </PriorityText>
          {PRIORITIES.map((priorityValue) => {
            return (
              <PriorityItem
                priority={priority}
                name={priority >= priorityValue ? priorityValue : undefined}
                onClick={() => setPriority(priorityValue)}
                key={priorityValue * 1000}
              ></PriorityItem>
            );
          })}
        </PriorityComponent>
        <SubmitButton
          type="submit"
          onClick={handleSubmit}
          style={{ display: showInput ? "" : "none" }}
        >
          Add item
        </SubmitButton>
      </InputComponent>
      {warningMessage && <Warning>{warningMessage}</Warning>}
    </>
  );
}
