import "./style.css"

export function TotalMoney({ listTransactions }) {
    function formatValue() {
        return listTransactions
            .reduce((acc, act) => acc + act.value, 0)
            .toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
            })
    }

    return (
        <div className="total-value">
            <div>
                <h3 className="title-3">Valor total:</h3>
                <h3 className="title-3">{formatValue()}</h3>
            </div>
            <p className="text-2">O valor se refere ao saldo</p>
        </div>
    )
}
