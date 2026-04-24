function InputSenha({ value, onChange, error }) {
  return (
    <div>
      <input
        type="password"
        value={value}
        onChange={onChange}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

export default InputSenha;