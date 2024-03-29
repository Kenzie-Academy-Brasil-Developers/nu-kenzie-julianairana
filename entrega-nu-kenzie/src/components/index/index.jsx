import imgLogo from "../../img/Nu Kenzie.svg"
import imgHome from "../../img/Group 262.svg"
import "./style.css"

export const Index = ({setState}) =>  {
    return (
    <div className="App-header">
        <div className="div-father">
            <div className="div-one">
                <img src={imgLogo} alt="logo Nu Kenzie" />
                <h1>Centralize o controle das suas finanças</h1>
                <span>de forma rápida e segura</span>
                <button onClick={() => setState(true)}>Iniciar</button>
            </div>
            <div className="div-two">
                <img className="img-home" src={imgHome} alt="" />
            </div>
        </div>
    </div>
    )
}


