// App Imports
import Result from '../../modules/survey/Result/Result'

// Crate routes
export default {
  result: {
    path: '/result',
    component: Result,
    auth: true
  }
}
