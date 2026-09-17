import { createFileRoute } from '@tanstack/react-router';
import { useState } from 'react';
import { Store, Clock } from 'lucide-react';

export const Route = createFileRoute('/disponibilidade')({
  component: DisponibilidadePage,
});

function DisponibilidadePage() {
  const [isOpen, setIsOpen] = useState(true);

  const times = [
    '09:00', '09:30', '10:00', '10:30', 
    '11:00', '11:30', '13:00', '13:30', 
    '14:00', '14:30', '15:00', '15:30', 
    '16:00', '16:30', '17:00', '17:30'
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 flex flex-col items-center">
      <div className="w-full max-w-4xl">
        <div className="flex items-center gap-3 mb-8">
          <Store className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Agenda da Barbearia</h1>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-6 border-b border-gray-200 bg-gray-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Status Operacional</h2>
              <p className="text-sm text-gray-500 mt-1">
                Congele o recebimento de novos agendamentos sem apagar os horários criados.
              </p>
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all shadow-sm
                ${isOpen 
                  ? 'bg-green-50 text-green-700 hover:bg-green-100 border border-green-200' 
                  : 'bg-red-50 text-red-700 hover:bg-red-100 border border-red-200'
                }`}
            >
              <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`}></div>
              {isOpen ? 'Aberto (Recebendo)' : 'Fechado (Pausado)'}
            </button>
          </div>

          <div className="p-6">
            <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-gray-400" />
              Horários de Hoje
            </h3>
            
            {isOpen ? (
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                {times.map((time) => (
                  <button 
                    key={time} 
                    className="p-3 border border-gray-200 rounded-lg text-center font-medium text-gray-700 bg-white hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors"
                  >
                    {time}
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-16 flex flex-col items-center justify-center text-center bg-gray-50 rounded-xl border-2 border-dashed border-gray-200">
                <Store className="w-16 h-16 text-gray-300 mb-4" />
                <h4 className="text-lg font-semibold text-gray-700 mb-1">Barbearia Fechada</h4>
                <p className="text-gray-500 max-w-sm">
                  Os horários estão temporariamente ocultos para novos clientes. 
                  Abra a barbearia novamente para voltar a receber agendamentos.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
