import React from 'react';

class ReviewForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            review: this.props.review
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit() {
        this.props.action(this.state)
    }

    render() {
        const { trail } = this.props;
        return(
            <form onSubmit={this.handleSubmit}>
                <h1>{trail.name}</h1>
                <p>Star Rating</p>
                <textarea
                    placeholder="Give back to the community. Share your thoughts about the trail so others know what to expect."
                    value={this.state.review_text}
                    onChange={this.update('review_text')}
                />
                <input type="submit" name="Post"/>
            </form>
        )
    }
}

export default ReviewForm;