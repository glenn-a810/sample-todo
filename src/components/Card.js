import './Card.css'

function Card(props) {
  const classed = 'card ' + props.className
  return <div className={classed}>{props.children}</div>
}

export default Card
