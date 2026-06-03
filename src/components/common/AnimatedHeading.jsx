import { motion } from 'framer-motion'

/**
 * Word-by-word masked reveal for editorial headlines.
 * Pass the text as a string; words animate up from a clipped baseline.
 */
export default function AnimatedHeading({
  text,
  className = '',
  delay = 0,
  once = true,
  as = 'h2',
}) {
  const words = text.split(' ')
  const MotionTag = motion[as] || motion.h2

  return (
    <MotionTag
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.4 }}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      className={className}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-bottom">
          <motion.span
            className="inline-block"
            variants={{
              hidden: { y: '110%' },
              show: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
            }}
          >
            {w}
            {i < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}
