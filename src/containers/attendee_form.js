/**
 * TODO: This component renders the first data capture form
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { css, StyleSheet } from 'aphrodite';

import { sendEmail, updateEmail } from '../actions/index'

const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    margin: 0
  },
  form: {
    height: '100%',
    margin: 0,
    padding: '30 0',
    textAlign: 'center'
  },
  headerText: {
    alignSelf: 'flex-start',
    fontSize: 20,
    textAlign: 'center',
    width: '80%',
    margin: '20 auto',
    padding: 0,
    paddingTop: 10,
    color: '#403B3B'
  },
  subText:{
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    padding: '0 10px',
    fontWeight: 'bold',
    color: '#2C40A2'
  },
  button:{
    width: '100%',
    height: 40,
    color: 'white',
    backgroundColor: '#2C40A2',
    border: 'none',
    marginTop: 10
  }
})

class AttendeeForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props){
    super(props);

    this.state = {
      email: props.user.email,
      name: props.user.name
    }

    this.onInputChange = this.onInputChange.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onInputChange(e){

    this.setState ({
      email: e.target.value
    })
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.updateEmail(this.state.name, this.state.email)
    this.context.router.push('postal-details')
  }

  render(){
    if(!this.props.user){
      return <div>Select your name to get started.</div>
    }

    const { fields: { email } } = this.props;

    return (
      <div className= {css(styles.container)}>
        <form onSubmit={this.onFormSubmit} className= {css(styles.form)}>
          <h3>Hi {this.state.name}</h3>
          <p className={css(styles.subText)}>Please confirm your email below </p>
          <input  type='text'
                  className={css(styles.input)}
                  placeholder="Enter your email here"
                  value={this.state.email}
                  onChange={this.onInputChange}
          />
          <div className="text-help">{email.errors}</div>
          <span>
            <button type="submit" className={css(styles.button)}>Proceed</button>
          </span>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user : state.active_user
  }
}

export default reduxForm({
  form: 'registrationEmail',
  fields: ['email']
}, mapStateToProps, { sendEmail, updateEmail } )(AttendeeForm)
