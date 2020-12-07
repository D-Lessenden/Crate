// App Imports
import models from '../../setup/models'

// Get all products
export async function getItems(parentValue, { type }) {
  return await models.Survey.findAll({ where: { type } })
}
