import SectionTitle from '../../components/SectionTitle.jsx'
import FadeIn from '../../components/FadeIn.jsx'
import ContactForm from '../../components/ContactForm.jsx'
import Icon from '../../components/Icon.jsx'
import { profile } from '../../data/profile.js'

export default function Contact() {
  const info = [
    { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: 'linkedin', label: 'LinkedIn', value: 'alexandria-aa-vincent', href: profile.linkedin },
    { icon: 'github', label: 'GitHub', value: 'allievincent', href: profile.github },
  ]

  return (
    <section id="contact" className="bg-gray-50 py-20 dark:bg-[#13161b]">
      <div className="mx-auto max-w-5xl px-6">
        <SectionTitle title="Get In Touch" subtitle="I'm looking for internships and research opportunities. Feel free to reach out!" />
        <div className="grid gap-10 md:grid-cols-5">
          <FadeIn className="space-y-4 md:col-span-2">
            {info.map((i) => (
              <a key={i.label} href={i.href} target={i.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                className="flex items-center gap-4 rounded-xl bg-white p-4 transition hover:ring-1 hover:ring-sky-400 dark:bg-[#16191f]">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 dark:bg-sky-900/40 dark:text-sky-300">
                  <Icon name={i.icon} size={20} />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm text-gray-500 dark:text-gray-400">{i.label}</span>
                  <span className="block truncate font-medium">{i.value}</span>
                </span>
              </a>
            ))}
          </FadeIn>
          <FadeIn delay={150} className="rounded-xl bg-white p-6 dark:bg-[#16191f] md:col-span-3">
            <ContactForm />
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
