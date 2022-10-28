import './Consoles.css';

const Consoles = () => {

    const products = [
        {
            img: '../images/game-boy.svg',
            name: 'Game Boy',
            price: 'R$ 400,00'
        },
        {
            img: '../images/joystick-nintendo.svg',
            name: 'Joystick Nintendo',
            price: 'R$ 600,00'
        },
        {
            img: '../images/joystick.svg',
            name: 'Joystick Xbox',
            price: 'R$ 500,00'
        },
        {
            img: '../images/nintendo-console.svg',
            name: ' Super Nintendo',
            price: 'R$ 900,00'
        },
        {
            img: '../images/xbox.svg',
            name: 'Xbox S',
            price: 'R$ 5000,00'
        },
        {
            img: '../images/xbox2.svg',
            name: 'Xbox x',
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
              <img src='../images/vetor.svg' alt='Ver Tudo'></img>
            </a>
          </div>
        </section>
  
        <section className='container-produtos'>
          <div className='produtos-individuais'>
             {products.map((products) => {
                return(
                  <div className='produto'>
                    <img className='product-image' src={products.img} alt='Produto'></img>
                    <p className='title'>{products.name}</p>
                    <p className='price'>{products.price}</p>
                    <p className='see-all'>Ver produto</p>
                  </div>
                )
             })}
          </div>
        </section>
      </>
    )
}

export default Consoles;