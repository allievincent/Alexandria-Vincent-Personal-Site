import { Link } from 'react-router-dom'

const styles = {
  solid: 'bg-sky-500 text-white hover:bg-sky-600',
  outline: 'border-2 border-sky-500 text-sky-600 hover:bg-sky-500 hover:text-white dark:text-sky-400 dark:hover:text-white',
}

// reusable button. pass "to" for a page, "href" for a link, or nothing for a normal button
export default function Button({ children, to, href, variant = 'solid', className = '', ...props }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition duration-300 hover:-translate-y-0.5 ${styles[variant]} ${className}`

  if (to) return <Link to={to} className={classes} {...props}>{children}</Link>
  if (href) {
    const newTab = href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {}
    return <a href={href} className={classes} {...newTab} {...props}>{children}</a>
  }
  return <button className={classes} {...props}>{children}</button>
}
