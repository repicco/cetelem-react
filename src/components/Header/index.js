import logo from '../../assets/img/logo.png'
import { StyleHeader } from './style'
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => (
    <StyleHeader>
      <div className="container">
        <img src={logo} alt="logo" />
        <nav>
          <div className="active">
            <a href="/">ADM CLIENTES</a>
          </div>
          <div>
            <a href="/">CARTÕES</a>
          </div>
          <div>
            <a href="/">EMPRÉSTIMOS</a>
          </div>
          <div>
            <a href="/">SEGUROS</a>
          </div>
          <div>
            <a href="/">OFERTAS</a>
          </div>
          <div>
            <a href="/">MAIS SERVIÇOS</a>
          </div>
        </nav>
        <div className="search">
          <input type="text" placeholder="BUSCAR" />
          <AiOutlineSearch />
        </div>
        <div className="clientArea">
          <label for="cpf">
            ÁREA DO CLIENTE
            <input type="text" placeholder="Digite seu CPF" />
          </label>
          <button>ACESSAR</button>
        </div>
      </div>
    </StyleHeader>
)

export default Header