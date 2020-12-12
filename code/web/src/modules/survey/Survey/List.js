// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// UI Imports
import Button from '../../../ui/button/Button'
import Card from '../../../ui/card/Card'
import { Grid, GridCell } from '../../../ui/grid'
import { H3, H4 } from '../../../ui/typography/'
import Tile from '../../../ui/image'
import { white, grey, grey2, black, primary, primaryAccent } from '../../../ui/common/colors'

// App Imports
import { APP_URL } from '../../../setup/config/env'
import Loading from '../../common/Loading'
import EmptyMessage from '../../common/EmptyMessage'
import Item from './Item.js'
import surveyRoutes from '../../../setup/routes/survey'
import { messageShow, messageHide } from '../../common/api/actions'
import { getSurveyItems } from '../api/actions'
import { setStyle } from '../../user/api/actions'

// Component
class List extends PureComponent {

  // Runs on server only for SSR
  static fetchData({ store }) {
    return store.dispatch(getSurveyItems('accessory'))
  }

  // Runs on client only
  componentDidMount() {

    // HERE IS THE PROBLEM with test. 
    // I'm assuming map dispatch to props happens before the mock.
    // If I remove `this.props.` here the test runs but our functionality breaks
    // because it isn't connected to redux.
    this.props.getSurveyItems('accessory')
    this.props.setStyle('incomplete')
  }

  render() {
    return (
      <div>
        {/* SEO */}
        <Helmet>
          <title>Lets get to know each other! - Crate</title>
        </Helmet>

        {/* Top title bar */}
        <Grid style={{ backgroundColor: grey }}>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H3 font="secondary">Pick the items you really like!</H3>

            <p style={{ marginTop: '1em', color: grey2 }}>You can choose as many as you like. Please choose at least one.</p>
          </GridCell>
        </Grid>

        {/* Crate list */}
        <Grid>
          <GridCell>
            {
              this.props.surveyItems.isLoading
                ? <Loading/>
                : this.props.surveyItems.surveyItems.length > 0
                  ? this.props.surveyItems.surveyItems.map((item, i) => (
                    <div
                      key={'item#'+i+'survey#'+this.props.match.params.page}
                      style={{ margin: '2em', float: 'left' }}>
                      <Item item={item}/>
                    </div>
                  ))
                  : <EmptyMessage message="Something went wrong. Please go back and try again!" />
            }
          </GridCell>
        </Grid>

        <Grid justifyCenter={true}>
          <GridCell justifyCenter={true} style={{ padding: '2em', width: "50%"}}>
            <Link to={surveyRoutes.survey.path( parseInt(this.props.match.params.page) - 1 )}>
              <Button type="button" theme="secondary" disabled={this.props.match.params.page === '1'}>Back</Button>
            </Link>
          </GridCell>

          <GridCell justifyRight={true} style={{ padding: '2em'}}>
            <Link to={surveyRoutes.survey.path( parseInt(this.props.match.params.page) + 1 )}>
              <Button type="button" theme="secondary" disabled={false}>Next</Button>
            </Link>
          </GridCell>
        </Grid>
      </div>
    )
  }
}

// Component Properties
List.propTypes = {
  surveyItems: PropTypes.object.isRequired,
  getSurveyItems: PropTypes.func.isRequired
}

// Component State
function listState(state) {
  return {
    surveyItems: state.surveyItems
  }
}

export default connect(listState, { getSurveyItems, setStyle })(withRouter(List))
