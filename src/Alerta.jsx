
function Alerta({tipo}) {
    if (tipo === "sucesso") {
        return <p style={{color: "green"
    }}>Operação realizada com sucesso!
    </p>
    }else if (tipo ==="erro") {
        return <p style={{color: "red"
    }}>Ocorreu um erro.</p>
    }else {
    return <p>Mensagem genérica.</p>
    }
}

export default Alerta
