const About = () => {
  return (
    <section id="about" className="bg-card/50">
      <div className="section-container">
        <h2 className="section-title">Sobre mim</h2>
        
        <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground animate-fade-in">
          <p className="leading-relaxed">
            Tenho <span className="text-primary font-semibold">21 anos</span>, sou 
            <span className="text-foreground font-semibold"> Desenvolvedor Full Stack</span> e estudante de
            <span className="text-foreground font-semibold"> Ciências da Computação</span>
          </p>
          
          <p className="leading-relaxed">
            Possuo experiência em <span className="text-foreground font-semibold">desenvolvimento full stack</span>, 
            com sólidos conhecimentos em HTML5, CSS3, JavaScript, PHP, Python, Bootstrap, Git, SQL, n8n e Power BI.
          </p>
          
          <p className="leading-relaxed">
            Atualmente, atuo como <span className="text-primary font-semibold">desenvolvedor full stack</span>, 
            trabalhando na criação e manutenção de aplicações, buscando otimizar a experiência do usuário 
            e a performance dos sistemas.
          </p>
          
          <p className="leading-relaxed">
            Estou cursando uma formação em <span className="text-foreground font-semibold">Análise de Dados</span>, 
            ampliando habilidades em processamento, visualização e interpretação de dados para decisões estratégicas.
          </p>
          
          <p className="leading-relaxed text-primary font-medium">
            Meu objetivo é unir desenvolvimento e análise de dados para criar soluções inovadoras e eficientes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
