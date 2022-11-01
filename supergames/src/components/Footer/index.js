import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <img src='../images/logo.svg' alt='Logo'></img>
            <a>Quem somos nós</a>
            <a>Política de privacidade</a>
            <a>Programa Fidelidade</a>
            <a>Nossas lojas</a>
            <a>Quero ser franqueado</a>
            <a>Anuncie aqui</a>
            Fale Conosco
            <form className='footer-form'>
                    <label>
                        Nome:
                            <input type="text" name="name" />
                            <input type="textarea" name="textarea" />
                    </label>
                        <input type="submit" value="Enviar mensagem" />
            </form>
        </div>
    )
};

export default Footer;