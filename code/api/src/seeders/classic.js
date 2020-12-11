'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('surveys', [
      {
        type: 'bottom',
        image: '/images/survey/classic/mens_pants_classic.jpeg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/classic/mens_shoes_classic.jpg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'full',
        image: '/images/survey/classic/mens_suit_classic.jpg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: '/images/survey/classic/mens_top_classic.jpg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/classic/mens_watch_classic.jpg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/classic/womans_hat_classic.jpg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'bottom',
        image: '/images/survey/classic/womans_pants_classic.jpg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'accessory',
        image: '/images/survey/classic/womans_shoes_classic.jpg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'top',
        image: '/images/survey/classic/womans_top_classic.jpg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        type: 'full',
        image: '/images/survey/classic/womens_dress_classic.jpg',
        score: [-5, 0],
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('surveys', null, {});
  }
}
