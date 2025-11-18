'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Button from '@/components/Button';
import Input from '@/components/Input';

const stats = [
  { value: '37', label: 'Appartements exclusifs' },
  { value: '4', label: 'Typologies du T1 au T4' },
  { value: '8', label: 'Étage maximum' },
  { value: '2023', label: 'Livraison & normes RE2020' },
];

const steps = [
  {
    title: 'Diagnostic & écoute',
    description:
      'Nous comprenons vos objectifs patrimoniaux et affinons la recherche selon vos priorités.',
  },
  {
    title: 'Sélection sur mesure',
    description:
      'Plan, orientation, budget : nous construisons un dossier complet pour chaque appartement retenu.',
  },
  {
    title: 'Accompagnement complet',
    description:
      'Mise en relation avec notre agent référent, suivi des démarches et accès au back office client.',
  },
];

export default function HomePage() {
  const router = useRouter();

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
              <button
                onClick={() => router.push('/dashboard')}
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Appartements
              </button>
              <button
                onClick={() =>
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }
                className="px-4 py-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-pastel-blue to-white py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-semibold text-text-primary mb-6 leading-tight">
                  Programme Immobilier
                  <br />
                  <span className="text-blue-600">Les Jardins</span>
                </h1>
                <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                  Découvrez notre nouveau programme de 37 appartements modernes, 
                  situés dans un quartier privilégié. Des espaces de vie lumineux 
                  et bien agencés, du T1 au T4, pour répondre à tous vos besoins.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button onClick={() => router.push('/dashboard')}>
                    Découvrir les appartements
                  </Button>
                </div>
              </div>
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-soft-lg">
                <Image
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop&q=80"
                  alt="Résidence Les Jardins"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-white -mt-16 relative z-10">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white rounded-2xl shadow-soft p-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-semibold text-text-primary">
                    {stat.value}
                  </p>
                  <p className="text-sm text-text-secondary mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-soft-grey">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-semibold text-text-primary mb-4">
                Un programme pensé pour vous
              </h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Des appartements modernes avec des prestations de qualité
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="w-12 h-12 bg-pastel-blue rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  37 Appartements
                </h3>
                <p className="text-text-secondary">
                  Du T1 au T4, des surfaces adaptées à tous les projets de vie
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="w-12 h-12 bg-pastel-blue rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
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
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Lumineux & Orientés
                </h3>
                <p className="text-text-secondary">
                  Des appartements bénéficiant d'une orientation optimale et d'une luminosité naturelle
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-soft">
                <div className="w-12 h-12 bg-pastel-blue rounded-xl flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Prestations de Qualité
                </h3>
                <p className="text-text-secondary">
                  Ascenseur, parking, jardin et équipements modernes inclus
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Parcours client */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-semibold text-text-primary mb-4">
                  Un accompagnement structuré
                </h2>
                <p className="text-text-secondary mb-8">
                  Nous appliquons la méthode Helping Clients Succeed pour
                  sécuriser votre décision et fluidifier chaque étape.
                </p>
                <div className="space-y-6">
                  {steps.map((step, index) => (
                    <div key={step.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-pastel-blue text-blue-700 flex items-center justify-center font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-text-primary">
                          {step.title}
                        </h3>
                        <p className="text-text-secondary text-sm">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-white to-pastel-blue/60 rounded-2xl p-10 shadow-soft-lg">
                <h3 className="text-2xl font-semibold text-text-primary mb-4">
                  Résidence Les Jardins en bref
                </h3>
                <ul className="space-y-4 text-text-secondary">
                  <li>• Architecture contemporaine et halls conçus par un studio parisien</li>
                  <li>• Certifié RE2020 avec solutions domotiques intégrées</li>
                  <li>• Espaces verts privatifs, potager partagé et rooftop pour les résidents</li>
                  <li>• Parking sécurisé, bornes de recharge et local vélos</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-soft-grey" id="contact">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-10 shadow-soft-lg grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-semibold text-text-primary mb-4">
                  Prêt à être recontacté ?
                </h2>
                <p className="text-text-secondary mb-6">
                  Expliquez-nous votre projet, nous vous proposerons une
                  sélection d’appartements en moins de 24h.
                </p>
                <div className="space-y-3 text-sm text-text-secondary">
                  <p>• Visites privées sur rendez-vous</p>
                  <p>• Dossier numérique complet (plans, vues 3D, budgets)</p>
                  <p>• Accès direct à l’agent référent</p>
                </div>
              </div>
              <div className="space-y-4">
                <Input placeholder="Nom complet" />
                <Input placeholder="Email professionnel" type="email" />
                <Input placeholder="Téléphone" type="tel" />
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Votre projet en quelques mots..."
                />
                <Button onClick={() => router.push('/dashboard')}>
                  Découvrir la sélection
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
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

