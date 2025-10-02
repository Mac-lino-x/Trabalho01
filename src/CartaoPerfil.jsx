function CartaoPerfil(props) {
    return (
        <div style={{border: "1px solid gray", padding: "10px", margin: "10px"}}>
            <h3>{props.nome}</h3>
            <p>Curso: {props.curso}</p>
            <p>Idade: {props.idade}</p>
        </div>
    )
}

export default CartaoPerfil