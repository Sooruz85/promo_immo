'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { logout, isAuthenticated } from '@/lib/auth';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const isHomePage = pathname === '/';

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="border-b border-gray-100 bg-white sticky top-0 z-50 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => router.push('/')}
              className="text-xl font-semibold text-text-primary hover:text-blue-600 transition-colors cursor-pointer"
            >
              Résidence Les Jardins
            </button>
            <div className="flex items-center gap-4">
              {!isHomePage && (
                <button
                  onClick={() => router.push('/')}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  Accueil
                </button>
              )}
              {pathname !== '/dashboard' && pathname !== '/' && (
                <button
                  onClick={() => router.push('/dashboard')}
                  className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
                >
                  Appartements
                </button>
              )}
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
        </div>
      </nav>
      <main className="flex-1">{children}</main>
      <footer className="border-t border-gray-100 bg-soft-grey mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Résidence Les Jardins
              </h3>
              <p className="text-sm text-text-secondary">
                123 Avenue des Champs
                <br />
                75008 Paris, France
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Contact
              </h3>
              <p className="text-sm text-text-secondary space-y-2">
                <a
                  href="mailto:contact@residence-les-jardins.fr"
                  className="block hover:text-blue-600 transition-colors"
                >
                  contact@residence-les-jardins.fr
                </a>
                <a
                  href="tel:+33123456789"
                  className="block hover:text-blue-600 transition-colors"
                >
                  +33 1 23 45 67 89
                </a>
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-text-primary mb-4">
                Programme
              </h3>
              <p className="text-sm text-text-secondary">
                37 appartements disponibles
                <br />
                Du T1 au T4
              </p>
              <Link
                href="/cgv"
                className="inline-flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium mt-4"
              >
                Consulter les CGV
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-sm text-text-secondary">
              © {new Date().getFullYear()} Résidence Les Jardins. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

