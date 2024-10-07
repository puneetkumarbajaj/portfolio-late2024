import ProjectCards from "@/app/components/ProjectsCard";

const projectsPage = () => {
  const Projects = [
    {
      "title": "Melos (Candace) - AI-driven music discovery app",
      "image": "/images/Melos.png",
      "description": "Melos (Candace) is an AI-driven app that creates personalized music playlists based on user moods and preferences, integrating Spotify and Apple Music for seamless streaming.",
      "tags": ["Swift", "Firebase", "Vertex AI", "OAuth2", "CoreData"],
      "link": "https://melos.puneetbajaj.com/"
    },
    {
      "title": "CiperLink - Secure communication platform",
      "image": "/images/ciperLink.png",
      "description": "CiperLink is a secure platform that reduces phishing risks by using Zero-Knowledge Proofs and multi-staged cryptographic authentication, ensuring safe user interactions.",
      "tags": ["React", "Next.js", "Google Cloud Functions", "Zero-Knowledge Proofs"],
      "link": "https://ciperlink.puneetbajaj.com/"
    },
    {
      "title": "CareerSwipe - AI-driven recruiting platform",
      "image": "/images/careerswipe.png",
      "description": "CareerSwipe is a platform designed to match students with job opportunities using AI, improving job search efficiency through a personalized recruitment experience.",
      "tags": ["Next.js", "Django", "Google Cloud Compute", "AI"],
      "link": "https://careerswipe.puneetbajaj.com/"
    },
    {
      "title": "Digital Human Lab - Interactive digital human project",
      "image": "/images/dhlab.png",
      "description": "An AI-powered project at Georgia State University focused on creating digital humans that interact naturally with users through AI, computer vision, and emotion detection technologies.",
      "tags": ["Unreal Engine", "AI", "Computer Vision", "C++"],
      "link": "https://dhlab.vercel.app/"
    }
  ]
  
  return (
    // PROJECT PAGE
    <div className="my-40">
      <div className="flex flex-row flex-wrap gap-8 max-lg:flex-col">
        {Projects.map((val, indx) => {
          return <ProjectCards key={indx} value={val} num={indx} />;
        })}
      </div>
    </div>
  );
};

export default projectsPage;