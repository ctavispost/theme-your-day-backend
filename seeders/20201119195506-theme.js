'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('themes', null, {truncate: true, cascade: true, restartIdentity: true});
    
    //themes
    const bulkthemes = await queryInterface.bulkInsert('themes', [
      {
        name: 'Game of Thrones',
        image: '../images/got.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Harry Potter',
        image: '../images/hp.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Lord of the Rings',
        image: '../images/lotr.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Star Wars',
        image: '../images/sw.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Ferris Beullers Day Off',
        image: '../images/fbdo.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true});
    
    //activities
    const bulkacts = await queryInterface.bulkInsert('activities', [
      {
        title: 'Travel to Alaska',
        description: 'Take a cruise beyond the wall to the frozen north, where adventure awaits.',
        image: '',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Axe Throwing',
        description: 'Toss some axes at a wall–like darts, but with axes.',
        image: '',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Medeival Fair',
        description: 'Visit the lords and ladies of the realm and perhaps a blacksmith.',
        image: '',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Buy a Sword',
        description: 'Maybe from that blacksmith at the fair.',
        image: '',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Ale!',
        description: 'Nothing finishes a day quite like a tankard of ale, though underage adventurers may partake of rootbeer without shame.',
        image: '',
        themeId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Quiditch',
        description: 'For those who cannot take to the sky, Muggle Quiditch is a brillian diversion, and still lets you ride a broom.',
        image: '',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Science Experiment',
        description: 'I mean, Alchemy. Try an alchemy experiment',
        image: '',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Visit Your Patronus',
        description: 'Take a trip to the zoo to find your patronus.',
        image: '',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hop a Flight',
        description: 'You may not be able to travel by broom, but you can definitely fly on a plane.',
        image: '',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Visit the Woods',
        description: 'The woods hold wonders unknown and untold for those brave enough.',
        image: '',
        themeId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Travel to the Mountains',
        description: 'There are few spots so open to adventure and mystery as the mountains.',
        image: '',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Take a Long Hike',
        description: 'Really, go the scenic route.',
        image: '',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Visit an Active Volcano',
        description: 'Surely, there can be no better place to loose something.',
        image: '',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Eat a Second Lunch',
        description: 'Stop and enjoy yourself. Every adventure needs a second lunch.',
        image: '',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Plan a trip to New Zealand',
        description: 'Consider visiting its magical vistas and, of course, Hobbitton.',
        image: '',
        themeId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Dress a Baby in Green',
        description: 'Just like baby Yoda.',
        image: '',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Build a Robot',
        description: 'Make your own little droid.',
        image: '',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Challenge a Friend to a Duel',
        description: 'Lightsabers not necessary.',
        image: '',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Meditate Like a Jedi',
        description: 'Let the Force guide your thoughts in quiet contemplation.',
        image: '',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hone your qi.',
        description: 'Perhaps lift an X-Wing you cannot, but you can learn to feel the Force.',
        image: '',
        themeId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Go to a Baseball Game',
        description: 'See the Cubs at Wrigley Field, if you can.',
        image: '',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Visit an Art Museum',
        description: 'Let yourself be drawn into the paintings and artefacts around you.',
        image: '',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Hang Out at a Pool',
        description: 'Go swimming. Stay alfoat.',
        image: '',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Eat at a Fancy Restaurant',
        description: 'Enjoy a high class meal dressed in your favorite bomber, t-shirt, or hockey jersey.',
        image: '',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'March in a Parade',
        description: 'If you can ride a float, so much the better.',
        image: '',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Karaoke',
        description: 'Sing your heart out: Twist and Shout.',
        image: '',
        themeId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {returning: true});
  

    const bulkthemeAct = await queryInterface.bulkInsert('themeActs', [
      {
        themeId: bulkthemes[0].id,
        activityId: bulkacts[0].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        activityId: bulkacts[1].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        activityId: bulkacts[2].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        activityId: bulkacts[3].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        activityId: bulkacts[4].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        activityId: bulkacts[5].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        activityId: bulkacts[6].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        activityId: bulkacts[7].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        activityId: bulkacts[8].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        activityId: bulkacts[9].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        activityId: bulkacts[10].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        activityId: bulkacts[11].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        activityId: bulkacts[12].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        activityId: bulkacts[13].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        activityId: bulkacts[14].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        activityId: bulkacts[15].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        activityId: bulkacts[16].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        activityId: bulkacts[17].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        activityId: bulkacts[18].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        activityId: bulkacts[19].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        activityId: bulkacts[20].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        activityId: bulkacts[21].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        activityId: bulkacts[22].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        activityId: bulkacts[23].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        activityId: bulkacts[24].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        activityId: bulkacts[25].id,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      ], {returning: true});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};