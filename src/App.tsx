import { Button, Card, Container, NavBar, Footer } from "@shadcn/ui"
import './App.css';

function App() {
  return (
    <Container>
      {/* Cabeçalho */}
      <NavBar
        logo={<img src="./assets/react.svg" alt="AstraSolution Logo" />}
        links={[
          { label: 'Sobre Nós', href: '#about' },
          { label: 'Serviços', href: '#services' },
          { label: 'Contato', href: '#contact' },
        ]}
      />

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
          <Card title="Consultoria" content="Oferecemos consultoria especializada para otimizar seus processos de TI." />
          <Card title="Desenvolvimento" content="Desenvolvemos soluções personalizadas para atender às suas necessidades." />
          <Card title="Suporte" content="Nosso suporte técnico está disponível 24/7 para ajudar você." />
        </div>
      </section>

      {/* Rodapé */}
      <Footer>
        <p>© 2024 AstraSolution. Todos os direitos reservados.</p>
      </Footer>
    </Container>
  );
}

export default App;