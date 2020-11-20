'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('theme', null, {truncate: true, cascade: true, restartIdentity: true});
    
    //themes
    const bulkthemes = await queryInterface.bulkInsert('theme', [
      {
        name: 'Game of Thrones',
        image: '../images/got.jpg',
        
      },

      {
        name: 'Harry Potter',
        image: '../images/hp.jpg',
        
      },

      {
        name: 'Lord of the Rings',
        image: '../images/lotr.jpg',
        
      },

      {
        name: 'Star Wars',
        image: '../images/sw.jpg',
        
      },

      {
        name: 'Ferris Beullers Day Off',
        image: '../images/fbdo.jpg',
        
      },
    ], {returning: true});
    
    //activities
    const bulkacts = await queryInterface.bulkInsert('activity', [
      {
        title: 'Travel to Alaska',
        description: 'Take a cruise beyond the wall to the frozen north, where adventure awaits.',
        image: '',
        
      },
      {
        title: 'Axe Throwing',
        description: 'Toss some axes at a wall–like darts, but with axes.',
        image: '',
        
      },
      {
        title: 'Medeival Fair',
        description: 'Visit the lords and ladies of the realm and perhaps a blacksmith.',
        image: '',
        
      },
      {
        title: 'Buy a Sword',
        description: 'Maybe from that blacksmith at the fair.',
        image: '',
        
      },
      {
        title: 'Ale!',
        description: 'Nothing finishes a day quite like a tankard of ale, though underage adventurers may partake of rootbeer without shame.',
        image: '',
        
      },
      {
        title: 'Quiditch',
        description: 'For those who cannot take to the sky, Muggle Quiditch is a brillian diversion, and still lets you ride a broom.',
        image: '',
        
      },
      {
        title: 'Science Experiment',
        description: 'I mean, Alchemy. Try an alchemy experiment',
        image: '',
        
      },
      {
        title: 'Visit Your Patronus',
        description: 'Take a trip to the zoo to find your patronus.',
        image: '',
       
      },
      {
        title: 'Hop a Flight',
        description: 'You may not be able to travel by broom, but you can definitely fly on a plane.',
        image: '',
        
      },
      {
        title: 'Visit the Woods',
        description: 'The woods hold wonders unknown and untold for those brave enough.',
        image: '',
        
      },
      {
        title: 'Travel to the Mountains',
        description: 'There are few spots so open to adventure and mystery as the mountains.',
        image: '',
        
      },
      {
        title: 'Take a Long Hike',
        description: 'Really, go the scenic route.',
        image: '',
        
      },
      {
        title: 'Visit an Active Volcano',
        description: 'Surely, there can be no better place to loose something.',
        image: '',
        
      },
      {
        title: 'Eat a Second Lunch',
        description: 'Stop and enjoy yourself. Every adventure needs a second lunch.',
        image: '',
        
      },
      {
        title: 'Plan a trip to New Zealand',
        description: 'Consider visiting its magical vistas and, of course, Hobbitton.',
        image: '',
        
      },
      {
        title: 'Dress a Baby in Green',
        description: 'Just like baby Yoda.',
        image: '',
        
      },
      {
        title: 'Build a Robot',
        description: 'Make your own little droid.',
        image: '',
        
      },
      {
        title: 'Challenge a Friend to a Duel',
        description: 'Lightsabers not necessary.',
        image: '',
        
      },
      {
        title: 'Meditate Like a Jedi',
        description: 'Let the Force guide your thoughts in quiet contemplation.',
        image: '',
        
      },
      {
        title: 'Hone your qi.',
        description: 'Perhaps lift an X-Wing you cannot, but you can learn to feel the Force.',
        image: '',
        
      },
      {
        title: 'Go to a Baseball Game',
        description: 'See the Cubs at Wrigley Field, if you can.',
        image: '',
        
      },
      {
        title: 'Visit an Art Museum',
        description: 'Let yourself be drawn into the paintings and artefacts around you.',
        image: '',
        
      },
      {
        title: 'Hang Out at a Pool',
        description: 'Go swimming. Stay alfoat.',
        image: '',
        
      },
      {
        title: 'Eat at a Fancy Restaurant',
        description: 'Enjoy a high class meal dressed in your favorite bomber, t-shirt, or hockey jersey.',
        image: '',
        
      },
      {
        title: 'March in a Parade',
        description: 'If you can ride a float, so much the better.',
        image: '',
        
      },
      {
        title: 'Karaoke',
        description: 'Sing your heart out: Twist and Shout.',
        image: '',
        
      },
    ], {returning: true});
  

    const bulkthemeAct = await queryInterface.bulkInsert('themeActs', [
      {
        themeId: bulkthemes[0].id,
        actId: bulkacts[0].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        actId: bulkacts[1].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        actId: bulkacts[2].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        actId: bulkacts[3].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        actId: bulkacts[4].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[0].id,
        actId: bulkacts[5].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        actId: bulkacts[6].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        actId: bulkacts[7].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        actId: bulkacts[8].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        actId: bulkacts[9].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[1].id,
        actId: bulkacts[10].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        actId: bulkacts[11].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        actId: bulkacts[12].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        actId: bulkacts[13].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        actId: bulkacts[14].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[2].id,
        actId: bulkacts[15].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        actId: bulkacts[16].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        actId: bulkacts[17].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        actId: bulkacts[18].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        actId: bulkacts[19].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[3].id,
        actId: bulkacts[20].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        actId: bulkacts[21].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        actId: bulkacts[22].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        actId: bulkacts[23].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        actId: bulkacts[24].id,
        createdAt: new Date(),
    updatedAt: new Date()
      },
      {
        themeId: bulkthemes[4].id,
        actId: bulkacts[25].id,
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
