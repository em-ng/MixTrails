import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.nullUser;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
          .then(() => this.props.history.replace('/'))
    }

    // renderErrors() {
    //     debugger
    //     const errors = this.props.errors;
    //     console.log(errors)
    // }

    render() {
        const { formHeader, formType } = this.props;

        const nameFields = (formType === 'Sign up' ? (
        <div>
          <label className='form-input'>
              <input type="text"
                     value={this.state.firstname}
                     placeholder="First name"
                     onChange={this.update('firstname')}
              />
          </label>

          <label className='session-input'>
              <input type="text"
                     value={this.state.lastname}
                     placeholder="Last name"
                     onChange={this.update('lastname')}
              />
          </label> 
        </div>
        ) : "" )

        return(
            <div className='session-form'>
                <h2>{formHeader}</h2>
                <form onSubmit={this.handleSubmit}>
                    { nameFields }
                    <label className='session-input'>
                        <input type="email"
                          value={this.state.email}
                          placeholder="Email"
                          onChange={this.update('email')}
                        />
                    </label>

                    <label className='session-input'>
                        <input type="password"
                          value={this.state.password}
                          placeholder="Password"
                          onChange={this.update('password')}
                        />
                    </label>
                    <button className="session-submit">{formType}</button>
                </form>
            </div>
        )
    }
}

export default SessionForm;