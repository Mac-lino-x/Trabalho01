function ListaAlunos() {
    const alunos=["Ana Maria", "Guilherme João", "João", "Pedro Lucas"]

    return (
        <div>
            <h2>Lista de Alunos</h2>
            <ul>
                {alunos.map((alunos, index) => (
                    <li key={index}>{alunos}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListaAlunos