/**
 * TODO: This is the main app that render all the components
 */

import React, { Component } from 'react';
import { render }  from 'react-dom';

import AttendeeList from '../containers/attendee_list'
import AttendeeForm from '../containers/attendee_form'
import { css, StyleSheet } from 'aphrodite';

const styles = StyleSheet.create({
  EventApp: {
    postion: 'relative',
    height: 500,
    width: 380,
    margin: 0,
    backgroundColor: 'white',
    borderRadius: 10
  },
  container:{
    height: '90%',
    width: 380,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer:{
    postion: 'absolute',
    display: 'block',
    textAlign: 'center',
    bottom: 0,
    fontSize: 12
  }
})

export default class App extends Component {
  render(){
    return (
      <div className={css(styles.EventApp)}>
        <div className={css(styles.container)}>
          {this.props.children}
        </div>
        <p className={css(styles.footer)}>Form created by Gbolade Kuku</p>
      </div>
    )
  }
}
