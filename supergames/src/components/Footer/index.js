import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <div className="content-footer">
                <div className="container-links">
                    <img src='../images/logo.svg' alt='Logo'></img>
                    <div className="links-footer">
                        <a>Quem somos nós</a>
                        <a>Política de privacidade</a>
                        <a>Programa Fidelidade</a>
                        <a>Nossas lojas</a>
                        <a>Quero ser franqueado</a>
                        <a>Anuncie aqui</a>
                    </div>
                </div>
                <div className='footer-form'>
                    <div className="title-form">
                        <p> Fale Conosco </p>
                    </div>
                    <form className="form">
                        <div className="input-name">
                            <input type="text" name="name" placeholder="Nome"/>       
                        </div>
                        <div className="input-mensage">
                            <input type="textarea" name="textarea" multiline="true" placeholder = "Insira a sua mensagem"/> 
                        </div>

                        <button className="button-form">Enviar Mensagem</button>
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Footer;