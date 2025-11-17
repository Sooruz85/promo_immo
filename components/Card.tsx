'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Apartment {
  id: number;
  number: string;
  surface: number;
  type: string;
  floor: number;
  availability: string;
  price: number;
  thumbnail: string;
}

interface CardProps {
  apartment: Apartment;
}

export default function Card({ apartment }: CardProps) {
  const router = useRouter();

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div
      onClick={() => router.push(`/apartment/${apartment.id}`)}
      className="bg-white rounded-2xl shadow-soft overflow-hidden cursor-pointer transition-all duration-200 hover:shadow-soft-lg hover:-translate-y-1"
    >
      <div className="relative h-48 w-full">
        <Image
          src={apartment.thumbnail}
          alt={`Appartement ${apartment.number}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-3 right-3">
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(
              apartment.availability
            )}`}
          >
            {apartment.availability}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-text-primary">
            {apartment.number}
          </h3>
          <span className="text-sm font-medium text-text-secondary">
            {apartment.type}
          </span>
        </div>
        <div className="space-y-1 text-sm text-text-secondary mb-3">
          <p>{apartment.surface} m²</p>
          <p>
            {apartment.floor === 0
              ? 'Rez-de-chaussée'
              : `${apartment.floor}ème étage`}
          </p>
        </div>
        <p className="text-lg font-semibold text-text-primary">
          {formatPrice(apartment.price)}
        </p>
      </div>
    </div>
  );
}

