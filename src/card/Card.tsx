import './Card.scss';
interface project{
    key: number
    index: number
    title: string
    description: string
    img: string
}
function Card({description, title, img}: project){
    return (
        <section className='card bg-about'>
          <h1 className='card-title text-white'>{title}</h1>
          <img className='card-img' src={img} alt="" />
          <h2 className='card-desc text-white'>{description}</h2>
        </section>
    );
}
 
export default Card;