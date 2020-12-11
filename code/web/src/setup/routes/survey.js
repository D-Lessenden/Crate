// App Imports
import List from '../../modules/survey/Survey/List'

// Crate routes
export default {
  survey: {
    path: (page = ':page') => (`/survey/${ page }`),
    component: List,
    auth: true
  }
}
