const technology = [
  {
    name: 'LAUNCH VEHICLE',
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: 'SPACEPORT',
    description: `A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.`,
  },
  {
    name: 'SPACE CAPSULE',
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]

const image = document.getElementById('image')
document.querySelectorAll('button[data-technology-id]').forEach((ele) => {
  ele.addEventListener('click', () => {
    document.querySelector('button.active')?.classList.remove('active')
    ele.classList.add('active')
    const tech =
      technology[parseInt(ele.getAttribute('data-technology-id')) - 1]
    image.src = `/images/technology/${tech.name}.png`
    image.alt = tech.name
    Object.entries(tech).forEach(([id, value]) => {
      document.getElementById(id).innerText = value
    })
  })
})

document.querySelector('button[data-technology-id]').click()
