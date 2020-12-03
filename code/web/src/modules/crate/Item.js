// Imports
// This is for a single item 
import React, { PureComponent } from 'react' //imports react and PureComponent
import PropTypes from 'prop-types' //to vaildate typing for the props 
import { connect } from 'react-redux' //connects the redux store 
import { Link, withRouter } from 'react-router-dom' 
/* link does not seem to be used right 
now, withRouter lets you use the histoty object */

// UI Imports
// Imports the style embedded HTML elemtents 
import Card from '../../ui/card/Card' 
import Button from '../../ui/button/Button'
import H4 from '../../ui/typography/H4'
import Icon from '../../ui/icon'
import { white, grey2, black } from '../../ui/common/colors'

// App Imports
import { APP_URL } from '../../setup/config/env' // The root path
import userRoutes from '../../setup/routes/user' // Has the routing objects for the specific user path 
import { messageShow, messageHide } from '../common/api/actions' //are action that show the pop up message confirming subscribe
import { create } from '../subscription/api/actions' // return a distpatch callback funtion that post the crate using Axios 

// Component
//PureComponent are class based componets that can give a speed boost, minmize the rerender amout of a componet
class Item extends PureComponent {

  constructor(props) {
    super(props)
    //the super might be coming as deprected due to the PureComponent
    this.state = {
      isLoading: false // controlls the button disabled state 
    }
  }


  onClickSubscribe = (crateId) => {
    this.setState({
      isLoading: true //disabling the button via setting to true
    })
    // invokes messageShow
    this.props.messageShow('Subscribing, please wait...')
    // invokes the create action to post a crate to the API 
    this.props.create({ crateId })
      .then(response => {
        if (response.data.errors && response.data.errors.length > 0) {
          this.props.messageShow(response.data.errors[0].message)
        } else {
          this.props.messageShow('Subscribed successfully.')

          this.props.history.push(userRoutes.subscriptions.path)
        }
      })
      .catch(error => {
        this.props.messageShow('There was some error subscribing to this crate. Please try again.') 
      })// provides error handling
      .then(() => {
        this.setState({
          isLoading: false 
        }) //enables the button 

        window.setTimeout(() => {
          this.props.messageHide()
        }, 5000)
      }) //hides the loading message after 5 seconds 
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
// itemState is used in connect that is the behavior of the redux, sets the state 
function itemState(state) {
  return {
    user: state.user
  }
}

// mapStateToProps === itemState and mapDispatchToProps === { create, messageShow, messageHide } 
// withRouter is for the history object 
export default connect(itemState, { create, messageShow, messageHide })(withRouter(Item))
