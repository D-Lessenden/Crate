'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('surveys', [
      {
        type: 'bottom',
        image: 'code/api/public/images/survey/formal/mens_pants_formal.jpg',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'code/api/public/images/survey/formal/mens_shoes_formal.jpg',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: 'code/api/public/images/survey/formal/mens_top_formal.jpg',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'code/api/public/images/survey/formal/mens_watch_formal.jpg',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'full',
        image: 'code/api/public/images/survey/formal/mens_suit_formal.jpg',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'full',
        image: 'code/api/public/images/survey/formal/womans_dress_formal.png',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'code/api/public/images/survey/formal/womans_hat_formal.jpg',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'bottom',
        image: 'code/api/public/images/survey/formal/womans_pants_formal.jpg',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'code/api/public/images/survey/formal/womans_shoes_formal.jpeg',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: 'code/api/public/images/survey/formal/womans_top_formal.jpg',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: 'code/api/public/images/survey/formal/womans_watch_formal.png',
        score: [0, 5],
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('surveys', null, {});
  }
}