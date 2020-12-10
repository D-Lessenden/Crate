// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

// UI Imports
import Card from '../../../ui/card/Card'
import H4 from '../../../ui/typography/H4'
import Tile from '../../../ui/image'
import { white, grey2, black, primary, primaryAccent } from '../../../ui/common/colors'

// App Imports
import { APP_URL } from '../../../setup/config/env'
import userRoutes from '../../../setup/routes/user'
import { updateSelectedItems } from '../api/actions'

// Component
class Item extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      selected: false
    }
  }

  handleItemClick = () => {
    this.setState({ selected: !this.state.selected });
    updateStoredItems(this.props.item, this.state.selected)
  }

  render() {
    return (
      <img
        src={this.props.item.image}
        alt={this.props.item.image}
        style={{
          height: '5em',
          width: '5em',
          borderStyle: 'solid',
          borderWidth: '0.5em',
          borderColor: this.state.selected ? primaryAccent : primary
        }}
        onClick={this.updateStoredItems}>
      </img>
    )
  }
}

function itemState(state) {
  return {
    user: state.user
  }
}

export default connect(itemState)(withRouter(Item))
