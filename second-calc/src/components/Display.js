const Display = ({ value }) => {
  return (
    <div className="display">
      <input readOnly value={value}/>
    </div>
  );
}

export default Display;