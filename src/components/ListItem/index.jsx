/* eslint-disable eqeqeq */

export function ListItem({ item, removeItem }) {
    function formatValue(value) {
        value = value.toLocaleString("pt-BR", { minimumFractionDigits: 2 })
        return `R$ ${value}`
    }

    return (
        <li className={item.type == "Entrada" ? "entrada" : ""}>
            <div>
                <h3 className="title-3">{item.description}</h3>
                <p className="text-2">{formatValue(item.value)}</p>
                <button onClick={() => removeItem(item.id)} className="trash"></button>
            </div>
            <p className="text-2">{item.type}</p>
        </li>
    )
}
