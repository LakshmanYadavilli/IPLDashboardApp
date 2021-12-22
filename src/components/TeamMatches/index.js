// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class TeamMatches extends Component {
  state = {
    list: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const update = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        umpires: data.latest_match_details.umpires,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        id: data.latest_match_details.id,
        date: data.latest_match_details.date,
        venue: data.latest_match_details.venue,
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        firstInnings: data.latest_match_details.first_innings,
        secondInnings: data.latest_match_details.second_innings,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
      },
      recentMatches: data.recent_matches.map(n => ({
        umpires: n.umpires,
        manOfTheMatch: n.man_of_the_match,
        id: n.id,
        date: n.date,
        venue: n.venue,
        competingTeam: n.competing_team,
        competingTeamLogo: n.competing_team_logo,
        firstInnings: n.first_innings,
        secondInnings: n.second_innings,
        matchStatus: n.match_status,
        result: n.result,
      })),
    }
    this.setState({
      list: update,
      isLoading: false,
    })
  }

  render() {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const {list, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = list

    let bgCol = ''

    if (id === 'SH') {
      bgCol = 'SH'
    } else if (id === 'RCB') {
      bgCol = 'RCB'
    } else if (id === 'MI') {
      bgCol = 'MI'
    } else if (id === 'CSK') {
      bgCol = 'CSK'
    } else if (id === 'DC') {
      bgCol = 'DC'
    } else if (id === 'KXP') {
      bgCol = 'KXP'
    } else if (id === 'RR') {
      bgCol = 'RR'
    } else if (id === 'KKR') {
      bgCol = 'KKR'
    }

    return (
      <div id={bgCol} className="teamMatches">
        {isLoading ? (
          <div id="loader" testid="loader">
            <Loader
              type="BallTriangle"
              color="#ffffff"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <div>
            <img src={teamBannerUrl} alt="team banner" />
            <LatestMatch latest={latestMatchDetails} />
            <ul className="ulMC">
              {recentMatches.map(n => (
                <MatchCard key={n.id} data={n} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
