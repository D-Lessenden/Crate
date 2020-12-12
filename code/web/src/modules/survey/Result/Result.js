// Imports
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'

// UI Imports
import H2 from '../../../ui/typography/H2'
import Loading from '../../common/Loading'
import Button from '../../../ui/button/Button'

import { APP_URL } from '../../../setup/config/env'


//Images
const casualMen = '/images/Survey/casual_man.png'
const casualWoman = '/images/Survey/casual_woman.png'
const classicMen = '/images/Survey/classic_man.png'
const classicWoman = '/images/Survey/classic_woman.png'
const formalMen = '/images/Survey/formal_man.png'
const formalWoman = '/images/Survey/formal_woman.png'
const modernMen = '/images/Survey/modern_man.png'
const modernWoman = '/images/Survey/modern_woman.png'

//confort and time style comofrt is on the Y axis
const selectResult = ([x, y]) => {
  let resultY, resultX
  if(y < 0 ){
   resultY =  {
      imageURL:modernMen,
      title: "Modern",
    }
  } else {
    resultY = {
      imageURL:classicWoman,
      title: "Classic",
    }
  }
  if (x < 0){
    resultX =  {
      imageURL:formalWoman,
      title: "Formal",
    }
  } else {
    resultX =  {
      imageURL:casualMen,
      title: "Casual",
    }
  }
  return [resultY, resultX]
}

// Component
class Result extends PureComponent {

  constructor(props) {
    super(props)

    this.state = {
      hasRedux: false
    }
  }
  // Runs on client only
  componentDidMount = () => {
    const score = Object.values(this.props.selectedItems.selectedItems).reduce( (score, pageArr) => {
      let subScore = pageArr.reduce( (subScore, { score }) => {
        subScore[0] += score[0]
        subScore[1] += score[1]
        return subScore
      }, [0,0])
      score[0] += subScore[0]
      score[1] += subScore[1]
      return score
    }, [0,0])
    console.log(score)
    const result = selectResult(score)
    this.setState({
      hasRedux: true,
      result
    })
  }

  render() {
    return (
      <section>

        <Helmet>
          <title>Lets get to know each other! - Crate</title>
        </Helmet>
        { this.state.hasRedux
          ? (
              <>
                <H2>Your Style is {this.state.result[0].title} and {this.state.result[1].title}</H2>
                <img src={APP_URL + this.state.result[0].imageURL} style={{height:"100%", width:"auto"}} />
                <img src={APP_URL + this.state.result[1].imageURL} style={{height:"100%", width:"auto"}} />
                <Button>View Your Subscriptions</Button>
              </>
            )
          : <Loading />
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedItems: state.selectedItems,
  }
}
export default connect(mapStateToProps)(withRouter(Result))
