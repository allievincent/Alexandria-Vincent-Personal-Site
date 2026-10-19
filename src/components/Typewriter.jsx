import { useEffect, useState } from 'react'

// typing effect - idea from andrejdeveloper.com, logic from a react tutorial
export default function Typewriter({ words }) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIndex % words.length]
    let timer

    if (!deleting && text === current) {
      timer = setTimeout(() => setDeleting(true), 1500)
    } else if (deleting && text === '') {
      setDeleting(false)
      setWordIndex(wordIndex + 1)
    } else {
      timer = setTimeout(() => {
        setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1))
      }, deleting ? 40 : 90)
    }
    return () => clearTimeout(timer)
  }, [text, deleting, wordIndex, words])

  return (
    <span>
      {text}
      <span className="cursor text-sky-500">|</span>
    </span>
  )
}
