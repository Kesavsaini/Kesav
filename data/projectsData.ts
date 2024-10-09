interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  bgClr?: string // optional background color for the card (default: #ffffff)
}

const projectsData: Project[] = [
  {
    title: 'Landing Ease',
    description: `A minimlistic Landing Page Creator with drag and Drop Functionality including in-app Form Submissions and Analytics`,
    imgSrc: '/static/images/landingEase.png',
    href: 'https://landing-ease.vercel.app/',
    bgClr: '#ea580c',
  },
]

export default projectsData
