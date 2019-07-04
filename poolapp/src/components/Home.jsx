import React from 'react';
import Styled from 'styled-components';
import { Link } from 'react-router-dom';

const Form = Styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 40;
  border: 1px solid red;
  margin: 10px auto;
  padding: 10px;
  text-align: center;
  input{
    text-align: center;
  }
`
const Table = Styled.table`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}

`
export class Home extends React.Component {

    changeHandler = (event) => {
        event.preventDefault()
        const name = event.target['name'].value
        const age = event.target['age'].value
        const leaguePosition = event.target['League Position'].value

        const newPlayer = {
            name: name,
            age: age,
            leaguePosition: leaguePosition
        }
        console.log(newPlayer)
        this.props.addPlayer(newPlayer)
        
    }
    render() {
        return (
            <div>
                <div>
                    <nav>
                        <Link to='/players/'>Players</Link>
                        <Link to='/'>Home</Link>
                    </nav>
                </div>
                <Table>
                    <tr>
                        <th>Player</th>
                        <th>Last Played</th>
                        <th>6 Week Deadline</th>
                    </tr>
                    <tr>
                        <td>Andreas Hadjilouca</td>
                        <td>27/7/2019</td>
                        <td>07/09/2019</td>
                    </tr>
                    <tr>
                        <td>James Brennan</td>
                        <td>27/7/2019</td>
                        <td>07/09/2019</td>
                    </tr>
                    <tr>
                        <td>Craig Reynolds</td>
                        <td>19/06/2019</td>
                        <td>31/07/2019</td>
                    </tr>
                    <tr>
                        <td>Danny Evans</td>
                        <td>1/7/2019</td>
                        <td>12/8/2019</td>
                    </tr>
                    <tr>
                        <td>Ian Eldridge</td>
                        <td>1/7/2019</td>
                        <td>12/8/2019</td>
                    </tr>
                    <tr>
                        <td>Neil Pugh</td>
                        <td>18/6/2019</td>
                        <td>30/7/2019</td>
                    </tr>
                </Table>
                <Form onSubmit={this.changeHandler}>
                    <input
                        type='text'
                        name='name'
                        placeholder='name'
                    />
                    <input
                        type='number'
                        name='age'
                        placeholder='age'
                    />
                    <input
                        type='number'
                        name='League Position'
                        placeholder='League Position'
                    />
                    <input
                        type='text'
                        name='nickname'
                        placeholder='nickname'
                    />
                    <input
                        type='text'
                        name='cue'
                        placeholder='cue'
                    />
                    <button>Add Player</button>
                </Form>
            </div>
        
        )
    }
}