import React from "react";
import { useState } from "react";
import Input from "components/Input/Input";
import Panel from "components/Panel/Panel";

const RadioGroup = ({props: { items, checkedItem, ...otherProps }}) => {
  const [currentRadio, setCurrentRadio] = useState(checkedItem)
  const handleClick = (radio) => {
    setCurrentRadio(radio)
  };
  return (
    <Panel>
      {items.map((item, index)=>{
            return (
              <React.Fragment key={item}>
                <label>
                  <Input type="radio" checked={currentRadio === index ? "checked" : ""} props={otherProps} onChange={() => handleClick(index)} />{item}
                </label>
              </React.Fragment>
            )
        })}
    </Panel>
    );
  };

export default RadioGroup;
