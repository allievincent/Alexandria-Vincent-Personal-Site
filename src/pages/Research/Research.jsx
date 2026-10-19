import FadeIn from '../../components/FadeIn.jsx'
import Button from '../../components/Button.jsx'

const steps = [
  { label: 'Host logs + network flows', note: 'TON_IoT' },
  { label: 'Decision tree for each', note: 'per data type' },
  { label: 'Calibration', note: 'fixes the ties' },
  { label: 'Fusion', note: 'GPT-4o vs. baselines' },
]

export default function Research() {
  return (
    <div className="pt-16">
      <section className="bg-sky-600 py-20 text-white dark:bg-sky-900">
        <div className="mx-auto max-w-4xl px-6">
          <p className="font-code text-sky-100">// research project</p>
          <h1 className="mt-3 text-4xl font-bold md:text-5xl">LLM-Assisted Intrusion Detection</h1>
          <p className="mt-4 max-w-2xl text-lg text-sky-50">
            Undergraduate research at Villanova University, June 2026 - present. Paper in preparation.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['Python', 'scikit-learn', 'pandas', 'GPT-4o', 'Statistics'].map((t) => (
              <span key={t} className="rounded-full bg-white/20 px-3 py-1 text-sm">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <FadeIn>
          <h2 className="text-2xl font-bold">How it works</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.label} className="relative rounded-xl border border-gray-200 bg-white p-5 text-center dark:border-gray-800 dark:bg-[#16191f]">
                <span className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-sm font-bold text-white">{i + 1}</span>
                <p className="font-semibold">{s.label}</p>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{s.note}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-14 space-y-12 text-gray-600 dark:text-gray-400">
          <FadeIn>
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100">The question</h2>
            <p>
              Most intrusion detection systems look at one kind of data. But attacks show up in more than one place,
              like on the host machine and on the network, so combining both should help. LLMs seem like a good way
              to combine them because they can reason about conflicting evidence and explain why. I wanted to find out
              when that actually helps and when it hurts.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100">Building the dataset</h2>
            <p>
              I wrote a Python pipeline that lines up Windows host logs and network-flow data from the TON_IoT dataset
              into 21,000+ paired events across seven attack classes. Each type of data gets its own decision-tree
              detector. I split train and test by attack episode, because otherwise almost-identical events end up on
              both sides and the accuracy looks way better than it really is.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100">The tie problem</h2>
            <p>
              The decision trees were really overconfident, and their probabilities tied on almost a third of all the
              fusion decisions. That meant any method combining them was basically guessing on those cases. I designed
              a probability calibration method that got rid of every tie without losing any accuracy.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100">Testing GPT-4o</h2>
            <p>
              I ran controlled experiments comparing GPT-4o fusion to mechanical and learned baselines (19,000+ API
              calls). I also tested how much the answers change when you reword the prompt or change the order of the
              evidence, since those shouldn't matter but sometimes do. Results are reported with bootstrap confidence
              intervals and McNemar significance tests.
            </p>
          </FadeIn>

          <FadeIn>
            <h2 className="mb-3 text-2xl font-bold text-gray-800 dark:text-gray-100">What's next</h2>
            <p>
              We're writing this up as a conference paper. I'm a co-author and I'm responsible for the methodology,
              results, and reproducibility documentation.
            </p>
          </FadeIn>
        </div>

        <div className="mt-14 flex flex-wrap gap-4">
          <Button to="/">← Back to home</Button>
          <Button href="mailto:avince04@villanova.edu" variant="outline">Ask me about it</Button>
        </div>
      </div>
    </div>
  )
}
