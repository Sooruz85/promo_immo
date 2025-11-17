'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { isAuthenticated } from '@/lib/auth';
import Layout from '@/components/Layout';
import Button from '@/components/Button';
import Modal from '@/components/Modal';
import { apartments } from '@/data/apartments';

export default function ApartmentDetailPage() {
  const router = useRouter();
  const params = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
    }
  }, [router]);

  if (!isAuthenticated()) {
    return null;
  }

  const apartmentId = parseInt(params.id as string);
  const apartment = apartments.find((apt) => apt.id === apartmentId);

  if (!apartment) {
    return (
      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-text-primary mb-4">
              Appartement introuvable
            </h1>
            <Button onClick={() => router.push('/dashboard')}>
              Retour au dashboard
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'Disponible':
        return 'bg-green-100 text-green-800';
      case 'Réservé':
        return 'bg-yellow-100 text-yellow-800';
      case 'Vendu':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Button
          variant="outline"
          onClick={() => router.push('/dashboard')}
          className="mb-6"
        >
          ← Retour
        </Button>

        <div className="bg-white rounded-2xl shadow-soft overflow-hidden mb-8">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div>
              <div className="relative h-96 w-full mb-4 rounded-xl overflow-hidden">
                <Image
                  src={apartment.plan}
                  alt={`Plan de l'appartement ${apartment.number}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-semibold text-text-primary mb-2">
                    {apartment.number}
                  </h1>
                  <p className="text-xl text-text-secondary">{apartment.type}</p>
                </div>
                <span
                  className={`px-4 py-2 rounded-full text-sm font-medium ${getAvailabilityColor(
                    apartment.availability
                  )}`}
                >
                  {apartment.availability}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center text-text-secondary">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                  <span className="font-medium">{apartment.surface} m²</span>
                </div>

                <div className="flex items-center text-text-secondary">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                  <span>
                    {apartment.floor === 0
                      ? 'Rez-de-chaussée'
                      : `${apartment.floor}ème étage`}
                  </span>
                </div>

                <div className="flex items-center text-text-secondary">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                  <span>Orienté {apartment.orientation}</span>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <p className="text-3xl font-semibold text-text-primary">
                    {formatPrice(apartment.price)}
                  </p>
                </div>
              </div>

              <Button
                onClick={() => setIsModalOpen(true)}
                className="w-full"
                disabled={apartment.availability === 'Vendu'}
              >
                Contacter l'agent
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Description
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {apartment.description}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-8">
            <h2 className="text-xl font-semibold text-text-primary mb-6">
              Mesures
            </h2>
            <div className="space-y-3">
              {Object.entries(apartment.measurements).map(
                ([key, value]) =>
                  value && (
                    <div
                      key={key}
                      className="flex justify-between items-center py-2 border-b border-gray-50"
                    >
                      <span className="text-text-secondary capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="font-medium text-text-primary">
                        {value}
                      </span>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-2xl shadow-soft p-8">
          <h2 className="text-xl font-semibold text-text-primary mb-6">
            Informations sur le bâtiment
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-sm text-text-secondary mb-1">Nom</p>
              <p className="font-medium text-text-primary">
                {apartment.building.name}
              </p>
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-1">Adresse</p>
              <p className="font-medium text-text-primary">
                {apartment.building.address}
              </p>
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-1">Année</p>
              <p className="font-medium text-text-primary">
                {apartment.building.year}
              </p>
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-1">Équipements</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {apartment.building.elevator && (
                  <span className="px-3 py-1 bg-pastel-blue text-blue-700 rounded-full text-sm">
                    Ascenseur
                  </span>
                )}
                {apartment.building.parking && (
                  <span className="px-3 py-1 bg-pastel-blue text-blue-700 rounded-full text-sm">
                    Parking
                  </span>
                )}
                {apartment.building.garden && (
                  <span className="px-3 py-1 bg-pastel-blue text-blue-700 rounded-full text-sm">
                    Jardin
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        apartmentNumber={apartment.number}
      />
    </Layout>
  );
}

