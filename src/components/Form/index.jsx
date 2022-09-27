import { useState } from "react"
import "./style.css"
import { toast } from "react-toastify"

export function Form({ setListTransactions, listId, setListId }) {
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [select, setSelect] = useState("")

    function addToList(event) {
        event.preventDefault()
        if (value <= 0) {
            toast.warning("Digite apenas números positivos")
        } else {
            setListTransactions((oldList) => [
                ...oldList,
                {
                    description: description.trim(),
                    type: select,
                    value: select === "Entrada" ? value : -value,
                    id: listId,
                },
            ])
            setListId(listId + 1)
            setDescription("")
            setValue("")
            setSelect("")
            toast.success("Adicionado com sucesso!")
        }
    }

    return (
        <form onSubmit={addToList} className="form">
            <label className="text-2" htmlFor="description">
                Descrição
            </label>
            <input
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                className="input text-1"
                id="description"
                type="text"
                placeholder="Digite aqui sua descrição"
                required
            />
            <span className="text-2">Ex: Compra de roupas</span>
            <div>
                <label className="text-2" htmlFor="value">
                    Valor
                </label>
                <div>
                    <input
                        onChange={(event) => setValue(+event.target.value)}
                        value={value}
                        className="input text-1"
                        id="value"
                        type="number"
                        placeholder="1"
                        required
                    />
                    <span className="text-1">R$</span>
                </div>

                <label className="text-2" htmlFor="select-type">
                    Tipo de valor
                </label>
                <select
                    onChange={(event) => setSelect(event.target.value)}
                    value={select}
                    id="select-type"
                    className="input text-2"
                    required
                >
                    <option value="" hidden disabled>
                        Tipo
                    </option>
                    <option value="Entrada">Entrada</option>
                    <option value="Despesa">Despesa</option>
                </select>
            </div>
            <button type="submit" className="btn">
                Inserir valor
            </button>
        </form>
    )
}
