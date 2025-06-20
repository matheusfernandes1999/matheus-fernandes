// app/portfolio/financeiro/page.tsx
import Link from 'next/link';

export default function FinanceiroPage() {
  return (
    <div className="min-h-screen bg-background text-text-primary flex flex-col items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold text-primary-accent mb-6">Página Exemplo: Soluções Financeiras</h1>
        <p className="text-lg text-text-secondary mb-8">
          Esta é uma demonstração de uma página para um site do setor financeiro. Aqui seriam apresentadas soluções, serviços e informações relevantes para clientes e investidores.
        </p>
        <Link href="/#projetos" className="inline-block bg-secondary-accent text-background font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-secondary-accent/80 transition-colors duration-300">
          Voltar aos Projetos
        </Link>
      </div>
    </div>
  );
}
