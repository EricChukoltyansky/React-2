const costumInput = ({ onInputChangeCallBack, value, name, type, label }) => {
  return (
    <div>
      <label htmlFor={name}>{label} : </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onInputChangeCallBack}
      />
    </div>
  );
};

export default costumInput;
