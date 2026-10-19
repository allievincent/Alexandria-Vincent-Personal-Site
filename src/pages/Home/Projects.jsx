import SectionTitle from '../../components/SectionTitle.jsx'
import FadeIn from '../../components/FadeIn.jsx'
import ProjectCard from '../../components/ProjectCard.jsx'
import { projects } from '../../data/profile.js'

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle title="Projects" subtitle="Some things I've worked on" />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <FadeIn key={p.title} delay={(i % 3) * 100} className="flex">
              <ProjectCard project={p} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
