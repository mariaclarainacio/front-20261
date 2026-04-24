function InputEmail({ value, onChange, error }) {
  return (
    <div>
      <input
        type="email"
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default InputEmail; 