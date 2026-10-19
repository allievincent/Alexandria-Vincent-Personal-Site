import SectionTitle from '../../components/SectionTitle.jsx'
import FadeIn from '../../components/FadeIn.jsx'
import SkillCard from '../../components/SkillCard.jsx'
import { skills, securitySkills } from '../../data/profile.js'

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 py-20 dark:bg-[#13161b]">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Skills" subtitle="Languages and tools I've used in class, research, and internships" />
        <FadeIn className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {skills.map((s) => <SkillCard key={s.name} skill={s} />)}
        </FadeIn>

        <FadeIn className="mt-14 text-center">
          <h3 className="text-xl font-semibold">Security &amp; Research</h3>
          <div className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-3">
            {securitySkills.map((s) => (
              <span key={s} className="rounded-full border border-sky-300 bg-white px-4 py-2 text-sm font-medium text-sky-700 dark:border-sky-800 dark:bg-transparent dark:text-sky-300">
                {s}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
