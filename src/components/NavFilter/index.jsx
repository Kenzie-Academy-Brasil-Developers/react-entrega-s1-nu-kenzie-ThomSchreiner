/* eslint-disable eqeqeq */
import "./style.css"

export function NavFilter({ filterList, listFilterType }) {
    const actual = "btn-medium btn-medium-active"

    return (
        <nav className="list-nav">
            <h3>Resumo financeiro</h3>
            <div>
                <button
                    onClick={() => filterList(false)}
                    className={!listFilterType ? actual : "btn-medium"}
                >
                    Todos
                </button>
                <button
                    onClick={() => filterList("Entrada")}
                    className={listFilterType == "Entrada" ? actual : "btn-medium"}
                >
                    Entradas
                </button>
                <button
                    onClick={() => filterList("Despesa")}
                    className={listFilterType == "Despesa" ? actual : "btn-medium"}
                >
                    Despesas
                </button>
            </div>
        </nav>
    )
}
