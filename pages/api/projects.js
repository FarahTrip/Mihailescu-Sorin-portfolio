// pages/api/projects/[projectName].js

const projects = [
    {
      id : 1,
      name: "Trippin",
      description: "Trippin serves as the ultimate music hub, providing a comprehensive platform for artists and producers to seamlessly collaborate and release their music across various platforms. Additionally, it offers a unique opportunity for fans to forge deeper connections with their favorite artists through participation in exclusive private communities featuring premium content.",
      image : '/projects/trippin.PNG'

    },
    {
      id : 2,
      name: "Audio feature extraction AI",
      description: "This project draws inspiration from the intricate workings of Spotify's recommendation system, which incorporates values such as 'danceability' and 'acousticness' to offer content-based filtering for song recommendations. Employing supervised learning, I trained a model to extract these features from any given song, yielding results remarkably similar to Spotify's algorithm.",
      image : '/projects/box-chart.png'

    },

  ];
  
  export default function handler(req, res) {
    const { name } = req.query;
  
    if (!name) {
      return res.status(400).json({ error: "Project name is required." });
    }
  
    const selectedProject = projects.find((project) => project.name === name);
  
    if (!selectedProject) {
      return res.status(404).json({ error: "Project not found." });
    }
  
    res.status(200).json(selectedProject);
  }
  