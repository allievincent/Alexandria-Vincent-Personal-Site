export default function TimelineItem({ job }) {
  return (
    <div className="relative pb-12 pl-10 last:pb-0">
      {/* dot on the line */}
      <span className="absolute left-0 top-1.5 h-5 w-5 -translate-x-[11px] rounded-full border-4 border-white bg-sky-500 dark:border-[#0f1115]" />
      <span className="inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-900/40 dark:text-sky-300">
        {job.date}
      </span>
      <div className="mt-3 rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-gray-800 dark:bg-[#16191f]">
        <h3 className="text-lg font-semibold">{job.title}</h3>
        <p className="font-medium text-sky-600 dark:text-sky-400">{job.company}</p>
        <ul className="mt-4 list-disc space-y-2 pl-5 text-[15px] text-gray-600 marker:text-sky-500 dark:text-gray-400">
          {job.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
        {job.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {job.tech.map((t) => (
              <span key={t} className="rounded bg-gray-100 px-2 py-1 font-code text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-300">{t}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
