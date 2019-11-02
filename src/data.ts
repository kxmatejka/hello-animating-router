interface Planet {
  title: string
  img: string
}

interface Planets {
  [key: string]: Planet
}

export const data: Planets = {
  mercury: {
    title: 'Mercury',
    img: '/static/mercury.jpg'
  },
  venus: {
    title: 'Venus',
    img: '/static/venus.png'
  },
  earth: {
    title: 'Earth',
    img: '/static/earth.jpg'
  },
  mars: {
    title: 'Mars',
    img: '/static/mars.jpg'
  },
  jupiter: {
    title: 'Jupiter',
    img: '/static/jupiter.jpg'
  },
  saturn: {
    title: 'Saturn',
    img: '/static/saturn.jpg'
  }
}
