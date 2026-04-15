import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeading = ({ badge, title, description, center = true }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className={`mb-12 ${center ? "text-center" : ""}`}
  >
    {badge && (
      <span className="inline-block rounded-full bg-blue-light px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
    {description && (
      <p className="mt-4 max-w-2xl text-muted-foreground leading-relaxed mx-auto">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
