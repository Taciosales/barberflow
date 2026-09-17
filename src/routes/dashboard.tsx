import { createFileRoute } from '@tanstack/react-router';
import { useState, useEffect } from 'react';

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
});

function DashboardPage() {
  const [subscriptions, setSubscriptions] = useState([
    { id: '1', user: 'Ana Paula', plan: 'Mensal', status: 'Ativo' },
    { id: '2', user: 'Carlos Silva', plan: 'Anual', status: 'Ativo' },
    { id: '3', user: 'Roberto Souza', plan: 'Mensal', status: 'Inadimplente' },
    { id: '4', user: 'Fernanda Lima', plan: 'Anual', status: 'Cancelado' }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Painel do Dono</h1>
          <div className="flex items-center space-x-2 text-sm text-gray-500 bg-white px-4 py-2 rounded-lg border shadow-sm">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span>Tempo Real (Mock)</span>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg">
          <p className="text-sm text-blue-700">
            <strong>Aviso:</strong> A estrutura do banco de dados não pôde ser lida nesta iteração. 
            Os status abaixo são dados simulados para demonstrar a interface.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Status de Assinaturas</h2>
          </div>
          <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-4 px-6 font-medium text-gray-600 border-b">Usuário</th>
                  <th className="py-4 px-6 font-medium text-gray-600 border-b">Plano</th>
                  <th className="py-4 px-6 font-medium text-gray-600 border-b">Status Atual</th>
                </tr>
              </thead>
              <tbody>
                {subscriptions.map((sub) => (
                  <tr key={sub.id} className="hover:bg-gray-50 transition-colors border-b last:border-0">
                    <td className="py-4 px-6 text-gray-900">{sub.user}</td>
                    <td className="py-4 px-6 text-gray-600">{sub.plan}</td>
                    <td className="py-4 px-6">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium
                        ${sub.status === 'Ativo' ? 'bg-green-100 text-green-800' : ''}
                        ${sub.status === 'Inadimplente' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${sub.status === 'Cancelado' ? 'bg-red-100 text-red-800' : ''}
                      `}>
                        {sub.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}