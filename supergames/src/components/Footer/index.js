import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer'>
            <img src='../images/logo.svg' alt='Logo'></img>
            <button>Quem somos nós</button>
            <button>Política de privacidade</button>
            <button>Programa Fidelidade</button>
            <button>Nossas lojas</button>
            <button>Quero ser franqueado</button>
            <button>Anuncie aqui</button>
            <form>
                Fale Conosco
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