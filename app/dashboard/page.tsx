'use client';

import { useState, useMemo } from 'react';
import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { apartments } from '@/data/apartments';

export default function DashboardPage() {
  const [filters, setFilters] = useState({
    type: '',
    availability: '',
    minPrice: '',
    maxPrice: '',
    minSurface: '',
    maxSurface: '',
  });

  const filteredApartments = useMemo(() => {
    return apartments.filter((apartment) => {
      if (filters.type && apartment.type !== filters.type) return false;
      if (filters.availability && apartment.availability !== filters.availability) return false;
      if (filters.minPrice && apartment.price < parseInt(filters.minPrice)) return false;
      if (filters.maxPrice && apartment.price > parseInt(filters.maxPrice)) return false;
      if (filters.minSurface && apartment.surface < parseInt(filters.minSurface)) return false;
      if (filters.maxSurface && apartment.surface > parseInt(filters.maxSurface)) return false;
      return true;
    });
  }, [filters]);

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      type: '',
      availability: '',
      minPrice: '',
      maxPrice: '',
      minSurface: '',
      maxSurface: '',
    });
  };

  const hasActiveFilters = Object.values(filters).some((value) => value !== '');

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-text-primary mb-2">
            Programme Immobilier
          </h1>
          <p className="text-text-secondary">
            {filteredApartments.length} {filteredApartments.length === 1 ? 'appartement trouvé' : 'appartements trouvés'}
            {hasActiveFilters && ` sur ${apartments.length}`}
          </p>
        </div>

        {/* Filtres */}
        <div className="bg-soft-grey rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-text-primary">Filtres</h2>
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Réinitialiser
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            <select
              value={filters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors bg-white"
            >
              <option value="">Tous les types</option>
              <option value="T1">T1</option>
              <option value="T2">T2</option>
              <option value="T3">T3</option>
              <option value="T4">T4</option>
            </select>

            <select
              value={filters.availability}
              onChange={(e) => handleFilterChange('availability', e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors bg-white"
            >
              <option value="">Toutes disponibilités</option>
              <option value="Disponible">Disponible</option>
              <option value="Réservé">Réservé</option>
              <option value="Vendu">Vendu</option>
            </select>

            <input
              type="number"
              placeholder="Prix min (€)"
              value={filters.minPrice}
              onChange={(e) => handleFilterChange('minPrice', e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors bg-white"
            />

            <input
              type="number"
              placeholder="Prix max (€)"
              value={filters.maxPrice}
              onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors bg-white"
            />

            <input
              type="number"
              placeholder="Surface min (m²)"
              value={filters.minSurface}
              onChange={(e) => handleFilterChange('minSurface', e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors bg-white"
            />

            <input
              type="number"
              placeholder="Surface max (m²)"
              value={filters.maxSurface}
              onChange={(e) => handleFilterChange('maxSurface', e.target.value)}
              className="px-4 py-2 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors bg-white"
            />
          </div>
        </div>

        {/* Grille d'appartements */}
        {filteredApartments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApartments.map((apartment) => (
              <Card key={apartment.id} apartment={apartment} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-text-secondary text-lg mb-4">
              Aucun appartement ne correspond à vos critères
            </p>
            <button
              onClick={resetFilters}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

