/* eslint-disable eqeqeq */
import { useState } from "react"
import { ListItem } from "../ListItem"
import { NavFilter } from "../NavFilter"
import noCard from "../../assets/no-card.svg"
import "./style.css"

export function List({ listTransactions, setListTransactions }) {
    const [listTransactionsFiltred, setListTransactionsFiltred] = useState([])
    const [listFilterType, setlistFilterType] = useState(false)

    function removeItem(id) {
        setListTransactions(listTransactions.filter((item) => item.id !== id))
    }

    function filterList(filterType) {
        filterType
            ? setListTransactionsFiltred(listTransactions.filter((list) => list.type == filterType))
            : setListTransactionsFiltred([])
        setlistFilterType(filterType)
    }

    if (!listTransactions.length) {
        return (
            <div className="list">
                <NavFilter filterList={filterList} listFilterType={listFilterType} />
                <h2 className="title-2">Você ainda não possui nenhum lançamento</h2>
                <div>
                    <img src={noCard} alt="noCard" />
                    <img src={noCard} alt="noCard" />
                </div>
            </div>
        )
    }

    if (listFilterType && !listTransactionsFiltred.length) {
        return (
            <div className="list">
                <NavFilter filterList={filterList} listFilterType={listFilterType} />
                <h2 className="title-2">Você ainda não possui nenhum lançamento</h2>
                <div>
                    <img src={noCard} alt="noCard" />
                    <img src={noCard} alt="noCard" />
                </div>
            </div>
        )
    }

    return (
        <div className="list">
            <NavFilter filterList={filterList} listFilterType={listFilterType} />
            <ul>
                {listTransactionsFiltred.length
                    ? listTransactionsFiltred.map((item) => (
                          <ListItem key={item.id} item={item} removeItem={removeItem} />
                      ))
                    : listTransactions.map((item) => (
                          <ListItem key={item.id} item={item} removeItem={removeItem} />
                      ))}
            </ul>
        </div>
    )
}
