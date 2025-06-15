/**
 * Music database with song recommendations for different emotions
 * JavaScript implementation of the TypeScript database from the original project
 */

export const musicDatabase = {
  sad: [
    {
      id: '1',
      title: 'Weightless',
      artist: 'Marconi Union',
      duration: '8:10',
      coverUrl: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '2',
      title: 'River',
      artist: 'Eminem ft. Ed Sheeran',
      duration: '3:40',
      coverUrl: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '3',
      title: 'Mad World',
      artist: 'Gary Jules',
      duration: '3:07',
      coverUrl: 'https://images.pexels.com/photos/1619654/pexels-photo-1619654.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  happy: [
    {
      id: '4',
      title: 'Good as Hell',
      artist: 'Lizzo',
      duration: '2:39',
      coverUrl: 'https://images.pexels.com/photos/1677710/pexels-photo-1677710.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '5',
      title: 'Uptown Funk',
      artist: 'Mark Ronson ft. Bruno Mars',
      duration: '4:30',
      coverUrl: 'https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '6',
      title: 'Happy',
      artist: 'Pharrell Williams',
      duration: '3:53',
      coverUrl: 'https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  angry: [
    {
      id: '7',
      title: 'Breathe Me',
      artist: 'Sia',
      duration: '4:31',
      coverUrl: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '8',
      title: 'Calm Down',
      artist: 'Busta Rhymes',
      duration: '3:58',
      coverUrl: 'https://images.pexels.com/photos/1694900/pexels-photo-1694900.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  anxious: [
    {
      id: '9',
      title: 'Aqueous Transmission',
      artist: 'Incubus',
      duration: '7:49',
      coverUrl: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '10',
      title: 'Clair de Lune',
      artist: 'Claude Debussy',
      duration: '5:05',
      coverUrl: 'https://images.pexels.com/photos/1144176/pexels-photo-1144176.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  lonely: [
    {
      id: '11',
      title: 'Someone Like You',
      artist: 'Adele',
      duration: '4:45',
      coverUrl: 'https://images.pexels.com/photos/1789968/pexels-photo-1789968.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '12',
      title: 'The Sound of Silence',
      artist: 'Disturbed',
      duration: '4:08',
      coverUrl: 'https://images.pexels.com/photos/1644888/pexels-photo-1644888.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  tired: [
    {
      id: '13',
      title: 'Sunset Lover',
      artist: 'Petit Biscuit',
      duration: '3:56',
      coverUrl: 'https://images.pexels.com/photos/1834407/pexels-photo-1834407.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '14',
      title: 'Sleep on the Floor',
      artist: 'The Lumineers',
      duration: '3:31',
      coverUrl: 'https://images.pexels.com/photos/1021876/pexels-photo-1021876.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  calm: [
    {
      id: '15',
      title: 'Gymnopédie No.1',
      artist: 'Erik Satie',
      duration: '3:05',
      coverUrl: 'https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '16',
      title: 'Holocene',
      artist: 'Bon Iver',
      duration: '5:37',
      coverUrl: 'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ],
  neutral: [
    {
      id: '17',
      title: 'Intro',
      artist: 'The xx',
      duration: '2:07',
      coverUrl: 'https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: '18',
      title: 'Midnight City',
      artist: 'M83',
      duration: '4:03',
      coverUrl: 'https://images.pexels.com/photos/1434608/pexels-photo-1434608.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ]
};

/**
 * Get a recommended song based on the detected emotion
 * @param {string} emotion - The detected emotion
 * @returns {Object} - A song recommendation
 */
export const getRecommendedSong = (emotion) => {
  const songs = musicDatabase[emotion] || musicDatabase.neutral;
  const randomIndex = Math.floor(Math.random() * songs.length);
  return songs[randomIndex];
};
