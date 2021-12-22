// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latest} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latest

  return (
    <div className="latest">
      <h1>Latest Matches</h1>
      <div className="latestContainer">
        <div className="details">
          <div>
            <p>{competingTeam}</p>

            <p>{date}</p>
            <p>{venue}</p>
            <p>{result} </p>
          </div>
          <img src={competingTeamLogo} alt={`latest match ${competingTeam}`} />
        </div>
        <hr />
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
