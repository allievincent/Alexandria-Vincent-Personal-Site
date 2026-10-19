import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

export default function SocialIcons({ className = '' }) {
  const links = [
    { name: 'github', href: profile.github, label: 'GitHub' },
    { name: 'linkedin', href: profile.linkedin, label: 'LinkedIn' },
    { name: 'mail', href: `mailto:${profile.email}`, label: 'Email' },
  ]
  return (
    <div className={`flex gap-4 ${className}`}>
      {links.map((l) => (
        <a key={l.name} href={l.href} aria-label={l.label} title={l.label}
          target={l.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 text-gray-700 transition hover:-translate-y-1 hover:bg-sky-500 hover:text-white dark:bg-gray-800 dark:text-gray-300">
          <Icon name={l.name} size={20} />
        </a>
      ))}
    </div>
  )
}
