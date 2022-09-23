import "./style.css"
import nuKenzie from "../../assets/nu-kenzie-black.svg"

export function Header({ setIsLoggedIn }) {
    return (
        <header className="header container">
            <img src={nuKenzie} alt="Nu Kenzie" />
            <button onClick={() => setIsLoggedIn(false)} className="btn-medium">
                Sair
            </button>
        </header>
    )
}
