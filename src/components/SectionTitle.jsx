export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      <div className="mx-auto mt-3 h-1 w-16 rounded bg-sky-400" />
      {subtitle && <p className="mx-auto mt-4 max-w-xl text-gray-500 dark:text-gray-400">{subtitle}</p>}
    </div>
  )
}
