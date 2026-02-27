import { motion } from "framer-motion";

const FooterSection = () => {
  return (
    <footer className="relative py-32 px-6 bg-grain">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="line-separator w-32 mx-auto mb-16" />

          <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl font-light italic text-foreground leading-relaxed mb-6">
            "Eu preciso destas palavras para que elas me salvem."
          </blockquote>

          <p className="font-body text-sm tracking-[0.15em] uppercase text-primary mb-16">
            — Arthur Bispo do Rosário
          </p>

          <p className="font-body text-base text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Passeie por estes fios. Escute a cantiga silenciosa do Bispo. Um lugar onde as coisas do
            rés-do-chão ganham a luz das estrelas.
          </p>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-border">
          <p className="font-body text-xs text-muted-foreground/50">
            Homenagem digital a Arthur Bispo do Rosário (19011–1989)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
