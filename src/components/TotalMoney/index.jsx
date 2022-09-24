import "./style.css"

export function TotalMoney({ listTransactions }) {
    function formatValue() {
        const value = listTransactions
            .reduce((acc, act) => acc + act.value, 0)
            .toLocaleString("pt-BR", { minimumFractionDigits: 2 })
        return `R$ ${value}`
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
