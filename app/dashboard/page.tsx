'use client';

import Layout from '@/components/Layout';
import Card from '@/components/Card';
import { apartments } from '@/data/apartments';

export default function DashboardPage() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-text-primary mb-2">
            Programme Immobilier
          </h1>
          <p className="text-text-secondary">
            Découvrez nos 37 appartements disponibles
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {apartments.map((apartment) => (
            <Card key={apartment.id} apartment={apartment} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

