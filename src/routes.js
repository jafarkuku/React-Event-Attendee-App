import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/app'
import AttendeeList from './containers/attendee_list'
import AttendeeForm from './containers/attendee_form'
import AttendeePostalForm from './containers/attendee_postal_details'
import Final_Component from './containers/completion'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={AttendeeList} />
    <Route path="form" component={AttendeeForm} />
    <Route path="postal-details" component={AttendeePostalForm} />
    <Route path="completed" component={Final_Component} />
  </Route>
)
