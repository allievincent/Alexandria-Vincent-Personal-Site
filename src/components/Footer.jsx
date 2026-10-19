import SocialIcons from './SocialIcons.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-10 dark:border-gray-800 dark:bg-[#0b0c10]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center">
        <SocialIcons />
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Allie Vincent · Built with React + Tailwind · Go Nova! 💙
        </p>
      </div>
    </footer>
  )
}
