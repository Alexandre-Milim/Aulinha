import '../components/NavBar'
import NavBar from "../components/NavBar";
import '../components/NavBar.css'


function CadastroProfessores() {
    return(
        <div className="container1">
            <NavBar></NavBar>
            <div className="ContainerCad">
                <button id="Voltar">Voltar</button>
            </div>

            <div className="container2">
                <h1 id="Cad">Cadastro de</h1>
                <h1 id="Professor">Professores</h1>

                <p id="txtnome">Nome</p>
                <input className="input" id="Nome" type="text"/>

                <p id="txtemail">E-mail</p>
                <input className="input" id="Email" type="text"/>

                <p id="txtsenha">Senha</p>
                <input className="input" id="Senha" type="password"/>

                <p id="txtcpf">CPF</p>
                <input className="input" id="CPF" type="text"/>

                <p id="txtnif">NIF</p>
                <input className="input" id="NIF" type="text"/>

                <p id="txtnascimento">Data de nascimento</p>
                <input className="input" id="Data" type="date"/>

                <button id="Concluir">Concluir</button>
            </div>
        </div>
    )
}

export default CadastroProfessores;