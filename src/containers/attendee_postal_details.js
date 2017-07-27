/**
 * TODO: This component renders the second data capture form
 */

import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types';
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { css, StyleSheet } from 'aphrodite';

import { dispatchForm, addPostalDetails } from '../actions/index'

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
  subText2:{
    fontSize: 13,
    textAlign: 'left',
    width: '80%',
    margin: 0,
    float: 'left'
  },
  input: {
    width: '100%',
    height: 40,
    padding: '0 10px',
    fontWeight: 'bold',
    color: '#2C40A2'
  },
  input2: {
    marginTop: 3,
    padding: '0 10px',
    display: 'inline-block',
    float: 'left'
  },
  optin_container: {
    marginTop: 10,
    width: '100%'
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

class AttendeePostalForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props){
    super(props);

      this.state ={
        postcode: '',
        checked: false
      }
  }

  onInputChange(e){
    this.setState ({
      postcode: e.target.value
    })
  }

  onCheckValueChange(e){
    this.setState ({
      checked: e.target.checked
    })
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.addPostalDetails(this.state.postcode, this.state.checked)
    this.props.dispatchForm(this.props.user.email, 'registrationEmail', {name: this.props.user.name})
    this.context.router.push('Completed')
  }

  render(){
    return (
      <div className= {css(styles.container)}>
        <form onSubmit={this.onSubmit.bind(this)} className= {css(styles.form)}>
          <p className={css(styles.subText)}>{this.props.user.name}, please enter your Postal Details below</p>
            <input  type="text"
                    className={css(styles.input)}
                    placeholder="Enter your postcode here"
                    value={this.state.postcode}
                    onChange={this.onInputChange.bind(this)}
                  />

          <div className={css(styles.optin_container)}>
            <p className={css(styles.subText2)}>Tick this box to recieve marketing emails</p>
              <input  type ="checkbox"
                      className={css(styles.input2)}
                      value={this.state.checked}
                      onChange={this.onCheckValueChange.bind(this)}
                    />
          </div>

          <button type="submit" className={css(styles.button)}>Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.attendees.activeUser
  }
}

export default connect(mapStateToProps, { dispatchForm, addPostalDetails })(AttendeePostalForm)
