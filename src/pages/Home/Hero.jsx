import Typewriter from '../../components/Typewriter.jsx'
import Button from '../../components/Button.jsx'
import SocialIcons from '../../components/SocialIcons.jsx'
import { profile } from '../../data/profile.js'

export default function Hero() {
  return (
    <section id="home" className="flex min-h-screen items-center pt-16">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div className="order-2 text-center md:order-1 md:text-left">
          <p className="text-lg font-medium text-sky-600 dark:text-sky-400">Hello world! <span className="wave">👋</span></p>
          <h1 className="mt-2 text-5xl font-extrabold leading-tight md:text-6xl">
            I'm <span className="text-sky-500">Allie Vincent</span>
          </h1>
          <p className="mt-4 h-8 font-code text-xl text-gray-600 dark:text-gray-300 md:text-2xl">
            <Typewriter words={profile.typing} />
          </p>
          <p className="mt-6 max-w-lg text-gray-600 dark:text-gray-400 md:max-w-none">
            I'm a computer science student in Villanova's 5-year BS/MS program with a minor in cybersecurity,
            and a goalkeeper on the women's soccer team. Right now I'm researching how LLMs can help with
            intrusion detection.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
            <Button href={profile.resume} download>Download Resume</Button>
            <Button href="#contact" variant="outline">Contact Me</Button>
          </div>
          <SocialIcons className="mt-8 justify-center md:justify-start" />
        </div>

        <div className="order-1 flex justify-center md:order-2">
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-full border-4 border-sky-400" />
            <img src={profile.photo} alt="Allie Vincent in a Villanova shirt"
              className="relative h-64 w-64 rounded-full bg-gray-200 object-cover object-top md:h-80 md:w-80" />
          </div>
        </div>
      </div>
    </section>
  )
}
