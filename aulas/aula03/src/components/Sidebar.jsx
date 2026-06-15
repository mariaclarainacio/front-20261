import Menu from "./Menu";
import logo from '../assets/learn.svg'

function Sidebar() {
    return (
        <aside className='hidden md:block bg-gray-300'>
            <header className='flex flex-row'>
                <img src={logo} alt="Imagem de um capelo" />
                <h1>Aluno Online</h1>
            </header>
            <Menu />
        </aside>)
}

export default Sidebar;