// This file is utilized to boot up a server when npm start is ran from terminal 
// App Imports
import { PORT, NODE_ENV } from '../config/env'

// Start server
export default function (server) {
  console.info('SETUP - Starting server..')

  server.listen(PORT, (error) => {
    if (error) {
      console.error('ERROR - Unable to start server.')
    } else {
      console.info(`INFO - Server started on http://localhost:${ PORT } [${ NODE_ENV }]`)
    }
  })
}
