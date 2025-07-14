'use client'
import NavBar from '@/components/NavBar'
import ResumeSection from '@/components/ResumeSection'
import ResumeCarousel from '@/components/ResumeCarousel'

export default function ResumePage() {
  return (
    <>
      <NavBar />

      

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
                imageSrc: "/images/Shaker_logo.webp"
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
                  'Modernizing a core MATLAB feature by implementing custom widgets to greatly enhance accessibility and align the interface with updated user experience standards',
                  'Participated in sprint planning, stand-ups, and sprint retrospectives within an Agile Scrum framework to deliver iterative enhancements and meet project deadlines',
                  'Communicating technical solutions clearly through multiple design and code review documents',

                ],
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
              },
            ]}
          />
        </ResumeSection>

        
      </main>
    </>
  )
}
