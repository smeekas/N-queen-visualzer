import "./InputRange.css";

const InputRange = (props) => {
  const rangeHandler = (event) => {
    props.setDelay(event.target.value);
  };
  return (
    <div className="inputRange">
    Delay:
      <div className="range-slider">
        <input
          className="range-slider__range"
          type="range"
          onInput={rangeHandler}
          defaultValue="100"
          min="50"
          max="1000"
          step="100"
        />
        <span className="range-slider__value">{props.delay} ms</span>
      </div>
    </div>
  );
};

export default InputRange;
