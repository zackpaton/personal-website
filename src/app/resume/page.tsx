'use client'
import ResumeSection from '@/components/ResumeSection'
import ResumeCarousel from '@/components/ResumeCarousel'

export default function ResumePage() {
  return (
    <>
      <main className="max-w-4xl mx-auto px-1 sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-8">
        <div className="flex sm:hidden text-xl font-bold justify-center items-center bg-background text-foreground rounded max-w-2/5 mx-auto ring-3 ring-foreground"> 
          Resume
        </div>
        <ResumeSection title="Education">
          <ResumeCarousel
            items={[
              {
                topLeft: 'Rensselaer Polytechnic Institute',
                topRight: 'Troy, NY',
                bottomLeft: 'B.S. in Computer Science and Information Technology & Web Science',
                bottomRight: 'May 2026',
                bullets: [
                  'GPA: 4.0/4.0',
                  'Concentrations: Systems & Software and Web Technologies',
                  'Minor: Economics',
                  'Dean\'s Honor List, Gamma Nu Eta, Upsilon Pi Epsilon, NSLS Honor Society',
                  'Relevant Coursework: Web Systems Development, Managing IT Resources, Foundations of Human-Computer Interaction, Principles of Software, Operating Systems, Database Systems',
                ],
                imageSrc: "/images/RPI_logo.webp",
                imageShadow: "rgb(214, 0, 28)",
              },
              {
                topLeft: 'Shaker High School',
                topRight: 'Latham, NY',
                bottomLeft: 'High School Diploma',
                bottomRight: 'June 2022',
                bullets: [
                  'Unweighted GPA: 97.0/100',
                  'SAT: 1570/1600',
                  'ACT: 35/36',
                  'AP Coursework: Computer Science A, Calculus BC, Macroeconomics'
                ],
                imageSrc: "/images/Shaker_logo.webp",
                imageShadow: "rgb(65, 105, 225)"
              },
            ]}
          />
        </ResumeSection>
        
        <ResumeSection title="Internship Experience">
          <ResumeCarousel
            items={[
              {
                topLeft: 'MathWorks',
                topRight: 'Natick, MA',
                bottomLeft: 'Engineering Development Group Intern',
                bottomRight: 'May 2025 - Present',
                bullets: [
                  'Modernized a core MATLAB feature by implementing custom widgets to greatly enhance accessibility and align the interface with updated user experience standards',
                  'Participated in sprint planning, stand-ups, and sprint retrospectives within an Agile Scrum framework to deliver iterative enhancements and meet project deadlines',
                  'Communicated technical solutions clearly through multiple design and code review documents',
                ],
                imageSrc: "/images/MathWorks_logo.webp",
                imageShadow: "rgb(217, 83, 25)",
              },
              {
                topLeft: 'General Dynamics Mission Systems',
                topRight: 'Pittsfield, MA',
                bottomLeft: 'Software Engineering Intern (DoD Secret Clearance)',
                bottomRight: 'May 2024 - April 2025',
                bullets: [
                  'Developed and implemented a mission-critical web application for inventory management using Java, HTML, CSS, and SQL while ensuring seamless user experience and robust backend integration',
                  'Continuously improved code quality and reduced bugs by executing dozens of comprehensive unit tests',
                  'Attended 30+ peer reviews as an author or reviewer to ensure code reliability and performance',
                  'Presented fully polished web app to 30+ stakeholders and answered questions regarding efficiency and use cases',
                ],
                imageSrc: "/images/GDMS_logo.webp",
                imageShadow: "rgb(0, 48, 135)",
              },
              {
                topLeft: 'Capital Region BOCES',
                topRight: 'Albany, NY',
                bottomLeft: 'Information Security Intern',
                bottomRight: 'July 2023 - January 2024',
                bullets: [
                  'Participated in weekly team meetings regarding the information security of 150+ school districts',
                  'Investigated 10+ alerts weekly from school districts concerning suspicious logins and information leaks',
                  'Managed the infrastructure of several hundred servers to ensure appropriate implementation of monitoring tools',
                ],
                imageSrc: "/images/BOCES_logo.webp",
                imageShadow: "rgb(190, 65, 46)",
              },
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Leadership Experience">
          <ResumeCarousel
            items={[
              {
                topLeft: 'Interfraternity Council',
                topRight: 'Troy, NY',
                bottomLeft: 'Vice President of Finance',
                bottomRight: 'December 2023 - Present',
                bullets: [
                  'Managed the Council\'s $10,000+ annual budget, dedicating funds to various leadership events and chapter initiatives',
                  'Optimized an Excel Macro to speed up invoice creation, helping save dozens of hours of work semesterly',
                  'Developed financial policies to support sustainable growth, efficient operations, and effective use of council resources',
                ],
                imageSrc: "/images/IFC_logo.webp",
                imageShadow: "rgb(214, 0, 28)",
              },
              {
                topLeft: 'Sigma Chi Fraternity Delta Psi Chapter',
                topRight: 'Troy, NY',
                bottomLeft: 'Scholarship Chairman',
                bottomRight: 'April 2024 - April 2025',
                bullets: [
                  'Monitored chapter GPA and developed targeted strategies to improve the academic standing of struggling individuals',
                  'Organized multiple faculty and staff dinners with 40+ guests to provide fraternity members with networking opportunities',
                  'Collaborated with campus resources and faculty to provide 5+ academic and leadership workshops for members',
                ],
                imageSrc: "/images/SigmaChi_crest.webp",
                imageShadow: "rgb(0, 155, 205)",
              },
              {
                topLeft: 'Sigma Chi Fraternity Delta Psi Chapter',
                topRight: 'Troy, NY',
                bottomLeft: 'Social Chairman',
                bottomRight: 'April 2024 - April 2025',
                bullets: [
                  'Allocated a $5,000+ budget towards various social events in collaboration with other organizations on campus',
                  'Evaluated and contracted with external facilities to plan and host multiple formal events with 50+ attendees',
                ],
                imageSrc: "/images/SigmaChi_crest.webp",
                imageShadow: "rgb(0, 155, 205)",
              },
              {
                topLeft: 'Sigma Chi Fraternity Delta Psi Chapter',
                topRight: 'Troy, NY',
                bottomLeft: 'Judicial Board Representative',
                bottomRight: 'April 2024 - April 2025',
                bullets: [
                  'Served as a liaison between chapter members and leadership, communicating judicial outcomes and promoting accountability within the brotherhood',
                  'Participated in dozens of case deliberations and upheld fraternity policies by advocating for fair, unbiased decisions',
                ],
                imageSrc: "/images/SigmaChi_crest.webp",
                imageShadow: "rgb(0, 155, 205)",
              },
              {
                topLeft: 'Bwenzi Club',
                topRight: 'Troy, NY',
                bottomLeft: 'Vice President',
                bottomRight: 'April 2024 - April 2025',
                bullets: [
                  'Assisted in leading the club to raise over $2,000 towards health and education initiatives in Malawi, Africa',
                  'Collaborated with other executive board members to plan 10+ philanthropic events across campus',
                ],
                imageSrc: "/images/Bwenzi_logo.webp",
                imageShadow: "rgb(154, 188, 199)",
              },
              {
                topLeft: 'Information Technology & Web Science Student Leadership',
                topRight: 'Troy, NY',
                bottomLeft: 'Vice President',
                bottomRight: 'April 2024 - April 2025',
                bullets: [
                  'Assisted the President in managing operations and executing events and initiatives for the ITWS community',
                  'Managed the organization\'s budget and completed ITWS merchandise orders with 50+ purchases',
                ],
                imageSrc: "/images/ITWS_logo.webp",
                imageShadow: "rgb(31, 32, 34)",
              },
              {
                topLeft: 'Information Technology & Web Science Student Leadership',
                topRight: 'Troy, NY',
                bottomLeft: 'Sophomore Representative',
                bottomRight: 'April 2023 - April 2024',
                bullets: [
                  'Liaised between sophomore ITWS students and department leadership, voicing concerns and promoting engagement',
                  'Helped plan social and professional development events to strengthen community connections between ITWS faculty, advisors, and students',
                ],
                imageSrc: "/images/ITWS_logo.webp",
                imageShadow: "rgb(31, 32, 34)",
              },
            ]}
          />
        </ResumeSection>

        <ResumeSection title="Work Experience">
          <ResumeCarousel
            items={[
              {
                topLeft: 'Rensselaer Polytechnic Institute',
                topRight: 'Troy, NY',
                bottomLeft: 'Peer Career Advisor',
                bottomRight: 'August 2024 - Present',
                bullets: [
                  'Provided career-related advice and resume/cover letter feedback to 10+ students weekly',
                  'Organized several professional development panels for students to inquire and learn about advancing their careers',
                  'Communicated with coworkers and staff members to meet needs and expectations of each individual student',
                ],
                imageSrc: "/images/RPI_logo.webp",
                imageShadow: "rgb(214, 0, 28)",
              },
              {
                topLeft: 'Rensselaer Polytechnic Institute',
                topRight: 'Troy, NY',
                bottomLeft: 'Undergraduate Programming Mentor - Principles of Software',
                bottomRight: 'January 2025 - April 2025',
                bullets: [
                  'Held office hours for 4+ hours weekly to answer student questions about programming in Java',
                  'Attended weekly meetings with 25 staff members to discuss feedback from students',
                  'Taught students intermediate programming concepts such as search algorithms, abstract data types, and polymorphism',
                ],
                imageSrc: "/images/RPI_logo.webp",
                imageShadow: "rgb(214, 0, 28)",
              },
              {
                topLeft: 'Rensselaer Polytechnic Institute',
                topRight: 'Troy, NY',
                bottomLeft: 'Advising & Learning Assistance Center Tutor',
                bottomRight: 'August 2023 - April 2024',
                bullets: [
                  'Held office hours for 10 hours weekly outside of class time and answered student questions related to current assignments',
                  'Tutored students in multiple programming languages such as C++, C, Python, and Java',
                  'Collaborated with other tutors to effectively teach different skills and concepts to 15+ students weekly',
                ],
                imageSrc: "/images/RPI_logo.webp",
                imageShadow: "rgb(214, 0, 28)",
              },
              {
                topLeft: 'Rensselaer Polytechnic Institute',
                topRight: 'Troy, NY',
                bottomLeft: 'Undergraduate Programming Mentor - Computer Science I',
                bottomRight: 'August 2023 - December 2023',
                bullets: [
                  'Mentored 25+ students during weekly lab sections to help them understand and complete programming tasks in Python',
                  'Helped teach students introductory programming concepts such as loops, classes, Boolean algebra, and list manipulation',
                ],
                imageSrc: "/images/RPI_logo.webp",
                imageShadow: "rgb(214, 0, 28)",
              },
            ]}
          />
        </ResumeSection>

      </main>
    </>
  )
}
