const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Scoala informala de IT',
                degree: 'Developer diploma',
                detail: "Short course for developers.",
                year: '2023-2023'
            },
            {
                id: 1,
                title: 'SAE Institute',
                degree: 'Audio engineering',
                detail: "Studied the science of sound and music having the oportunity to work with the best tools in real music studios provided by the institute.",
                year: '2019-2020'
            },
            // {
            //     id: 2,
            //     title: 'Falcon Academy',
            //     degree: 'SSC, Science Subjects',
            //     detail: "Completed SSC part 1 and part 2 in Science subjects from Falcon Academy Seni Gumbat Kohat",
            //     year: '2013-2015'
            // },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'Trippin Technologies',
                role: 'Full-stack Developer',
                url: 'https://www.trippin.ro',
                desc: 'As a Full-Stack developer, I used Nextjs, NestJs & Typescript to build a fully functional music application.',
                year: '02/2023 - Present',
                location: 'Peshawar, Pakistan'
            },
            // {
            //     id: 2,
            //     title: 'HauzaTech',
            //     role: 'Internee',
            //     url: 'no website',
            //     desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
            //     year: '02/2023 - Present',
            //     location: 'Peshawar, Pakistan'
            // },
            // {
            //     id: 3,
            //     title: 'Encoder Bytes',
            //     role: 'PHP Developer',
            //     url: 'https://www.encoderbytes.com/',
            //     desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
            //     year: '09/2020 - 02/2021',
            //     location: 'Peshawar, Pakistan'
            // },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
