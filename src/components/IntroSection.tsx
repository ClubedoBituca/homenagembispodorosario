import { motion } from "framer-motion";

const IntroSection = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Full-width background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://midias-publicas.enciclopedia.itaucultural.org.br/rqfpgbr1fhq54dnkg3wc8s7mxkvr)'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/80" />
        <div className="absolute inset-0 bg-primary/3" />
      </div>

      {/* Text content */}
      <div className="relative z-10 px-8 md:px-16 py-24 md:py-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl md:text-3xl tracking-[0.3em] uppercase text-white mb-20">
            O Encomendo Maior
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="font-display text-xl md:text-3xl font-light leading-relaxed text-foreground/90 mb-12 ">
            Foi de trem ou de desatino que ele chegou na Colônia Juliano Moreira?{" "}
            <span className="text-gradient-blue">Arthur Bispo do Rosário</span> — homem de antes no mar
            e nos ringues, escuro de pele e claro de visões.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-display text-xl md:text-3xl font-light leading-relaxed text-foreground/90 mb-12 ">
            A gente sabia: ele não se tinha por artista, não senhor. Tinha era o encargo forte,
            mandado lá de Riba, de ajuntar as miudezas da terra, tudo o que há, para o Dia do
            Grande Juízo.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="font-display text-xl md:text-3xl font-light leading-relaxed text-foreground/90 mb-12">
            Lá, onde os doutores e o mundo liam a doença e o esquecimento, ele bordou a teima da
            lembrança. Fechado no quarto, ele desfez as linhas do próprio infortúnio, desfio por
            desfio, para tecer o céu e a terra inteiros de novo.{" "}
            Não era loucura de se rir; era uma precisão de salvar o mundo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
