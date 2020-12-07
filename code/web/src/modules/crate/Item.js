// Imports
import React, { PureComponent } from 'react'                  // Frontend framwork
import PropTypes from 'prop-types'                            // Prop validating
import { connect } from 'react-redux'                         // Gives access to Redux store
import { Link, withRouter } from 'react-router-dom'           // Interaction with 'history' object

// UI Imports - These are all style-embedded HTML components
import Card from '../../ui/card/Card'
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env'               // This is the relative website path
import userRoutes from '../../setup/routes/user' // Displays the top buttons. Toggles if the user is authenticated or not
import { messageShow, messageHide } from '../common/api/actions'// This controls the pop-up message
import { create } from '../subscription/api/actions'            // This is our interaction with the server to post a new subscription

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)
    // isLoading controls the button disabled state. true corresponds to disabled
    this.state = {
      isLoading: false
    }
  }

  // this is the function that gets fired when the subscribe button is clicked
  onClickSubscribe = (crateId) => {
    // disable button
    this.setState({
      isLoading: true
    })

    // show pop up message
    this.props.messageShow('Subscribing, please wait...')

    // post to server.
    this.props.create({ crateId })
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          this.props.messageShow('Subscribed successfully.')

          // this navigates to the subscriptions page when successfully subscribing
          this.props.history.push(userRoutes.subscriptions.path)
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error subscribing to this crate. Please try again.')
      })
      // button is enabled again
      .then(() => {
        this.setState({
          isLoading: false
        })

        // after 5 seconds, if there are any messages, hide the message
        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      })
  }

  render() {
    const { id, name, description } = this.props.crate
    const { isLoading } = this.state

    return (
      <Card style={{ width: '18em', backgroundColor: white }}>
        <p style={{ padding: '2em 3em 0 3em' }}>
          <img src={`${ APP_URL }/images/crate.png`} alt={name} style={{ width: '100%' }}/>
        </p>

        <div style={{ padding: '1em 1.2em' }}>
          <H4 font="secondary" style={{ color: black }}>{name}</H4>

          <p style={{ color: grey2, marginTop: '1em' }}>{description}</p>

          <p style={{ textAlign: 'center', marginTop: '1.5em', marginBottom: '1em' }}>
            <Button
              theme="primary"
              onClick={this.onClickSubscribe.bind(this, id)}
              type="button"
              disabled={ isLoading }
            >
              <Icon size={1.2} style={{ color: white }}>add</Icon> Subscribe
            </Button>
          </p>
        </div>
      </Card>
    )
  }
}

// Component Properties
Item.propTypes = {
  crate: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

// Component State
// this is the Redux behavior
function itemState(state) {
  return {
    user: state.user
  }
}

// this 1.) attaches the Item compontent with a history object and then 2.) connects it to the Redux Store
export default connect(itemState, { create, messageShow, messageHide })(withRouter(Item))