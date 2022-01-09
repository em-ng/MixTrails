import React from 'react';

class TrailShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchTrail(this.props.match.params.trailId)
    }

    render() {
        return(
            <div>this is trails show page</div>
        )
    }
}

export default TrailShow;