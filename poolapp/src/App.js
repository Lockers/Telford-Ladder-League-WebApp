import React from 'react';
import { getPlayers, addPlayer } from './actions/actionCreators';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { Players } from './components/Players';
import { SinglePlayer } from './components/SinglePlayer'
import { Home } from './components/Home'
import Styled from 'styled-components'

const Div = Styled.div`
  display: flex; 
  flex-direction: row; 
  background: lightgrey;
  max-width: 1000px;
  margin: 10px auto;
  flex-wrap: wrap;
  button{
    width: auto;
    height: auto;
  }
`

export class App extends React.Component {
  componentDidMount() {
    this.props.getPlayers()
  }

  render() {
    if (this.props.gettingPlayers === true) {
      return <h2>Getting Players</h2>
    }
    else
      return (
        
        <Div>
          <button onClick={this.props.getPlayers}>Get Players</button>
          <Div>
            
            
            <Route path='/' component={Home}/>
            
              {this.props.players.map(player => <Route exact path='/players/' render={(props) => <Players player={player} key={player.id} {...props} />} />)}
              {this.props.players.map(player => <Route exact path={`/singleplayer/${player.id}`} render={(props) => <SinglePlayer player={player} key={player.id} {...props} />} />)}
          </Div>
        </Div>
      )
  }
}

function mapStateToProps(state) {
  return {
    players: state.players,
    gettingPlayers: state.gettingPlayers,

  };
}
export default connect(
  mapStateToProps,
  { getPlayers, addPlayer },
)(App);