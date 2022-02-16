import React from 'react';
import ReactStars from 'react-rating-stars-component';
// import Calendar from 'react-calendar';


class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.review;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.trailId !== prevProps.match.params.trailId) {
            this.props.fetchTrail(this.props.match.params.trailId)
        }
    }

    update(field) {
        // return e => {
        //     debugger
        //     this.setState({ [field]: e.currentTarget.value })
        //     console.log(e.currentTarget.value)
        //     console.log(e.currentTarget)
        // }

        return (e) => {
            const newState = this.state;
            newState[field] = field === "rating" ? e : e.target.value;
            this.setState(newState);
        };
    }

    handleSubmit(e) {
        e.preventDefault();

        // this.props.action(this.state)
        if (this.props.formType === "create") {
            this.props.action(this.state).then(resp => this.props.fetchTrail(resp.review.trail_id))
        } else {
            this.props.action(this.state).then(resp => this.props.fetchTrail(resp.review.trail_id))
        }
        this.props.closeModal()
    }

    // componentWillUnmount(){
    //     this.setState(this.props.review)   
    // }

    render() {
        const { trail } = this.props;
        debugger
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="close-x" onClick={this.props.closeModal}>&#10006;</div>
                <h1>{trail.name}</h1>
                
                <div>
                    {/* <Calendar onChange={this.update('activity_date')} value={this.state.activity_date}/> */}
                    <input
                        type="date"
                        onChange={this.update('activity_date')}
                        value={this.state.activity_date}
                    />
                    <ReactStars
                        count={5}
                        size={40}
                        isHalf={false}
                        edit={true}
                        onChange={this.update('rating')}
                        value={this.state.rating}
                    />
                </div>
                <textarea
                    placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect."
                    value={this.state.review_text}
                    onChange={this.update('review_text')}
                />
                {this.state.rating ? (
                    <input type="submit" value="Post"/>
                ) : (
                    <input type="submit" value="Post" disabled/>
                )}
            </form>
        )
    }
}

export default ReviewForm;