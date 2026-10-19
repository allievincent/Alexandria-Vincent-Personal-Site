import Button from '../../components/Button.jsx'

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="text-7xl">🧤</p>
      <h1 className="mt-4 text-6xl font-extrabold text-sky-500">404</h1>
      <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">Saved! This page doesn't exist though.</p>
      <Button to="/" className="mt-8">Back to home</Button>
    </section>
  )
}
