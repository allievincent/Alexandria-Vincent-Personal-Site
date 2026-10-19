import SectionTitle from '../../components/SectionTitle.jsx'
import FadeIn from '../../components/FadeIn.jsx'
import { education, funFacts } from '../../data/profile.js'

export default function About() {
  return (
    <section id="about" className="bg-gray-50 py-20 dark:bg-[#13161b]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="About Me" subtitle="A little bit about who I am" />

        <div className="grid gap-10 lg:grid-cols-5">
          <FadeIn className="space-y-4 text-gray-600 dark:text-gray-400 lg:col-span-3">
            <p>
              I'm from Island Heights, New Jersey, and I'm a senior at Villanova studying computer science.
              I'm in the five-year BS/MS program, so I'll finish my bachelor's in 2027 and my master's in 2028.
            </p>
            <p>
              I got into cybersecurity through my classes and my internships at Entry Point Communications, where I
              went from building a barcode scanning system to building a pen-testing framework. This summer I started
              doing research on intrusion detection and LLMs, and it's honestly my favorite thing I've worked on so far.
              I like that it mixes security, machine learning, and a lot of careful testing.
            </p>
            <p>
              Outside of class I'm a goalkeeper on the Villanova women's soccer team, so between practice, lifting,
              film, class and the lab my schedule is pretty packed. I'm also on SAAC, I coach at youth soccer camps,
              and I've volunteered with Special Olympics and Radnor Elementary through the team.
            </p>

            <div className="mt-6 rounded-xl border-l-4 border-sky-500 bg-white p-6 dark:bg-[#16191f]">
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">{education.school}</h3>
              <ul className="mt-2 space-y-1">
                {education.degrees.map((d) => <li key={d}>{d}</li>)}
              </ul>
              <p className="mt-3"><strong className="text-gray-800 dark:text-gray-200">GPA:</strong> {education.gpa} · {education.honors}</p>
              <p className="mt-2 text-sm"><strong className="text-gray-800 dark:text-gray-200">Coursework:</strong> {education.coursework.join(', ')}</p>
            </div>
          </FadeIn>

          <FadeIn delay={150} className="lg:col-span-2">
            <div className="rounded-xl bg-white p-6 dark:bg-[#16191f]">
              <h3 className="text-xl font-semibold">Fun facts</h3>
              <ul className="mt-4 divide-y divide-gray-100 dark:divide-gray-800">
                {funFacts.map((f) => (
                  <li key={f} className="flex gap-3 py-3 text-[15px]">
                    <span className="font-code text-sky-500">&gt;</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
