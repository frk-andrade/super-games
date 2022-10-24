import './StarWars.css';

const StarWars = () => {

  const products = [
    {
      img: '../images/startWars1.png',
      name: 'Caneca Star Wars',
      price: 'R$ 60,00',
    },
    {
      img: '../images/startWars2.png',
      name: 'Darth Vader',
      price: 'R$ 100,00',
    },
    {
      img: '../images/startWars3.png',
      name: 'Boneco Yoda',
      price: 'R$ 859,00',
    },
    {
      img: '../images/startWars4.png',
      name: 'Stormtrooper',
      price: 'R$ 329,00',
    }
  ]

  return(
    <>
      <section className='container'>
        <h2>Star Wars</h2>
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
                  <img src={products.img} alt='Produto'></img>
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

export default StarWars;