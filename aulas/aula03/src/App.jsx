import logo from './assets/learn.svg'
import avatar from './assets/avatar.svg'

function App(){
  return <div>
    <aside className='hidden md:block bg-gray-300'>
      <header>
        <img src={logo} alt="Imagem de um capelo" />
        <h1>Aluno Online</h1>
      </header>
      <nav>
        <ul>
          <li>Dashboard</li>
          <li>Notas</li>
          <li>Faltas</li>
          <li>Boletos</li>
          <li>Requerimentos</li>
          <li>Sair</li>
        </ul>
      </nav>
    </aside>
    <main>
      <header>
        <h1>Olá, Aluno!</h1>
        <img src={avatar} alt="imagem do avatar" />
      </header>
      <h2>Bem-vindo ao portal do aluno</h2>
      <section>
        <article>
          <h3>Mural de Avisos</h3>
          <ul>
            <li>Inscrição para o projeto de extensão</li>
            <li>Eleição para representante de turma</li>
            <li></li>
          </ul>
        </article>
        <article>
          <h3>Calendário Acadêmico</h3>
          <ul>
            <li><strong>23/02</strong> - Início do período letivo 2026-1</li>
            <li><strong>25/04</strong> - Prazo final para aplicação da P1</li>
            <li><strong>23/06</strong> - Prazo final para aplicação da P2</li>
            <li><strong>04/07</strong> - Fim do período letivo 2026-1</li>
          </ul>
        </article>
        <article>
          <h3>Minhas Diciplinas</h3>
          <ul>
            <li>Construção de front-end</li>
            <li>BI e Data Warehousing</li>
            <li>DevOps e Manutenção de Software</li>
            <li>Governança de TI</li>
            <li>Direitos Humanos e Ambientais</li>
            <li>Projeto de Inovação e Criatividade</li>
          </ul>
        </article>
      </section>
    </main>
  </div>
}

export default App;