'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('surveys', [
      {
        type: 'bottom',
        image: '/images/survey/casual/mens_pants_casual.jpg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/casual/mens_shoes_casual.jpg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'full',
        image: '/images/survey/casual/mens_suit_casual.jpg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: '/images/survey/casual/mens_top_casual.jpg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/casual/mens_watch_casual.jpg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'full',
        image: '/images/survey/casual/woman_dress_casual.jpg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/casual/woman_shoes_casual.jpeg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/casual/womans_hat_casual.jpg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'bottom',
        image: '/images/survey/casual/womans_pants_casual.jpg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: '/images/survey/casual/womans_top_casual.jpg',
        score: [0, -5],
        createdAt: new Date(),
        updatedAt: new Date()
      }
      ], {})
    },

    down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('surveys', null, {});
    }
  }
