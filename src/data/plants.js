export const PLANT_DATABASE = {
  'monstera': {
    name: 'Monstera Deliciosa',
    commonName: 'Swiss Cheese Plant',
    light: 'Bright Indirect',
    water: 'Every 1-2 weeks',
    temp: '18-30°C',
    humidity: 'High',
    description: 'A popular tropical plant known for its large, heart-shaped leaves with natural holes (fenestrations).'
  },
  'pothos': {
    name: 'Epipremnum aureum',
    commonName: 'Golden Pothos',
    light: 'Low to Bright Indirect',
    water: 'Every 1-2 weeks',
    temp: '15-28°C',
    humidity: 'Average',
    description: 'An incredibly hardy vine with heart-shaped green leaves variegated with yellow or white.'
  },
  'snake_plant': {
    name: 'Dracaena trifasciata',
    commonName: 'Snake Plant / Mother-in-law\'s Tongue',
    light: 'Low to Bright Indirect',
    water: 'Every 2-3 weeks',
    temp: '15-32°C',
    humidity: 'Low',
    description: 'A resilient succulent with upright, sword-like leaves that are excellent for air purification.'
  },
  'fiddle_leaf': {
    name: 'Ficus lyrata',
    commonName: 'Fiddle Leaf Fig',
    light: 'Bright Consistent Light',
    water: 'Weekly',
    temp: '18-24°C',
    humidity: 'High',
    description: 'A trendy indoor tree with large, violin-shaped leaves that requires stable conditions to thrive.'
  },
  'spider_plant': {
    name: 'Chlorophytum comosum',
    commonName: 'Spider Plant',
    light: 'Bright Indirect',
    water: 'Weekly',
    temp: '13-27°C',
    humidity: 'Average',
    description: 'Easy-to-grow plant that produces "babies" on long stems, resembling small spiders.'
  },
  'succulent': {
    name: 'Succulent Mix',
    commonName: 'Echeveria / Sedum',
    light: 'Direct Sun',
    water: 'Every 3-4 weeks',
    temp: '10-35°C',
    humidity: 'Low',
    description: 'Fleshy plants that store water in their leaves, perfect for sunny windowsills.'
  },
  'peace_lily': {
    name: 'Spathiphyllum',
    commonName: 'Peace Lily',
    light: 'Low to Medium Indirect',
    water: 'Weekly (when leaves droop)',
    temp: '18-27°C',
    humidity: 'High',
    description: 'Elegant plant with dark green leaves and white spathes, known for being a great communicator (it wilts when thirsty).'
  },
  'aloe_vera': {
    name: 'Aloe barbadensis miller',
    commonName: 'Aloe Vera',
    light: 'Bright Direct',
    water: 'Every 3 weeks',
    temp: '13-27°C',
    humidity: 'Low',
    description: 'A succulent known for its medicinal gel inside its thick, serrated leaves.'
  },
  'zz_plant': {
    name: 'Zamioculcas zamiifolia',
    commonName: 'ZZ Plant',
    light: 'Low to Bright Indirect',
    water: 'Every 3-4 weeks',
    temp: '15-24°C',
    humidity: 'Low',
    description: 'Virtually indestructible with waxy, green leaves. Perfect for low-light offices.'
  },
  'rubber_plant': {
    name: 'Ficus elastica',
    commonName: 'Rubber Plant',
    light: 'Bright Indirect',
    water: 'Weekly',
    temp: '15-24°C',
    humidity: 'Medium',
    description: 'A striking plant with large, glossy, dark burgundy or green leaves.'
  }
};

// Mapping specific MobileNet labels to our database keys
// We only map labels that are reasonably close to the actual plant features
export const LABEL_MAPPING = {
  'velvet': 'fiddle_leaf', 
  'daisy': 'spider_plant',
  'corn': 'snake_plant',
  'pineapple': 'aloe_vera',
  'feather': 'zz_plant',
  'screen': 'rubber_plant',
  'web': 'spider_plant'
};

// Generic labels that should NOT trigger a specific species match
export const GENERIC_LABELS = [
  'potted plant',
  'pot',
  'flowerpot',
  'leaf',
  'cabbage',
  'broccoli',
  'artichoke',
  'vase',
  'buckeye',
  'conker'
];
