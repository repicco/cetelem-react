import { StyleMainCard, StyleListContent } from '../style'
import { AiOutlineUnorderedList, AiFillDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";

const List = () => (
    <>
        <StyleMainCard>
            <div className="title">
                <div>
                    <AiOutlineUnorderedList className="icon"/>
                    <h2>Lista Clientes</h2>
                </div>
                <button>Novo Cliente</button>
            </div>
            <StyleListContent>
                <div className="tableTitle">
                    <p>Nome</p>
                    <p>Sobrenome</p>
                    <p>Idade</p>
                    <p>Estado</p>
                    <p>Cidade</p>
                    <p>Ações</p>
                </div>
                <div className="tableBody">
                    <p>Renato</p>
                    <p>Picco</p>
                    <p>34</p>
                    <p>São Paulo</p>
                    <p>SP</p>
                    <div>
                        <FiEdit className="icon"/>
                        <AiFillDelete className="icon"/>
                    </div>
                </div>
                <div className="tableBody">
                    <p>Renato</p>
                    <p>Picco</p>
                    <p>34</p>
                    <p>São Paulo</p>
                    <p>SP</p>
                    <div>
                        <FiEdit className="icon"/>
                        <AiFillDelete className="icon"/>
                    </div>
                </div>
            </StyleListContent>
        </StyleMainCard>
    </>
)

export default List
