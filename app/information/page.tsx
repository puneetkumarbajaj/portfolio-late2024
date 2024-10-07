import React from "react";

const experienceData = [
  {
    title: "Research Assistant - Digital Human Lab",
    organization: "Georgia State University",
    duration: "September 2024 - Present",
    description:
      "Leading the development of an interactive digital human project, integrating AI and computer vision technologies. Managing a team of research assistants, overseeing project strategies, and collaborating with the AI lab.",
  },
  {
    title: "Research Assistant - AMAI Lab",
    organization: "Georgia State University",
    duration: "February 2024 - May 2024",
    description:
      "Developed a Flutter-based emotion detection app and optimized TensorFlow Lite algorithms, improving computational efficiency by 25%. Accelerated app development cycle, boosting project delivery speed by 10x.",
  },
  {
    title: "Lead Makerspace Assistant",
    organization: "EXLAB",
    duration: "August 2022 - May 2024",
    description:
      "Managed 3D printing systems and conducted training sessions for students on advanced equipment. Optimized lab processes, increasing printing efficiency by up to four times, and led a team across two campus maker spaces.",
  },
  {
    title: "AWS Cloud Practitioner",
    organization: "AWS Certification",
    duration: "Valid Until June 2027",
    description:
      "Certified cloud practitioner with a focus on building and deploying cloud-based architectures using AWS services.",
  },
];

function Page() {
  return (
    <div className="max-w-5xl mx-auto my-40">
      <p className="text-lg mb-4">
        Puneet Bajaj is a software engineer with expertise in full stack
        development and digital solutions. He has experience working across
        various domains, including AI integration, secure communication
        platforms, and interactive digital experiences. Puneet has collaborated
        on impactful projects such as Melos (Candace) and CiperLink, building
        innovative, user-centered solutions.
      </p>
      <p className="text-lg mb-4">
        In 2024, Puneet joined Georgia State University as a{" "}
        <strong>Research Assistant</strong>, where he leads the development of
        an interactive digital human project in collaboration with the AI lab.
        This work involves integrating advanced technologies like computer
        vision, AI-driven emotion detection, and Unreal Engine to create digital
        humans capable of responding naturally to user interactions. Puneet
        manages a team of research assistants, overseeing project direction and
        development strategies.
      </p>
      <p className="text-lg mb-4">
        Puneet’s technical portfolio also includes the development of{" "}
        <strong>CareerSwipe</strong>, an AI-driven recruiting platform
        recognized by the University's Associate Dean of Computer Science. His
        expertise in designing AI-powered systems and cloud-based architecture
        has been instrumental in enhancing user experiences and improving the
        efficiency of digital platforms.
      </p>
      <p className="text-lg mb-4">
        Earlier in his career, Puneet was the Lead Makerspace Assistant at{" "}
        <strong>EXLAB</strong>, Georgia State University’s innovative lab space.
        In this role, he managed 3D printing systems, conducted equipment
        training sessions for students, and optimized lab processes,
        significantly increasing printing efficiency.
      </p>
      <p className="text-lg mb-4">
        Throughout his journey, Puneet has gained experience in various
        technologies, including TypeScript, JavaScript, Python, Dart, Swift, and
        C++. He has also built strong proficiencies in cloud computing, holding
        an <strong>AWS Cloud Practitioner certification</strong>, and has
        contributed to the development of mobile and web applications with
        frameworks like React, Next.js, and Flutter.
      </p>
      <p className="text-lg mb-4">
        Currently based in Atlanta, Georgia, Puneet is driven to innovate, lead,
        and create solutions that integrate modern technologies to solve complex
        problems.
      </p>
      <h2 className="text-3xl font-semibold my-8">Experience</h2>
      <div className="space-y-6">
        {experienceData.map((experience, index) => (
          <div key={index}>
            <h3 className="text-2xl font-medium">
              {experience.title}, {experience.organization}
            </h3>
            <p className="text-sm text-gray-600">{experience.duration}</p>
            <p className="text-lg mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
