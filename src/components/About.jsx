// import {
//   Brain,
//   Code2,
//   Cpu,
//   Lightbulb,
//   GraduationCap,
//   Sparkles,
// } from "lucide-react";

// const About = () => {
//   const highlights = [
//     {
//       icon: GraduationCap,
//       title: "5th Semester",
//       text: "BS Computer Science",
//     },
//     {
//       icon: Brain,
//       title: "AI & ML",
//       text: "Learning through practice",
//     },
//     {
//       icon: Code2,
//       title: "Project Based",
//       text: "Learning by building",
//     },
//     {
//       icon: Lightbulb,
//       title: "Problem Solving",
//       text: "Curious & continuous learner",
//     },
//   ];

//   return (
//     <section id="about" className="about-section">

//       <div className="about-container">

//         {/* =========================
//             SECTION HEADING
//         ========================= */}
//         <div className="section-heading">

//           <span className="section-label">
//             ABOUT ME
//           </span>

//           <h2>
//             Learning by <span>building.</span>
//           </h2>

//           <p>
//             A Computer Science student with a growing focus on
//             Artificial Intelligence and Machine Learning.
//           </p>

//         </div>


//         {/* =========================
//             MAIN ABOUT CONTENT
//         ========================= */}
//         <div className="about-content">

//           {/* LEFT SIDE */}
//           <div className="about-text">

//             <h3>
//               Computer Science Student
//               <span> | Learning AI/ML by Building</span>
//             </h3>

//             <p>
//               I am a 5th-semester Computer Science student at the
//               University of Peshawar. I learn best by building,
//               experimenting, and turning concepts from the classroom
//               into practical projects.
//             </p>

//             <p>
//               My current interests include Artificial Intelligence,
//               Machine Learning, Natural Language Processing, and
//               automation. I enjoy exploring how intelligent systems
//               work and applying what I learn through practical
//               experiments and projects.
//             </p>

//             <p>
//               Along the way, I have worked with areas such as
//               classifiers, chatbots, sentiment analysis, workflow
//               automation, and small full-stack applications. Each
//               project gives me an opportunity to learn something new,
//               improve my problem-solving skills, and understand
//               technology beyond the classroom.
//             </p>

//             <p>
//               I am currently focused on developing a deeper
//               understanding of AI and Machine Learning while
//               continuing to strengthen my Computer Science foundation.
//             </p>

//           </div>


//           {/* RIGHT SIDE */}
//           <div className="about-focus">

//             <div className="about-focus-header">

//               <div className="about-focus-icon">
//                 <Sparkles size={21} />
//               </div>

//               <div>
//                 <span>
//                   CURRENT FOCUS
//                 </span>

//                 <h3>
//                   AI & Technology
//                 </h3>
//               </div>

//             </div>


//             <div className="about-focus-items">

//               <div className="focus-item">

//                 <Brain size={18} />

//                 <div>
//                   <strong>
//                     Artificial Intelligence
//                   </strong>

//                   <span>
//                     Exploring intelligent systems
//                   </span>
//                 </div>

//               </div>


//               <div className="focus-item">

//                 <Cpu size={18} />

//                 <div>
//                   <strong>
//                     Machine Learning
//                   </strong>

//                   <span>
//                     Learning through practical work
//                   </span>
//                 </div>

//               </div>


//               <div className="focus-item">

//                 <Code2 size={18} />

//                 <div>
//                   <strong>
//                     Practical Development
//                   </strong>

//                   <span>
//                     Building projects and experiments
//                   </span>
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>


//         {/* =========================
//             HIGHLIGHTS
//         ========================= */}
//         <div className="about-highlights">

//           {highlights.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <div
//                 className="about-highlight"
//                 key={index}
//                 style={{
//                   "--delay": `${index * 0.08}s`,
//                 }}
//               >

//                 <div className="highlight-icon">
//                   <Icon size={20} />
//                 </div>

//                 <div>
//                   <strong>
//                     {item.title}
//                   </strong>

//                   <span>
//                     {item.text}
//                   </span>
//                 </div>

//               </div>
//             );
//           })}

//         </div>

//       </div>

//     </section>
//   );
// };

// export default About;

import {
  Brain,
  Code2,
  Cpu,
  Lightbulb,
  GraduationCap,
  Sparkles,
} from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: "5th Semester",
      text: "BS Computer Science",
    },
    {
      icon: Brain,
      title: "AI & ML",
      text: "Learning through practice",
    },
    {
      icon: Code2,
      title: "Project Based",
      text: "Learning by building",
    },
    {
      icon: Lightbulb,
      title: "Problem Solving",
      text: "Curious & continuous learner",
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="about-container">

        {/* SECTION HEADING */}
        <div className="section-heading">
          <span className="section-label">
            ABOUT ME
          </span>

          <h2>
            Learning by <span>building.</span>
          </h2>

          <p>
            Computer Science student with a growing interest in
            Artificial Intelligence and Machine Learning.
          </p>
        </div>

        {/* MAIN ABOUT CONTENT */}
        <div className="about-content">

          {/* LEFT SIDE */}
          <div className="about-text">
            <h3>
              Computer Science Student
              <span> · AI/ML Enthusiast</span>
            </h3>

            <p>
              I’m a 5th-semester BS Computer Science student at the
              University of Peshawar, interested in Artificial Intelligence,
              Machine Learning, and software development.
            </p>

            <p>
              I learn best by building practical projects, experimenting
              with new technologies, and turning ideas into working
              solutions.
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="about-focus">

            <div className="about-focus-header">
              <div className="about-focus-icon">
                <Sparkles size={21} />
              </div>

              <div>
                <span>CURRENT FOCUS</span>
                <h3>AI & Technology</h3>
              </div>
            </div>

            <div className="about-focus-items">

              <div className="focus-item">
                <Brain size={18} />

                <div>
                  <strong>Artificial Intelligence</strong>
                  <span>Exploring intelligent systems</span>
                </div>
              </div>

              <div className="focus-item">
                <Cpu size={18} />

                <div>
                  <strong>Machine Learning</strong>
                  <span>Learning through practical projects</span>
                </div>
              </div>

              <div className="focus-item">
                <Code2 size={18} />

                <div>
                  <strong>Development</strong>
                  <span>Building practical applications</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* HIGHLIGHTS */}
        <div className="about-highlights">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                className="about-highlight"
                key={index}
                style={{
                  "--delay": `${index * 0.08}s`,
                }}
              >
                <div className="highlight-icon">
                  <Icon size={20} />
                </div>

                <div>
                  <strong>{item.title}</strong>
                  <span>{item.text}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default About;