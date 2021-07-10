import { StyleMainCard, StyleRegisterContent} from '../style'
import { FiEdit, FiXCircle, FiPlusCircle } from "react-icons/fi";

const Register = () => (
    <>
         <StyleMainCard>
            <div className="title">
                <div>
                    <FiEdit className="icon"/>
                    <h2>Editar Cliente</h2>
                </div>
            </div>
            <StyleRegisterContent>
                <form>
                    <label for="name">
                        Nome:
                        <input type="text" id="name"/>
                    </label>
                    <label for="lastName">
                        Sobrenome:
                        <input type="text" id="lastName"/>
                    </label>
                    <label for="age">
                        Idade:
                        <input type="number" id="age"/>
                    </label>
                    <label for="cep">
                        CEP:
                        <input type="number" id="cep"/>
                    </label>
                    <label for="road">
                        Rua:
                        <input type="text" id="road"/>
                    </label>
                    <label for="district">
                        Bairro:
                        <input type="text" id="district"/>
                    </label>
                    <label for="city">
                        Cidade:
                        <input type="text" id="city"/>
                    </label>
                    <label for="state">
                        Estado:
                        <input type="text" id="state"/>
                    </label>
                </form>
                <div>
                    <button>
                        <FiXCircle className="icon"/>
                        Cancelar
                    </button>
                    <button>
                        <FiPlusCircle className="icon"/>
                        Salvar
                    </button>
                </div>
            </StyleRegisterContent>
        </StyleMainCard>
    </>
)

export default Register