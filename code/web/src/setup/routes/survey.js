// App Imports
import List from '../../modules/survey/Survey/List'

// Crate routes
export default {
  survey: {
    path: '/survey',
    component: List,
    auth: true
  }
}
