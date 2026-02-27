import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-end justify-start overflow-hidden">
      {/* Full-bleed background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Canecas de alumínio suspensas por fios azuis"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />
      </div>

      {/* Content — bottom-left aligned for editorial feel */}
      <div className="relative z-10 px-8 md:px-16 pb-20 md:pb-28 max-w-3xl">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-6"
        >
          O Inventário do Mundo
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl font-light leading-[0.9] mb-6 text-foreground"
        >
          Arthur Bispo
          <br />
          <span className="italic font-light text-gradient-blue">do Rosário</span>
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, delay: 1.2 }}
          className="line-separator w-64 origin-left mb-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="font-display text-xl md:text-2xl italic text-muted-foreground max-w-lg leading-relaxed"
        >
          A gente reparava nele e via um homem só, de fatiota azul de interno, mas ele 
estava era cerzindo o mundo. Conheça a lida de Arthur Bispo do Rosário, que catou os restos 
de tudo para apresentar a Deus no dia da derradeira travessia. Onde o juízo faltou, sobrou o 
sublime.
        </motion.p>
      </div>

      {/* Scroll indicator — bottom center */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Adentrar
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-primary/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
