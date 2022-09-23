/* eslint-disable eqeqeq */
import "./style.css"

export function List({ listTransactions, setListTransactions }) {
    function removeItem(id) {
        setListTransactions(listTransactions.filter((item) => item.id !== id))
    }

    function formatValue(value) {
        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })
    }

    return (
        <div className="list">
            <nav className="list-nav">
                <h3>Resumo financeiro</h3>
                <button className="btn-medium btn-medium-active">Todos</button>
                <button className="btn-medium">Entradas</button>
                <button className="btn-medium">Despesas</button>
            </nav>
            <ul>
                {listTransactions.map((item) => (
                    <li
                        key={item.id}
                        className={item.type == "Entrada" ? "entrada" : ""}
                    >
                        <div>
                            <h3 className="title-3">{item.description}</h3>
                            <p className="text-2">{formatValue(item.value)}</p>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="trash"
                            ></button>
                        </div>
                        <p className="text-2">{item.type}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
