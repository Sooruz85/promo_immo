'use client';

import { useRouter } from 'next/navigation';
import { logout, isAuthenticated } from '@/lib/auth';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-text-primary">
                Résidence Les Jardins
              </h1>
            </div>
            {isAuthenticated() && (
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Déconnexion
              </button>
            )}
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}

