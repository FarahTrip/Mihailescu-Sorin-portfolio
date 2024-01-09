const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: 'As a Full Stack Developer proficient in NestJS and NextJS, I seamlessly integrate front-end and back-end technologies. My expertise includes TypeScript for robust code, Docker for consistent deployments, and ORM tools like Prisma for efficient database management. This comprehensive skill set allows me to create end-to-end solutions that are scalable, maintainable, and tailored to project requirements.',
    },
    {
        id: 1,
        title: 'Github',
        desc: "GitHub is essential for version control and collaboration. Its intuitive interface and features like pull requests and issue tracking simplify the process. Continuous integration ensures up-to-date code. GitHub is vital to my success as a developer.",
    },
    {
        id: 3,
        title: 'Scrum',
        desc: "As a developer, I'm proficient in Azure Boards and Scrum methodologies. I use Azure boards to simplify project management tasks like task assignment, prioritization, and progress tracking. Scrum has improved my teamwork, utilizing daily stand-ups, sprint planning, and retrospectives. My expertise ensures high-quality software products are delivered promptly.",
    },
]

export default function handler(req, res) {
    res.status(200).json(expertise)
}
