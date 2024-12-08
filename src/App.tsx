import { Button } from "./components/ui/button";
import { Card } from "./components/ui/card";
import './App.css';

function App() {
  return (
    <div className="container">

      <header className="navbar navbar-expand-lg">
        
        <img src="/assets/react.svg" alt="AstraSolution Logo" className="logo" />
        <nav>
          <a href="#about">Sobre Nós</a>
          <a href="#services">Serviços</a>
          <a href="#contact">Contato</a>
        </nav>
      </header>

      {/* Banner Principal */}
      <section className="banner">
        <h1>Bem-vindo à AstraSolution</h1>
        <p>Sua solução tecnológica sob medida.</p>
        <Button variant="primary">Saiba Mais</Button>
      </section>

      {/* Seção de Serviços */}
      <section id="services" className="services">
        <h2>Nossos Serviços</h2>
        <div className="service-cards">
          <Card>
            <h3>Consultoria</h3>
            <p>Oferecemos consultoria especializada para otimizar seus processos de TI.</p>
          </Card>
          <Card>
            <h3>Desenvolvimento</h3>
            <p>Desenvolvemos soluções personalizadas para atender às suas necessidades.</p>
          </Card>
          <Card>
            <h3>Suporte</h3>
            <p>Nosso suporte técnico está disponível 24/7 para ajudar você.</p>
          </Card>
        </div>
      </section>

      {/* Rodapé Simples */}
      <footer className="footer">
        <p>© 2024 AstraSolution. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;