// 37 appartements avec données mockées (déterministes pour éviter les erreurs d'hydratation)
const apartmentTypes = ['T1', 'T2', 'T3', 'T4'];
const floors = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const availabilities = ['Disponible', 'Réservé', 'Vendu'];
const orientations = ['Nord', 'Sud', 'Est', 'Ouest', 'Nord-Est', 'Sud-Ouest'];

// IDs Unsplash pour varier les images d'appartements
const apartmentImageIds = [
  '1522708323590-d24dbb6b0267', // Appartement moderne
  '1560448204-e02f11c3d0e2', // Intérieur lumineux
  '1560448075-2c5d5b7b5b5b', // Salon design
  '1556911220-bff31c812a09', // Appartement contemporain
  '1554995207-c18c40660263', // Intérieur minimaliste
  '1556911220-e15b29be8c77', // Appartement moderne
  '1556911220-bff31c812a09', // Design intérieur
  '1560448204-e02f11c3d0e2', // Espace de vie
  '1522708323590-d24dbb6b0267', // Appartement design
  '1554995207-c18c40660263', // Intérieur épuré
];

// IDs Unsplash pour les plans architecturaux
const planImageIds = [
  '1484154218962-a197022b5858', // Plan architectural
  '1484154218962-a197022b5858', // Plan de construction
  '1484154218962-a197022b5858', // Dessin technique
  '1484154218962-a197022b5858', // Plan d'étage
  '1484154218962-a197022b5858', // Architecture
];

// Fonction déterministe pour générer des valeurs pseudo-aléatoires basées sur un seed
const seededRandom = (seed) => {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
};

const generateApartments = () => {
  const apartments = [];
  
  for (let i = 1; i <= 37; i++) {
    // Utiliser l'index comme seed pour garantir la reproductibilité
    const seed = i * 12345; // Multiplicateur pour varier les résultats
    
    const type = apartmentTypes[Math.floor(seededRandom(seed) * apartmentTypes.length)];
    const floor = floors[Math.floor(seededRandom(seed + 1) * floors.length)];
    const availability = availabilities[Math.floor(seededRandom(seed + 2) * availabilities.length)];
    const orientation = orientations[Math.floor(seededRandom(seed + 3) * orientations.length)];
    
    // Surfaces réalistes selon le type
    const surfaceMap = {
      'T1': [25, 35],
      'T2': [40, 55],
      'T3': [60, 80],
      'T4': [85, 110],
    };
    const [minSurface, maxSurface] = surfaceMap[type];
    const surface = Math.floor(seededRandom(seed + 4) * (maxSurface - minSurface + 1)) + minSurface;
    
    // Prix selon surface et type
    const pricePerSqm = 3500 + Math.floor(seededRandom(seed + 5) * 1000);
    const price = surface * pricePerSqm;
    
    apartments.push({
      id: i,
      number: `A${String(i).padStart(3, '0')}`,
      surface,
      type,
      floor,
      availability,
      price,
      orientation,
      // Images Unsplash - variation avec l'index pour diversité
      thumbnail: `https://images.unsplash.com/photo-${apartmentImageIds[i % apartmentImageIds.length]}?w=400&h=300&fit=crop&q=80`,
      plan: `https://images.unsplash.com/photo-${planImageIds[i % planImageIds.length]}?w=800&h=600&fit=crop&q=80`,
      description: `Appartement ${type} situé au ${floor === 0 ? 'rez-de-chaussée' : floor + 'ème étage'}, orienté ${orientation}. Lumineux et bien agencé, cet appartement offre un espace de vie optimisé avec une vue dégagée.`,
      measurements: {
        salon: `${Math.floor(surface * 0.35)} m²`,
        chambre1: `${Math.floor(surface * 0.20)} m²`,
        chambre2: type !== 'T1' ? `${Math.floor(surface * 0.15)} m²` : null,
        chambre3: type === 'T3' || type === 'T4' ? `${Math.floor(surface * 0.12)} m²` : null,
        chambre4: type === 'T4' ? `${Math.floor(surface * 0.10)} m²` : null,
        cuisine: `${Math.floor(surface * 0.12)} m²`,
        salleDeBain: `${Math.floor(surface * 0.08)} m²`,
        wc: `${Math.floor(surface * 0.03)} m²`,
      },
      building: {
        name: 'Résidence Les Jardins',
        address: '123 Avenue des Champs, 75008 Paris',
        year: 2023,
        floors: 8,
        elevator: true,
        parking: true,
        garden: true,
      },
    });
  }
  
  return apartments;
};

export const apartments = generateApartments();

