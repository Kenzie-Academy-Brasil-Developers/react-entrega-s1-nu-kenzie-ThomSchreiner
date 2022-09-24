import "./style.css"
import nuKenzie from "../../assets/nu-kenzie-black.svg"

export function Header({ setIsLoggedIn }) {
    return (
        <header className="header">
            <div className="container">
                <img src={nuKenzie} alt="Nu Kenzie" />
                <button onClick={() => setIsLoggedIn(false)} className="btn-medium">
                    Sair
                </button>
            </div>
        </header>
    )
}
