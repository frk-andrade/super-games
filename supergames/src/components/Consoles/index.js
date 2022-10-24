import './Consoles.css'

const Consoles = () => {
    const products = [
        {
            img: '../images/game-boy.svg',
            name: 'Console Game Boy',
            price: 'R$ 400,00'
        },
        {
            img: '../images/joystick-nintendo.svg',
            name: 'Joystick Nintendo Switch',
            price: 'R$ 600,00'
        },
        {
            img: '../images/joystick.svg',
            name: 'Joystick Xbox',
            price: 'R$ 500,00'
        },
        {
            img: '../images/nintendo-console.svg',
            name: ' Console Super Nintendo',
            price: 'R$ 900,00'
        },
        {
            img: '../images/xbox.svg',
            name: 'Console Xbox S',
            price: 'R$ 5000,00'
        },
        {
            img: '../images/xbox2.svg',
            name: 'Console Xbox x',
            price: 'R$ 5000,00'
        }
    ]

    return(
        <>
        <section className='container'>
            <h2>Consoles</h2>
            <div className='produtos'>
                <p>Ver tudo </p>
                <a href='/'>
                    <img src='../images/vector.svg' alt='Ver Tudo'></img>
                </a>
            </div>
        </section>
        </>
    )
}