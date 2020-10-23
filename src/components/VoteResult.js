import React, { Component } from 'react'
import  { Container } from 'reactstrap'

const mychoiceApiURL = 'https://mychoice-api.herokuapp.com/api/vote';

class VoteResult extends Component {
    constructor(props) {
        super(props)
        this.state = {
            voteData: []
        }
    }
    componentDidMount() {
        (async () => {
            try {
                const response = await fetch(mychoiceApiURL)
                const voteData = await response.json()
                this.setState({ voteData })
            } catch (e) {
                console.log(e)
            }
        })()
    }
    render() {
        return (
            <Container>
                <p>Presidential Results</p>
                {
                    this.state.voteData.map(({ _id, name, votes }) => (
                        <p key={_id}>{name}: {votes}</p>
                    ))
                }
            </Container>
        )
    }
}

export default VoteResult