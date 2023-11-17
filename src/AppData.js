import Robot from "./img/robot.jpg"
import Anon from "./img/anon.jpg"
import Darts from "./img/darts.jpg"
import Book from "./img/book.avif"

export default [
  {
    id: 1,
    img: Robot,
    stats: {
      rating: 4.3,
      votes: 10,
    },
    place: 'Sofia',
    desc: "Curious to find out more about AI? This is the place.",
    price: "From 200$ / person",
    openSpots: 1
  },
  {
    id: 2,
    img: Anon,
    stats: {
      rating: 5.0,
      votes: 10,
    },
    place: "Plovdiv",
    desc: "Hack the world this year, today now with this Ethical Hacking course",
    price: "From 150$ / person",
    openSpots: 0
  },
  {
    id: 3,
    img: Book,
    stats: {
      rating: 4.6,
      votes: 10,
    },
    place: "Tarnovo",
    desc: "Let's talk about literature, love, romance.",
    price: "From 75$ / person",
    openSpots: 1
  },
  {
    id: 4,
    img: Darts,
    stats: {
      rating: 4.5,
      votes: 15,
    },
    place: "Varna",
    desc: "Come and show us how good you are at this wonderful game!",
    price: "From 60$ / person",
    openSpots: 1
  }
]