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
                    {this.renderErrors()}
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
                <p></p>
                <em>Looking for an adventure? Log in as a <span onClick={this.handleDemoUser}>demo user</span></em>
            </div>
        )
    }
}

export default SessionForm;