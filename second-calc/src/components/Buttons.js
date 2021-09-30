import Button from "./Button";

const Buttons = () => {
  console.log("Buttons got rerendered again");
  return (
    <div className="buttons">
      <div className="button-row">
        <Button value="AC" />
        <Button value="C" />
        <Button value="%" />
        <Button value="/" />
      </div>
      <div className="button-row">
        <Button value="7" />
        <Button value="8" />
        <Button value="9" />
        <Button value="x" />
      </div>
      <div className="button-row">
        <Button value="4" />
        <Button value="5" />
        <Button value="6" />
        <Button value="-" />
      </div>
      <div className="button-row">
        <Button value="1" />
        <Button value="2" />
        <Button value="3" />
        <Button value="+" />
      </div>
      <div className="button-row">
        <Button value="0" />
        <Button value="." />
        <Button value="=" />
      </div>
    </div>
  );
};

export default Buttons;
