import LogoImg from "./../../assets/img/dsmetalogo.svg"
import './styles.css'

function Header() {

    return (
        <>
            <header>
                <div className="dsmeta-logo-container">
                    <img src={LogoImg} alt="DSMeta Logo" />
                        <h1>DSMeta</h1>
                        <p>Desenvolvido na semana Spring React do canal <a href="https://www.youtube.com/c/DevSuperior">DevSuperior</a></p>
                </div>
            </header>
        </>
    )

}

export default Header
