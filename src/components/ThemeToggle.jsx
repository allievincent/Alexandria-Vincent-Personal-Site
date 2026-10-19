import Icon from './Icon.jsx'

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button onClick={onToggle} aria-label="Toggle dark mode"
      className="rounded-full p-2 text-gray-600 transition hover:bg-gray-100 hover:text-sky-500 dark:text-gray-300 dark:hover:bg-gray-800">
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
    </button>
  )
}
