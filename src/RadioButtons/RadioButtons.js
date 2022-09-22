import "./RadioButtons.css";
import RadioGroup from "components/RadioGroup/RadioGroup";

const RadioButtons = () => {
  const radioProps = {
    items: ['Apple', 'Pear', 'Orange'],
    checkedItem: 1,
    id: 'fruits',
    name: 'fruits'
  }
  return (
    <RadioGroup props={radioProps} />
    );
};

export default RadioButtons;
