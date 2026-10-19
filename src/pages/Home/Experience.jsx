import SectionTitle from '../../components/SectionTitle.jsx'
import FadeIn from '../../components/FadeIn.jsx'
import TimelineItem from '../../components/TimelineItem.jsx'
import { experience } from '../../data/profile.js'

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle title="Experience" subtitle="Research, internships, and soccer" />
        <div className="ml-2 border-l-2 border-sky-200 dark:border-sky-900">
          {experience.map((job) => (
            <FadeIn key={job.title}>
              <TimelineItem job={job} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
