import styles from './exploreNeighbourCard.module.css'

function ExploreNeighbourCard(props) {
  return (
    <div className={styles.exploreNeigbourCardContainer}>
        <h6>{props.title}</h6>
        <ul>
            <li>St. Michaels Sr. Secondary School</li>
            <li>Govt sec school</li>
            <li>Dronacharya Government College</li>
        </ul>
    </div>
  )
}

export default ExploreNeighbourCard