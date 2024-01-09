const portfolio = [
    {
        id: 0,
        projectName: "Trippin",
        url: "project?name=Trippin",
        image: "projects/trippin.png",
        projectDetail: "Trippin serves as the ultimate music hub, providing a comprehensive platform for artists and producers to seamlessly collaborate and release their music across various platforms. Additionally, it offers a unique opportunity for fans to forge deeper connections with their favorite artists through participation in exclusive private communities featuring premium content.",
        technologiesUsed: [
            {
               tech : 'Typescript'
            },
            {
                tech : "NodeJS"
            },
            {
                tech: "NestJS"
            },
            {
                tech: "NextJS"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Docker"
            },
            {
                tech: "Azure buckets"
            },
  
        ]
    },
    {
        id: 1,
        projectName: "Audio feature extraction AI",
        url: "project?name=Audio feature extraction AI",
        image: "projects/box-chart.png",
        projectDetail: "This project draws inspiration from the intricate workings of Spotify's recommendation system, which incorporates values such as 'danceability' and 'acousticness' to offer content-based filtering for song recommendations. Employing supervised learning, I trained a model to extract these features from any given song, yielding results remarkably similar to Spotify's algorithm.",
        technologiesUsed: [
            {
                tech: "Python"
            },
            {
                tech: "Keras"
            },
            {
                tech: "Deep Learning"
            },
            {
                tech: "Data science"
            },

        ]
    },
    {
        id: 0,
        projectName: "Cymatics CMS",
        url: "/",
        image: "projects/cymatics-cms.PNG",
        projectDetail: "This application functions both as a Content Management System (CMS) and an admin panel, exclusively designed for internal use. Its primary purpose is to monitor the waitlist and efficiently manage content.",
        technologiesUsed: [
            {
                tech: "ReactJs"
            },
            {
                tech: "NestJs"
            },
            {
                tech: "TailwindCSS"
            },
            {
                tech: "Docker"
            },

        ]
    },
    {
        id: 0,
        projectName: "Music sharing app",
        url: "https://github.com/FarahTrip/Music-sharing-app",
        image: "projects/music-sharing-app.png",
        projectDetail: "This endeavor originated from a curiosity about the inner workings of music apps and a personal aspiration to undertake a significant project independently. Currently, the project boasts an array of impressive features, including seamless song uploads, an integrated chat system, role-based authentication, and numerous other enhancements.",
        technologiesUsed: [
            {
                tech: "C#"
            },
            {
                tech: ".NET MVC"
            },
            {
                tech: "CSS"
            },
            {
                tech: "Amazon S3 Buckets"
            },
            {
                tech: ""
            },
            {
                tech: "Rest APIS"
            },
            {
                tech: "JavaScript"
            },
        ]
    },


]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
