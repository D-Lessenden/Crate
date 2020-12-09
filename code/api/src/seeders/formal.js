'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('surveys', [
      {
        type: 'bottom',
        image: 'public/images/survey/formal/mens_pants_formal.jpg',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'public/images/survey/formal/mens_shoes_formal.jpg',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: 'public/images/survey/formal/mens_top_formal.jpg',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'public/images/survey/formal/mens_watch_formal.jpg',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'full',
        image: 'public/images/survey/formal/mens_suit_formal.jpg',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'full',
        image: 'public/images/survey/formal/womans_dress_formal.png',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'public/images/survey/formal/womans_hat_formal.jpg',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'bottom',
        image: 'public/images/survey/formal/womans_pants_formal.jpg',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'public/images/survey/formal/womans_shoes_formal.jpeg',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: 'public/images/survey/formal/womans_top_formal.jpg',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'public/images/survey/formal/womans_watch_formal.png',
        score: [5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('surveys', null, {});
  }
}