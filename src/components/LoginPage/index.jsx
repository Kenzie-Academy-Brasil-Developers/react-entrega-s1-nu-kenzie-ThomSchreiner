import nuKenzie from "../../assets/nu-kenzie-white.svg"
import bgImageLogin from "../../assets/bg-image-login.svg"
import "./style.css"

export function LoginPage({ setIsLoggedIn }) {
    return (
        <div className="login-page container">
            <div>
                <img src={nuKenzie} alt="Nu Kenzie" />
                <h1 className="title-1">
                    Centralize o controle das suas finanças
                </h1>
                <p className="text-1">de forma rápida e segura</p>
                <button onClick={() => setIsLoggedIn(true)} className="btn">
                    Iniciar
                </button>
            </div>
            <div>
                <img src={bgImageLogin} alt="imagem ilustrativa" />
            </div>
        </div>
    )
}
