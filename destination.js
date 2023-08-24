const destinations = [
  {
    name: 'MOON',
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: '384,400 KM',
    time: '3 DAYS',
  },
  {
    name: 'MARS',
    description:
      "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: '225 MIL. KM',
    time: '9 MONTHS',
  },
  {
    name: 'EUROPA',
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: '628 MIL. KM',
    time: '3 YEARS',
  },
  {
    name: 'TITAN',
    description:
      'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 BIL. KM',
    time: '7 YEARS',
  },
]

const image = document.getElementById('image')

document.querySelectorAll('a:not([href])').forEach((ele) => {
  ele.addEventListener('click', () => {
    image.src = `/images/${ele.innerText}.png`
    image.alt = ele.innerText
    document.querySelector('a.active:not([href])').classList.remove('active')
    Object.entries(
      destinations.find(({ name }) => name === ele.innerText)
    ).forEach(([id, value]) => {
      document.getElementById(id).innerText = value
    })
    ele.classList.add('active')
  })
})
