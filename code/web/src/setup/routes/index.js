// App Imports
import { APP_URL_API } from '../config/env'
import admin from './admin'
import crates from './crate'
import home from './home'
import product from './product'
import survey from './survey'
import user from './user'

// Combined routes
export const routes = Object.assign(admin, crates, home, product, survey, user)

// API Routes
export const routeApi = APP_URL_API

// Image
export const routeImage = APP_URL_API
