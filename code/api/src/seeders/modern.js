'use strict';

const params = require('../config/params');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('surveys', [
      // Mens
      {
        type: 'bottom',
        image: '/images/survey/modern/mens_pants_modern.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/modern/mens_shoes_modern.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'full',
        image: '/images/survey/modern/mens_suit_modren.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: '/images/survey/modern/mens_top_modren.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/modern/mens_watch_modern.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      // Womens
      {
        type: 'full',
        image: '/images/survey/modern/woman_dress_modern.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/modern/woman_shoes_morden.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/modern/womans_hat_modern.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'bottom',
        image: '/images/survey/modern/womans_pants_modern.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: '/images/survey/modern/womans_top_modern.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/modern/womans_watch_modern.jpg',
        score: [5,0],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('surveys', null, {});
  }
}
