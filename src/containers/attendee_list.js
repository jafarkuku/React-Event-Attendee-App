/**
 * TODO: This component renders the list of users attending the event
 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { css, StyleSheet } from 'aphrodite';

import { fetchform } from '../actions/index'

const styles = StyleSheet.create({
  container: {
    height: '100%',
    margin: 0
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
  listContainer: {
    margin: '0 auto',
    marginTop: 60,
    padding: 0,
    maxWidth: '80%'
  },
  listItem: {
    borderRadius: '.25rem',
    marginBottom: 10,
    border: '1px solid #ddd',
    padding: '.75rem 1.25rem',
    display: 'block',
    textAlign: 'center',
    fontSize: 14
  }
})


class AttendeeList extends Component{

  renderList = () => {
    return this.props.attendees.guestList.map((list, i) => {
      return (
        <Link to='form' key={ i }>
          <li onClick ={() => this.props.fetchform(list)}
              className={css(styles.listItem)}> { list.name }
          </li>
        </Link>
      )
    })
  }

  render(){
    return (
      <div className={css(styles.container)}>
        <h3 className={css(styles.headerText)}> Please select your name from the list</h3>
        <ul className={css(styles.listContainer)} >
          {this.renderList()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    attendees: state.attendees
  }
}

export default connect(mapStateToProps, {fetchform})(AttendeeList)
