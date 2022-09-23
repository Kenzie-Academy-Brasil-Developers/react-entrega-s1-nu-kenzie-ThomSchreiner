/* eslint-disable eqeqeq */
import { useState } from "react"
import "./style.css"

export function List({ listTransactions, setListTransactions }) {
    const [listTransactionsFiltred, setListTransactionsFiltred] = useState([])

    function removeItem(id) {
        setListTransactions(listTransactions.filter((item) => item.id !== id))
    }

    function formatValue(value) {
        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        })
    }

    function filterList(filterType) {
        filterType
            ? setListTransactionsFiltred(listTransactions.filter((list) => list.type == filterType))
            : setListTransactionsFiltred([])
    }

    return (
        <div className="list">
            <nav className="list-nav">
                <h3>Resumo financeiro</h3>
                <button onClick={() => filterList(false)} className="btn-medium btn-medium-active">
                    Todos
                </button>
                <button onClick={() => filterList("Entrada")} className="btn-medium">
                    Entradas
                </button>
                <button onClick={() => filterList("Despesa")} className="btn-medium">
                    Despesas
                </button>
            </nav>
            <ul>
                {listTransactionsFiltred.length
                    ? listTransactionsFiltred.map((item) => (
                          <li key={item.id} className={item.type == "Entrada" ? "entrada" : ""}>
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
                      ))
                    : listTransactions.map((item) => (
                          <li key={item.id} className={item.type == "Entrada" ? "entrada" : ""}>
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
