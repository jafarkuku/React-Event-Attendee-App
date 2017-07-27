/**
 * TODO: This component renders the final message and console.logs the saved details
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  headerText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#403B3B'
  }
})

class Final_Component extends Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props){
    super(props)
    console.log (
                  '\n', 'Saved User Details', '\n',
                  '\n', 'Name : ',this.props.user.activeUser.name , '\n',
                  'Email :', this.props.user.activeUser.email, '\n',
                  'Post Code :', this.props.user.postdetails.postcode, '\n',
                  'Opted in :', this.props.user.postdetails.opt_in
               )
  }

  render(){
    {setTimeout(() => this.context.router.push('/'), 3000)}
    return(
      <div>
        <h3 className={css(styles.headerText)}>Thanks, {this.props.user.activeUser.name} !</h3>
        <p>Thanks for signing up, we will be in touch soon</p>
      </div>
    )
  }
}

  const mapStateToProps = state => {
    console.log('Last state', state)
    return{
      user: state.attendees
    }
  }

export default connect(mapStateToProps)(Final_Component)
