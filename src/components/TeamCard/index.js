// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {data} = props
  const {id, name, teamImageUrl} = data

  return (
    <Link className="link" to={`/team-matches/${id}`}>
      <li className="teamCard">
        <img src={teamImageUrl} alt={name} />
        <p>{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
