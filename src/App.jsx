import "./App.css"
import { useState } from "react"
import { LoginPage } from "./components/LoginPage"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { TotalMoney } from "./components/TotalMoney"
import { List } from "./components/List"

export function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [listTransactions, setListTransactions] = useState([])
    const [listId, setListId] = useState(0)

    return (
        <div className="App">
            {isLoggedIn ? (
                <main className="main container">
                    <Header setIsLoggedIn={setIsLoggedIn} />
                    <aside>
                        <Form
                            setListTransactions={setListTransactions}
                            listId={listId}
                            setListId={setListId}
                        />
                        <TotalMoney listTransactions={listTransactions} />
                    </aside>
                    <List
                        listTransactions={listTransactions}
                        setListTransactions={setListTransactions}
                    />
                </main>
            ) : (
                <LoginPage setIsLoggedIn={setIsLoggedIn} />
            )}
        </div>
    )
}
