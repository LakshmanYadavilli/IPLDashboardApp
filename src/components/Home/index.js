// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    list: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedList = data.teams.map(n => ({
      name: n.name,
      id: n.id,
      teamImageUrl: n.team_image_url,
    }))
    this.setState({list: updatedList, isLoading: false})
    console.log(data)
  }

  render() {
    const {list, isLoading} = this.state
    return (
      <div className="Home">
        {isLoading ? (
          <div className="loader" testid="loader">
            <Loader
              type="BallTriangle"
              color="#ffffff"
              height={50}
              width={50}
            />
          </div>
        ) : (
          <div>
            <div className="ipl">
              <img
                className="logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>

            <ul className="ulHome">
              {list.map(n => (
                <TeamCard data={n} key={n.id} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default Home
