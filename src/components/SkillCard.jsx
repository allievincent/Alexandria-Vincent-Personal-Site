export default function SkillCard({ skill }) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl border border-gray-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-sky-400 dark:border-gray-800 dark:bg-[#16191f]">
      <img src={skill.icon} alt="" className={`h-12 w-12 transition group-hover:scale-110 ${skill.invert ? 'dark:invert' : ''}`} />
      <span className="text-sm font-medium">{skill.name}</span>
    </div>
  )
}
