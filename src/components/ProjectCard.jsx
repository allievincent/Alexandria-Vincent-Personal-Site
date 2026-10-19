import Button from './Button.jsx'
import Icon from './Icon.jsx'

export default function ProjectCard({ project }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white transition duration-300 hover:-translate-y-2 hover:border-sky-400 dark:border-gray-800 dark:bg-[#16191f]">
      {/* top of the card shows the logos of what it's built with */}
      <div className="flex h-36 items-center justify-center gap-6 border-b border-gray-200 bg-sky-50 dark:border-gray-800 dark:bg-sky-950/30">
        {project.icons.map((icon, i) => (
          <img key={i} src={icon} alt="" className={`h-12 w-12 ${project.invertFirst && i === 0 ? 'dark:invert' : ''}`} />
        ))}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <p className="mt-2 flex-1 text-[15px] text-gray-600 dark:text-gray-400">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-full bg-sky-50 px-3 py-1 text-xs font-medium text-sky-700 dark:bg-sky-900/30 dark:text-sky-300">{t}</span>
          ))}
        </div>
        {(project.page || project.github) && (
          <div className="mt-5">
            {project.page && <Button to={project.page} className="px-4 py-2 text-sm">Read more →</Button>}
            {project.github && (
              <Button href={project.github} variant="outline" className="px-4 py-2 text-sm">
                <Icon name="github" size={16} /> Code
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
