import './App.css';
import logo from './assets/learn-svgrepo-com.svg';

function App() {
  return (
    <main>
      <img src={logo} alt="Imagem de um capelo" />
      <h1>Aluno Online</h1>
      <label htmlFor="matricula">Matricula</label>
      <input type="number" id="matricula" name="matricula" />
      <p id="matriculaErro"></p>
      <label htmlFor="senha">Senha</label>
      <input type="password" id="senha" name="senha" />
      <p id="senhaErro"></p>
      <button type="submit">Entrar</button>
    </main>
  );
}

export default App;