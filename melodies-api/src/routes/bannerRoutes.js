const express = require('express');
const router = express.Router();

const banners = [
    {
      image: 'https://res.cloudinary.com/da4y5zf5k/image/upload/v1751041272/Banner_jacy6d.png',
      title: 'Billie Eilish',
      description: 'You can have easy access to every song of Billie Eilish by clicking below.',
      buttons: [
        { label: 'Listen Now', type: 'primary' },
        { label: 'Follow', type: 'default' }
      ]
    },
    {
        image: 'https://res.cloudinary.com/da4y5zf5k/image/upload/v1751041272/Banner_jacy6d.png',
        title: 'The Weeknd',
      description: 'Dive into the dark pop world of The Weeknd — click to start listening.',
      buttons: [
        { label: 'Play Songs', type: 'primary' },
        { label: 'Follow', type: 'default' }
      ]
    },
    {
        image: 'https://res.cloudinary.com/da4y5zf5k/image/upload/v1751041272/Banner_jacy6d.png',
        title: 'Taylor Swift',
      description: 'Explore the storytelling magic of Taylor Swift’s discography.',
      buttons: [
        { label: 'Explore Albums', type: 'primary' },
        { label: 'Follow', type: 'default' }
      ]
    },
    {
        image: 'https://res.cloudinary.com/da4y5zf5k/image/upload/v1751041272/Banner_jacy6d.png',
        title: 'Drake',
      description: 'From rap to R&B — discover Drake’s top hits and albums.',
      buttons: [
        { label: 'Start Listening', type: 'primary' },
        { label: 'Follow', type: 'default' }
      ]
    }
  ];
  

router.get('/', (req, res) => {
  res.json(banners);
});

module.exports = router;
