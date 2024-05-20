import React from 'react';

function Cards() {
    return (
        <div className="container">
            <div className="verticalNav">
                <img className="logozinha" src="/logozinha.png" alt="Logo" />
                <ul className="navbar-nav me-auto mb-2 mb-lg-0"
                    style={{ listStyleType: 'none', margin: '0', padding: '0', color: 'white' }}>
                    <br />
                    <br />
                    <li className="nav-item">
                        <a className="nav-link" href="/calendario">Calendário</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/materias">Matérias</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/professores">Professores</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/alunos">Alunos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/cursos">Curso</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/salas">Salas</a>
                    </li>
                    <li className="nav-item">
                        <a id="sair" className="nav-link" href="/inicial">Sair</a>
                    </li>
                </ul>
            </div>
            <div className="content">
                <h2>Professores Cadastrados</h2>
                <div className="card-container">
                    <div className="card">
                        <img src="/professor1.jpg" alt="Professor 1" />
                        <p>Professor 1</p>
                    </div>
                    <div className="card">
                        <img src="/professor2.jpg" alt="Professor 2" />
                        <p>Professor 2</p>
                    </div>
                    <div className="card">
                        <img src="/professor3.jpg" alt="Professor 3" />
                        <p>Professor 3</p>
                    </div>
                    <div className="card">
                        <img src="/professor4.jpg" alt="Professor 4" />
                        <p>Professor 4</p>
                    </div>
                    <div className="card">
                        <img src="/professor5.jpg" alt="Professor 5" />
                        <p>Professor 5</p>
                    </div>
                    <div className="card">
                        <img src="/professor6.jpg" alt="Professor 6" />
                        <p>Professor 6</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cards;
