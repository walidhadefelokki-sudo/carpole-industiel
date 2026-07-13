import { ServiceItem, GalleryItem, FeedbackItem, QuoteInput, QuoteEstimate } from './types';
import imageBodywork from './assets/images/truck_bodywork_assembly_1781872797628.jpg';
import imageFrigo from './assets/images/image2.jpeg';
import imageConstantinePorteur from './assets/images/image1.jpeg';
import image1 from './assets/images/image1.jpeg';
import image3 from './assets/images/image3.jpeg';
import image4 from './assets/images/image4.jpeg';
import image5 from './assets/images/image5.jpeg';
import image6 from './assets/images/image6.jpeg';
import image7 from './assets/images/image7.jpeg';
import image8 from './assets/images/image8.jpeg';
import image9 from './assets/images/image9.jpeg';
import image10 from './assets/images/image10.jpeg';
import image11 from './assets/images/image11.jpeg';

export { imageBodywork, imageFrigo, imageConstantinePorteur };

export const servicesData: ServiceItem[] = [
  {
    id: 'carrosserie',
    title: 'Installation de Carrosserie Camion',
    description: 'Conception et montage de carrosseries industrielles robustes : fourgons isolants, plateaux ridelles et bennes renforcées.',
    longDescription: 'Nous fabriquons et assemblons des carrosseries industrielles sur-mesure adaptées à tous types de châssis de camions (petites camionnettes, porteurs moyens et poids lourds). En utilisant des panneaux isolants haute intensité et des profilés métalliques inoxydables de qualité supérieure, nous garantissons l’étanchéité, la durabilité et la résistance mécanique face aux conditions climatiques et routières d’Algérie.',
    iconName: 'Truck',
    advantages: [
      'Panneaux composites renforcés de haute densité',
      'Plancher antidérapant étanche et ultra-résistant',
      'Profilés d’angle en aluminium anodisé ou inox',
      'Homologation conforme aux normes de sécurité et de charge',
      'Garantie constructeur de 24 mois sur la structure'
    ]
  },
  {
    id: 'refrigeration',
    title: 'Installation de Groupes Frigorifiques',
    description: 'Intégration de frigos performants pour transport de denrées périssables, produits laitiers et pharmaceutiques (frais et congelé).',
    longDescription: 'Nous sommes spécialisés dans l’intégration et la maintenance de solutions de réfrigération de transport (groupes frigorifiques de grandes marques) montées sur la face avant ou en sous-châssis. Du maintien de température fraîcheur (+2°C à +4°C) au gel surgelé extrême (-20°C), nos installations respectent scrupuleusement la chaîne du froid pour la livraison logistique agroalimentaire et pharmaceutique.',
    iconName: 'Snowflake',
    advantages: [
      'Régulation de température ultra-précise par microprocesseur',
      'Moteurs thermiques ou électriques bi-énergie (Route/Secteur)',
      'Isolation thermique à très faible coefficient de conductivité',
      'Attestation de conformité technique de salubrité frigorifique',
      'Service de maintenance préventive et d’urgence 24h/7j'
    ]
  },
  {
    id: 'maintenance',
    title: 'Maintenance & Service Après-Vente',
    description: 'Réparation rapide des ponts thermiques, réparation de carrosserie endommagée et recharge en gaz frigorifique.',
    longDescription: 'Un camion immobilisé est une perte pour votre entreprise. Nous mettons à disposition un atelier complet à Constantine pour effectuer les recharges de gaz de refroidissement (R404A, R452A), la détection des fuites, le redressage de carrosserie, le remplacement des joints d’étanchéité de portes et la réparation des panneaux sandwich composites.',
    iconName: 'Wrench',
    advantages: [
      'Diagnostic technique complet informatisé',
      'Recharge écologique certifiée et réparation de compresseurs',
      'Remplacement rapide des charnières et joints de portes usés',
      'Soudure inox/aluminium professionnelle',
      'Pièces de rechange d’origine garanties'
    ]
  }
];

export const galleryData: GalleryItem[] = [
  {
    id: 'real-1',
    title: 'Montage de carrosserie isotherme',
    category: 'carrosserie',
    images: [ imageBodywork],
    description: 'Techniciens en plein assemblage de panneaux composites isolés haute densité sur un porteur rigide dans notre nouvel atelier.',
    location: 'Atelier Central, Constantine'
  },
  {
    id: 'real-2',
    title: 'Installation d’un groupe frigorifique Carrier',
    category: 'frigo',
    images: [ image4],
    description: 'Pose finale et raccordement électrique d’un système de froid négatif (-18°C) sur la cloison frontale d’un camion de distribution de produits surgelés.',
    location: 'Zone Industrielle, Constantine'
  },
  {
    id: 'real-3',
    title: 'Camion frigorifique prêt à la livraison',
    category: 'realisation',
    images: [
      image1,
      image6,
      image7
    ],
    description: 'Projet d’intégration complet (carrosserie isolée étanche + groupe de réfrigération thermo-contrôlé) livré pour une entreprise de logistique laitière nationale.',
    location: 'Hauts Plateaux, Constantine'
  },
  {
    id: 'real-4',
    title: 'Aménagement intérieur isotherme de précision',
    category: 'carrosserie',
    images: [
      image8,
      image9
    ],
    description: 'Plancher en aluminium strié étanche, rails d’arrimage et rideaux thermiques à lanières pour minimiser les pertes de frigories au déchargement.',
    location: 'Atelier de Finition, Constantine'
  },
  {
    id: 'real-5',
    title: 'Flotte de camions de distribution laitière',
    category: 'realisation',
    images: [
      image10,
      image11
    ],
    description: 'Livraison simultanée de trois gros porteurs frigorifiques équipés de cloisons amovibles multi-températures pour la distribution urbaine.',
    location: 'Constantine, Algérie'
  },
  {
    id: 'real-6',
    title: 'Flotte de camions de distribution laitière',
    category: 'realisation',
    images: [
      image3,
    ],
    description: 'Livraison simultanée de trois gros porteurs frigorifiques équipés de cloisons amovibles multi-températures pour la distribution urbaine.',
    location: 'Constantine, Algérie'
  }
];

export const reviewsData: FeedbackItem[] = [
  {
    id: 'review-1',
    author: 'Karim Benahmed',
    role: 'Directeur Logistique',
    company: 'Laiterie du Constantinois',
    comment: 'Nous avons confié l’équipement de nos 12 camions de collecte et de distribution à Carpôle Industriel. La qualité de l’isolation isotherme est impeccable, même sous la canicule de l’Est algérien. Les températures de consigne restent stables et la consommation de carburant de nos groupes frigorifiques est optimisée.',
    rating: 5,
    date: '14 Mars 2026'
  },
  {
    id: 'review-2',
    author: 'Samir Zouaoui',
    role: 'Artisan Transporteur',
    company: 'Zouaoui & Fils Trans-Froid',
    comment: 'Excellent service après-vente ! Suite à un accrochage sur la route de Batna, ils ont réparé le flanc de ma carrosserie isotherme et changé le condenseur du frigo en moins de 48 heures. Rapidité et professionnalisme inégalés à Constantine.',
    rating: 5,
    date: '3 Mai 2026'
  },
  {
    id: 'review-3',
    author: 'Nadia Mansouri',
    role: 'Gérante Approvisionnements',
    company: 'PharmEst Algérie',
    comment: 'Pour la distribution de produits pharmaceutiques sensibles, la certification et l’étalonnage précis de la température sont rigoureux. Le simulateur de devis de Carpôle nous a permis de planifier nos budgets d’investissement avec précision et leur équipe technique a parfaitement intégré le double compartiment multi-température.',
    rating: 5,
    date: '11 Juin 2026'
  }
];

// Core calculator for simulateur de devis
export function calculateQuote(input: QuoteInput): QuoteEstimate {
  let baseBodyCost = 0;
  let durationInDays = 5;
  let warrantyMonths = 24;

  // 1. Truck chassis sizing
  switch (input.truckType) {
    case 'carrier_small':
      baseBodyCost = 450000; // DZD (Approximate industrial costs in Algerian Dinars for realistic simulator feel)
      durationInDays = 6;
      break;
    case 'truck_medium':
      baseBodyCost = 850000;
      durationInDays = 9;
      break;
    case 'semi_heavy_duty':
      baseBodyCost = 1450000;
      durationInDays = 14;
      break;
    case 'special_order':
      baseBodyCost = 1900000;
      durationInDays = 18;
      break;
  }

  // 2. Body type multiplier
  let bodyworkCost = baseBodyCost;
  switch (input.bodyType) {
    case 'insulated_refrigerated':
      bodyworkCost = baseBodyCost * 1.5; // High-density sandwich panels are expensive
      break;
    case 'standard_box_dry':
      bodyworkCost = baseBodyCost * 1.0; // standard steel/aluminum side skin
      break;
    case 'meat_hanging':
      bodyworkCost = baseBodyCost * 1.65; // Reinforced roof and built-in meat hanging rail systems
      durationInDays += 4;
      break;
    case 'subframe_only':
      bodyworkCost = baseBodyCost * 0.45; // Bare galvanized subframe only
      durationInDays -= 2;
      break;
  }

  // 3. Refrigerator brand unit integration cost
  let refrigeratorCost = 0;
  switch (input.frigoCapacity) {
    case 'none':
      refrigeratorCost = 0;
      break;
    case 'positive_fresh':
      refrigeratorCost = input.truckType === 'carrier_small' ? 380000 : (input.truckType === 'special_order' ? 1150000 : 650000);
      durationInDays += 2;
      break;
    case 'negative_deep_freeze':
      refrigeratorCost = input.truckType === 'carrier_small' ? 580000 : (input.truckType === 'special_order' ? 1750000 : 980000);
      durationInDays += 3;
      warrantyMonths = 36; // Premium warranty on deep freeze setups
      break;
    case 'dual_multi_temp':
      refrigeratorCost = input.truckType === 'carrier_small' ? 820000 : (input.truckType === 'special_order' ? 2450000 : 1380000);
      durationInDays += 4;
      warrantyMonths = 36;
      break;
  }

  // 4. Subframe galvanization & materials option
  let subframeCost = 0;
  if (input.hasSubframeIncluded) {
    subframeCost = input.truckType === 'carrier_small' ? 80000 : (input.truckType === 'special_order' ? 250000 : 180000);
  }

  // 5. Engineering, electrical wiring, custom design and Algerian integration homologation
  const engineeringCost = (bodyworkCost + refrigeratorCost) * 0.08;

  // Multiply by count of vehicles
  const multiplier = isNaN(input.truckCount) || input.truckCount < 1 ? 1 : input.truckCount;

  const totalBeforeTax = (bodyworkCost + refrigeratorCost + subframeCost + engineeringCost) * multiplier;
  const estimatedTaxes = totalBeforeTax * 0.19; // 19% TVA in Algeria
  const totalWithTax = totalBeforeTax + estimatedTaxes;

  return {
    bodyworkCost: Math.round(bodyworkCost * multiplier),
    refrigeratorCost: Math.round(refrigeratorCost * multiplier),
    subframeCost: Math.round(subframeCost * multiplier),
    engineeringCost: Math.round(engineeringCost * multiplier),
    totalBeforeTax: Math.round(totalBeforeTax),
    estimatedTaxes: Math.round(estimatedTaxes),
    totalWithTax: Math.round(totalWithTax),
    durationInDays: Math.ceil(durationInDays),
    warrantyMonths
  };
}
