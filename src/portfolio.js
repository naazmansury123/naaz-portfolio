/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Naaz Mansury",
  title: "Hi all, I'm Naaz",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1nIJtTPLEIY3LEU-CpongfrwA2O76KQJm/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/naazmansury123",
  linkedin: "https://www.linkedin.com/in/naaz-mansuri-709325301/",
  gmail: "mansurynaaz@gmail.com",
  
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
      {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
       {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
    schoolName: "Smt. Kesi Devi Memorial Sr. Sec. School, Beawar, Rajasthan",
    logo: require("./assets/images/kesiDeviLogo.png"),
    duration: "June 2019 - April 2020",
    desc: "Completed secondary education with active participation in school events.",
    descBullets: [
      "Achieved solid academic performance in all subjects",
      "Participated in cultural and co-curricular activities"
    ]
  },
  {
    schoolName: "G.G. Senior Secondary School, Chawni, Beawar - Ajmer",
    subHeader: "Commerce Stream",
    duration: "July 2021 - April 2022",
    desc: "Secured 65% in Senior Secondary (12th Grade)",
    descBullets: [
      "Focused on Accountancy, Business Studies, and Economics"
    ]
  },
  {
    collegeName: "S.D. Government College, Beawar (Affiliated to MDSU, Ajmer)",
    logo: require("./assets/images/S.D govt collage.png"),
    subHeader: "B.Com - Commerce (Accounts)",
    duration: "July 2023 - April 2025",
    desc: "Currently pursuing Bachelor's degree with 64% till date",
    descBullets: [
      "Learning core concepts in accounting, taxation, and finance"
    ]
  }
]

};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section
// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "Iron Street",
      companylogo: require("./assets/images/ironStreetLogo.png"), // Add your logo to assets/images
      date: "April 2023 – June 2023",
      desc: "Worked on building responsive web pages and improving UI using HTML, CSS, and JavaScript.",
      descBullets: [
        "Developed and maintained front-end features for client websites",
        "Collaborated with the team to deliver clean and efficient code"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on
const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS THAT I BUILT TO SOLVE REAL-WORLD PROBLEMS",
  projects: [
    {
      image: require("./assets/images/musicPlayerLogo.png"), // Add your own logo/image file
      projectName: "Music Player",
      projectDesc: "A web-based music player app built with JavaScript. Features play, pause, next, previous, and dynamic playlist.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/naazmansury123/music-player"
        }
      ]
    },
    {
      image: require("./assets/images/taskManagerLogo.png"), // Add your own logo/image file
      projectName: "Task Manager App",
      projectDesc: "A full-featured task management tool with add, edit, delete, and mark-complete features using JavaScript.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/naazmansury123/task-manager-app"
        }
      ]
    },
    {
      image: require("./assets/images/symptomTrackerLogo.png"), // Add your own logo/image file
      projectName: "Symptom Tracker",
      projectDesc: "An app to track and log symptoms over time for better health monitoring, using JavaScript.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/naazmansury123/symptom-tracker-app"
        }
      ]
    },
    {
      image: require("./assets/images/ironStreetLogo.png"), // Add your own logo/image file
      projectName: "Iron Street",
      projectDesc: "Furniture website project with responsive design and modern UI, built with HTML, CSS.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/naazmansury123/iron-street"
        }
      ]
    },
    {
      image: require("./assets/images/securemeter.png"), // Add your own logo/image file
      projectName: "Secure Meter Dashboard",
      projectDesc: "Full-stack dashboard for secure meters with dynamic data, charts, and user authentication.",
      footerLink: [
        {
          name: "View on GitHub",
          url: "https://github.com/naazmansury123/Secure-Meter-Fullstack-Dashboard"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AI Certificate",
      subtitle: "Successfully completed an AI-related certification showcasing skills in Artificial Intelligence fundamentals.",
      image: require("./assets/images/guviCertificate.png"), // Save the AI image locally as aiCertificate.png
      imageAlt: "AI Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://naazmansury123.github.io/Portfolio/Ai.png"
        }
      ]
    },
    {
      title: "GUVI Certificate",
      subtitle: "Completed certification with GUVI, enhancing programming and development skills.",
      image: require("./assets/images/aiCertificate.png"), // Save the GUVI image locally as guviCertificate.png
      imageAlt: "GUVI Certificate",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://naazmansury123.github.io/Portfolio/guvi.png"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};
// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section



// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project in mind or just wanna say hello? I’d love to hear from you!",
  number: "+91-8209710186",
  email_address: "mansurynaaz@gmail.com"
};

// Twitter Section
 // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  resumeSection
};
