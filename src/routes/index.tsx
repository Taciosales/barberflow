import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: PlansPage,
});

function PlansPage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Escolha o seu Plano</h1>
      
      <div className="grid w-full max-w-4xl grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 flex flex-col hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Mensal</h2>
          <p className="text-gray-500 mb-6">Acesso completo faturado mês a mês.</p>
          <div className="text-4xl font-bold text-gray-900 mb-6">
            R$ 29,90<span className="text-lg font-normal text-gray-500">/mês</span>
          </div>
          <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
            Assinar Mensal
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-blue-200 p-8 flex flex-col relative hover:shadow-md transition-shadow">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            Mais Popular
          </div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Anual</h2>
          <p className="text-gray-500 mb-6">Nossa melhor oferta, pague por 10 meses e leve 12.</p>
          <div className="text-4xl font-bold text-gray-900 mb-6">
            R$ 299,00<span className="text-lg font-normal text-gray-500">/ano</span>
          </div>
          <button className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors">
            Assinar Anual
          </button>
        </div>
      </div>
    </div>
  );
}