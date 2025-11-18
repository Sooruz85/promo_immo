'use client';

import { useEffect } from 'react';
import Button from './Button';
import Input from './Input';
import { useState } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  apartmentNumber: string;
}

const INITIAL_FORM = {
  name: '',
  email: '',
  phone: '',
  company: '',
  budget: '',
  timeframe: '',
  message: '',
  consent: false,
};

export default function Modal({ isOpen, onClose, apartmentNumber }: ModalProps) {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^[0-9+\s-]+$/.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Merci de préciser votre société';
    }

    if (!formData.budget) {
      newErrors.budget = 'Sélectionnez une fourchette de budget';
    }

    if (!formData.timeframe) {
      newErrors.timeframe = 'Indiquez votre délai souhaité';
    }

    if (!formData.consent) {
      newErrors.consent = "Merci d'accepter notre politique de confidentialité";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validate()) {
      const contactData = {
        ...formData,
        apartmentNumber,
        timestamp: new Date().toISOString(),
      };
      console.log('Données de contact:', contactData);
      setStatus('success');
      setFormData(INITIAL_FORM);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  if (status === 'success') {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
        onClick={() => {
          setStatus('idle');
          onClose();
        }}
      >
        <div
          className="bg-white rounded-2xl shadow-soft-lg max-w-md w-full p-8 text-center space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold text-text-primary">
            Demande envoyée
          </h2>
          <p className="text-text-secondary">
            Notre équipe vous recontactera sous 24h avec les informations
            détaillées sur {apartmentNumber}.
          </p>
          <Button onClick={() => {
            setStatus('idle');
            onClose();
          }}>
            Fermer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-soft-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-text-primary">
              Contacter l'agent
            </h2>
            <button
              onClick={onClose}
              className="text-text-secondary hover:text-text-primary transition-colors"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <p className="text-sm text-text-secondary mb-6">
            Appartement concerné : <strong>{apartmentNumber}</strong>
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <Input
              label="Nom complet"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Jean Dupont"
            />

            <Input
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="jean.dupont@example.com"
            />

            <Input
              label="Société"
              name="company"
              value={formData.company}
              onChange={handleChange}
              error={errors.company}
              placeholder="Entreprise / Investisseur"
            />

            <Input
              label="Téléphone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="+33 6 12 34 56 78"
            />

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Fourchette budgétaire
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.budget
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                  } focus:outline-none focus:ring-2 transition-colors bg-white`}
                >
                  <option value="">Sélectionner</option>
                  <option value="200k-400k">200k€ - 400k€</option>
                  <option value="400k-600k">400k€ - 600k€</option>
                  <option value="600k-800k">600k€ - 800k€</option>
                  <option value="800k+">800k€ et +</option>
                </select>
                {errors.budget && (
                  <p className="mt-1 text-sm text-red-600">{errors.budget}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary mb-2">
                  Délai souhaité
                </label>
                <select
                  name="timeframe"
                  value={formData.timeframe}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-xl border ${
                    errors.timeframe
                      ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
                      : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500'
                  } focus:outline-none focus:ring-2 transition-colors bg-white`}
                >
                  <option value="">Sélectionner</option>
                  <option value="immédiat">Immédiat</option>
                  <option value="3-mois">Sous 3 mois</option>
                  <option value="6-mois">Sous 6 mois</option>
                  <option value="+6-mois">Au-delà de 6 mois</option>
                </select>
                {errors.timeframe && (
                  <p className="mt-1 text-sm text-red-600">{errors.timeframe}</p>
                )}
              </div>
            </div>

            <div className="w-full">
              <label className="block text-sm font-medium text-text-primary mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors resize-none"
                placeholder="Votre message..."
              />
            </div>

            <label className="flex items-center gap-3 text-sm text-text-secondary">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    consent: e.target.checked,
                  }))
                }
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span>
                J’accepte que mes données soient utilisées pour être recontacté(e) au sujet de cet appartement.
              </span>
            </label>
            {errors.consent && (
              <p className="text-sm text-red-600">{errors.consent}</p>
            )}

            <div className="flex gap-3 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                className="flex-1"
              >
                Annuler
              </Button>
              <Button type="submit" className="flex-1">
                Envoyer
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

