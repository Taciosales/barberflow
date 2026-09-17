import { createRootRoute, Outlet, Link } from '@tanstack/react-router';

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-wrap gap-6">
          <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 [&.active]:text-blue-600">
            Planos
          </Link>
          <Link to="/dashboard" className="text-sm font-medium text-gray-500 hover:text-gray-900 [&.active]:text-blue-600">
            Dashboard
          </Link>
          <Link to="/disponibilidade" className="text-sm font-medium text-gray-500 hover:text-gray-900 [&.active]:text-blue-600">
            Disponibilidade
          </Link>
        </div>
      </header>
      <div className="flex-1 flex flex-col">
        <Outlet />
      </div>
    </div>
  ),
});
