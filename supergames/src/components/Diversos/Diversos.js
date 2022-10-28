import './Diversos.css';

const Diversos = () => {

    const products = [
        {
            img: '../images/camisa-atari.svg',
            name: 'Camisa Atari',
            price: 'R$ 90,00'
        },
        {
            img: '../images/camisa-snes.svg',
            name: 'Camisa SNES',
            price: 'R$ 100,00'
        },
        {
            img: '../images/fantasia-pikachu.svg',
            name: 'Fantasia Pikachu',
            price: 'R$ 400,00'
        },
        {
            img: '../images/oculos-rv.svg',
            name: 'Óculos RV',
            price: 'R$ 500,00'
        },
        {
            img: '../images/relogio-retro.svg',
            name: 'Relógio Retrô',
            price: 'R$ 190,00'
        },
        {
            img: '../images/sonic.svg',
            name: 'Boneco Sonic',
            price: 'R$ 350,00'
        }
    ]

    return(
        <>
      <section className='container'>
        <h2>Diversos</h2>
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

export default Diversos;