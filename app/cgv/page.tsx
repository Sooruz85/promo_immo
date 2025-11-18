'use client';

import Link from 'next/link';

const sections = [
  {
    title: '1. Objet',
    content:
      'Les présentes conditions générales de vente (CGV) régissent la commercialisation des appartements du programme Résidence Les Jardins. Elles définissent le cadre contractuel applicable entre le promoteur et l’acquéreur pour toute réservation ou vente en l’état futur d’achèvement (VEFA).',
  },
  {
    title: '2. Prix et modalités de paiement',
    content:
      'Les prix indiqués sur le tableau de lots sont exprimés en euros TTC. Ils comprennent la quote-part des parties communes et le stationnement associé lorsque précisé. Le paiement suit l’échéancier légal VEFA: 5% à la réservation, 30% à l’achèvement des fondations, 35% à la mise hors d’eau, 25% à l’achèvement des travaux et 5% à la livraison.',
  },
  {
    title: '3. Réservation',
    content:
      'Toute réservation devient effective après signature d’un contrat de réservation et versement du dépôt de garantie sur compte séquestre. L’acquéreur dispose d’un délai légal de rétractation de 10 jours ouvrés.',
  },
  {
    title: '4. Livraison',
    content:
      'La date prévisionnelle de livraison est fixée au 4e trimestre 2025. Elle pourra être ajustée en cas de force majeure ou de retard des entreprises sous-traitantes. L’acquéreur sera informé par courrier recommandé de toute modification significative du calendrier.',
  },
  {
    title: '5. Garanties',
    content:
      'Chaque lot bénéficie des garanties légales : garantie de parfait achèvement (1 an), garantie biennale (2 ans) et garantie décennale (10 ans). Les équipements électroménagers sont couverts par la garantie constructeur.',
  },
  {
    title: '6. Données personnelles',
    content:
      'Les informations collectées via les formulaires de contact sont utilisées pour analyser les besoins des prospects et préparer les dossiers de réservation. Elles sont conservées pour une durée maximale de 24 mois et ne sont jamais cédées à des tiers sans consentement.',
  },
  {
    title: '7. Service client',
    content:
      'Pour toute question relative aux CGV ou au suivi de votre dossier, vous pouvez contacter notre service client par email à contact@residence-les-jardins.fr ou au +33 1 23 45 67 89 du lundi au vendredi, 9h-18h.',
  },
];

export default function CgvPage() {
  return (
    <div className="min-h-screen bg-soft-grey py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-soft-lg p-8 space-y-8">
        <div className="space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-blue-600">
            Conditions Générales de Vente
          </p>
          <h1 className="text-4xl font-semibold text-text-primary">
            Résidence Les Jardins
          </h1>
          <p className="text-text-secondary">
            Document contractuel mis à jour le {new Date().toLocaleDateString('fr-FR')}.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section) => (
            <div key={section.title} className="space-y-2">
              <h2 className="text-xl font-semibold text-text-primary">
                {section.title}
              </h2>
              <p className="text-text-secondary leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-pastel-blue/50 rounded-2xl p-6 text-center space-y-3">
          <p className="text-text-secondary">
            Ce document est fourni à titre indicatif. Une version signée fera foi lors de la réservation.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-700 font-medium hover:text-blue-800 transition-colors"
          >
            Retour à la présentation
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
                d="M5 12h14M5 12l6-6m-6 6l6 6"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

