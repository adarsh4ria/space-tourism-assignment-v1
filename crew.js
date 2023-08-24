const crew = [
  {
    name: 'P VEERAMUTHUVEL',
    description:
      'P Veeramuthuver is the Project Director of Chandrayaan, and he has done a very great job in the Chandrayaan-3. Before becoming the Project Director, he was part of a team executing the setup that covers collaboration related to the NASA-provided laser retroreflector array.',
    job: 'PROJECT DIRECTOR',
  },
  {
    name: 'SRIKANT',
    description:
      'Srikant, ever since his appointment in 2021, has been at the forefront, ensuring meticulous planning and execution. His role wasn’t limited to strategy; he was integral to the safety protocols for the spacecraft.',
    job: 'MISSION DIRECTOR',
  },
  {
    name: 'M SANKARAN',
    description:
      "M Sankaran's works include navigation, communication, remote sensing, meteorology, and inter-planetary exploration. He has played a vital role in guiding the other scientists for Chandrayaan 3.",
    job: 'COMMUNICATION SPECIALIST',
  },
  {
    name: 'KALPANA KALAHASTI',
    description:
      'Kalpana K served as the deputy project director in Chandrayaan 3 mission. She was second-in-command, paying extra attention to the minute details of the project. She was previously also involved in the second lunar mission and the Mangalyaan mission.',
    job: 'DEPUTY PROJECT DIRECTOR',
  },
]

const image = document.getElementById('image')
document.querySelectorAll('button[data-crew-id]').forEach((ele) => {
  ele.addEventListener('click', () => {
    document.querySelector('button.active')?.classList.remove('active')
    ele.classList.add('active')
    const crewMember = crew[parseInt(ele.getAttribute('data-crew-id'))]
    image.src = `/images/crew/${crewMember.name}.png`
    Object.entries(crewMember).forEach(([id, value]) => {
      document.getElementById(id).innerText = value
    })
  })
})

document.querySelector('button[data-crew-id').click()
