'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { authenticate, setSession, isAuthenticated } from '@/lib/auth';
import Button from '@/components/Button';
import Input from '@/components/Input';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    const user = authenticate(email, password);

    if (user) {
      setSession(user);
      router.push('/dashboard');
    } else {
      setError('Email ou mot de passe incorrect');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-soft-grey flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-soft-lg w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-semibold text-text-primary mb-2">
            Résidence Les Jardins
          </h1>
          <p className="text-text-secondary">
            Connectez-vous pour accéder au programme
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="admin@example.com"
            required
          />

          <Input
            label="Mot de passe"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-xl p-4">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Connexion...' : 'Se connecter'}
          </Button>
        </form>

        <div className="mt-6 p-4 bg-pastel-blue rounded-xl">
          <p className="text-xs text-text-secondary text-center">
            <strong>Comptes de test :</strong>
            <br />
            admin@example.com / admin123
            <br />
            client@example.com / client123
          </p>
        </div>
      </div>
    </div>
  );
}

