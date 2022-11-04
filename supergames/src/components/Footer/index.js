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
            <div className='footer-form'>
            <p> Fale Conosco </p>
            <form >
                <label>
                    <input type="text" name="name" placeholder="Nome"/> <br/>       
                    <input type="textarea" name="textarea" multiline="true" placeholder = "Insira a sua mensagem"/> <br/> 
                </label>
                    <input type="submit" value="Enviar mensagem" />
            </form>
            </div>
        </div>
    )
};

export default Footer;