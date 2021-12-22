// Write your code here
import './index.css'

const MatchCard = props => {
  const {data} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = data
  const statusCol = matchStatus === 'Won' ? 'G' : 'R'

  return (
    <div className="matchCard">
      <img src={competingTeamLogo} alt={`competing team ${competingTeam}`} />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={statusCol}>{matchStatus}</p>
    </div>
  )
}

export default MatchCard
