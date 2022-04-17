import { useDispatch } from "react-redux";
import "./InputSize.css";
import { useState } from "react";
const InputSize = () => {
  const dispatch = useDispatch();
  const [size, setSize] = useState(4);
  const sizeHandler = (event) => {
    dispatch({ type: "CHANGE_SIZE", size: +event.target.value });
    dispatch({ type: "CLEAR" });
    setSize(+event.target.value);
  };

  return (
    <div className="inputRange">
      Size:
      <div className="range-slider">
        <input
          type="range"
          min="4"
          className="range-slider__range"
          defaultValue="4"
          onInput={sizeHandler}
          max="8"
        />
        <span className="range-slider__value">{size} queens</span>
      </div>
    </div>
  );
};
export default InputSize;
