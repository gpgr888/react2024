import coreConceptImage from '../assets/components.png';

export default function CoreConcepts({title,image,description}){
  return (
    <li>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  )
}