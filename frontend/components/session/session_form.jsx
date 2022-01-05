import React from 'react';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.nullUser;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    // componentDidMount() {
    //     this.props.clearErrors();
    // }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault()
        this.props.processForm(this.state)
          .then(() => this.props.history.replace('/'))
    }

    handleDemoUser(e) {
        e.preventDefault()
        const user = { email: 'demo@user.com', password: 'password' };
        (this.props.formType === 'Sign up') ? this.props.login(user) : this.props.processForm(user)
    }

    renderErrors() {
        return(
            <ul>
              {this.props.errors.map((error, i) => (
                <li key={`error-${i}`}>
                  {error}
                </li>
              ))}
            </ul>
          );
    }

    render() {
        const { formHeader, formType, text, link } = this.props;

        const nameFields = (formType === 'Sign up' ? (
        <>
          <label className='form-label'>
              <input type="text"
                     className='form-input'
                     value={this.state.firstname}
                     placeholder="First name"
                     onChange={this.update('firstname')}
              />
          </label>

          <label className='form-label'>
              <input type="text"
                     className='form-input'
                     value={this.state.lastname}
                     placeholder="Last name"
                     onChange={this.update('lastname')}
              />
          </label> 
        </>
        ) : "" )

        return(
          <div className="session-bg">
            <div className='session-form'>
              <div>
                <h2>{formHeader}</h2>
              </div>

              <div className='form-box'>
                <form onSubmit={this.handleSubmit} className="form">
                    {this.renderErrors()}
                    { nameFields }
                    <label className='form-label'>
                        <input type="email"
                          className='form-input'
                          value={this.state.email}
                          placeholder="Email"
                          onChange={this.update('email')}
                        />
                    </label>

                    <label className='form-label'>
                        <input type="password"
                          className='form-input'
                          value={this.state.password}
                          placeholder="Password"
                          onChange={this.update('password')}
                        />
                    </label>
                    <button className="session-submit">{formType}</button>
                </form>
              </div>

              <div className="alt-text">
                <p className="session-text">{text} {link}</p>
                <p className="session-text">Looking for an adventure? Log in as a <span className="demo-link" onClick={this.handleDemoUser}>demo user</span></p>
              </div>

            </div>
          </div>
        )
    }
}

export default SessionForm;