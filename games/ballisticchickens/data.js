// clouds: 1,000m to 7,500m
// sky black: 30,000m
// space: 100,000m

// 343m/s: sound barrier
// 299 792 458 m/s: lightspeed hehehe

const ACHIEVEMENTS = {
  // distance
  'd1': {
    'icon': [0, -1],
    'description': 'Fly 500 meters in one round',
  },
  'd2': {
    'icon': [0, 0],
    'description': 'Fly 1,000 meters in one round',
  },
  'd3': {
    'icon': [0, 1],
    'description': 'Fly 5,000 meters in one round',
  },
  'd4': {
    'icon': [0, 2],
    'description': 'Fly 10,000 meters in one round',
  },
  'd5': {
    'icon': [0, 3],
    'description': 'Fly 50,000 meters in one round',
  },
  'd6': {
    'icon': [0, 4],
    'description': 'Fly 100,000 meters in one round',
  },
  'd7': {
    'icon': [0, 5],
    'description': 'Fly 500,000 meters in one round',
  },
  'd8': {
    'icon': [0, 6],
    'description': 'Fly 1 million meters in one round',
  },
  'd9': {
    'icon': [0, 7],
    'description': 'Fly 5 million meters in one round',
  },
  'd10': {
    'icon': [0, 8],
    'description': 'Fly 1 billion meters in one round',
  },
  // trampoline
  't1': {
    'icon': [1, -1],
    'description': 'Bounce off of a trampoline',
  },
  't2': {
    'icon': [1, 6],
    'description': 'Bounce off of 10 trampolines',
  },
  't3': {
    'icon': [1, 7],
    'description': 'Bounce off of 100 trampolines',
  },
  't4': {
    'icon': [1, 8],
    'description': 'Bounce off of 1,000 trampolines',
  },
  // upgrades
  'u1': {
    'icon': [2, -1],
    'description': 'Have one of each upgrade',
  },
  'u2': {
    'icon': [2, 0],
    'description': 'Have five of each upgrade',
  },
  'u3': {
    'icon': [2, 1],
    'description': 'Have 10 of each upgrade',
  },
  'u4': {
    'icon': [2, 2],
    'description': 'Have 15 of each upgrade',
  },
  'u5': {
    'icon': [2, 3],
    'description': 'Have 20 of each upgrade',
  },
  'u6': {
    'icon': [2, 4],
    'description': 'Have 25 of each upgrade',
  },
  'u7': {
    'icon': [2, 5],
    'description': 'Have 30 of each upgrade',
  },
  'u8': {
    'icon': [2, 6],
    'description': 'Have 35 of each upgrade',
  },
  'u9': {
    'icon': [2, 7],
    'description': 'Have 40 of each upgrade',
  },
  'u10': {
    'icon': [2, 8],
    'description': 'Have 50 of each upgrade',
  },
  // altitude
  'a1': {
    'icon': [3, -1],
    'description': 'Make it to space :O',
  },
  // velocity
  'v1': {
    'icon': [4, -1],
    'description': 'Fly at the speed of sound',
  },
  'v2': {
    'icon': [4, 0],
    'description': 'Fly at Mach 5',
  },
  'v3': {
    'icon': [4, 6],
    'description': 'Fly at Mach 10',
  },
  'v4': {
    'icon': [4, 7],
    'description': 'Fly at Mach 20',
  },
  'v5': {
    'icon': [4, 8],
    'description': 'Fly at Mach 50',
  },
  // birb
  'b1': {
    'icon': [5, -1],
    'description': 'Smack into an evil bird',
  },
};

// 6 basic stars
// 4 thicc stars
// 4 special

const OFFERS = [
  {
    name: 'Launch Velocity',
    desc: 'Shove some more gunpowder into the cannon.',
    cost: 30,
    gain: 10,
    expo: 1.6,
  },
  {
    name: 'Aerodynamics',
    desc: 'Slice through the air as fast as... a chicken... through air...',
    cost: 100,
    gain: 3,
    expo: 1.8,
  },
  {
    name: 'Fuel Surplus',
    desc: 'Make more room in your fuel tank that doesn\'t really exist anyway.',
    cost: 200,
    gain: 50,
    expo: 1.5,
  },
  {
    name: 'Shock Absorber',
    desc: 'Lose less speed when you smack into the ground.',
    cost: 150,
    gain: 1,
    expo: 1.7,
  },
  {
    name: 'Lucky Not-Ducky',
    desc: 'Have an increased chance of trampolines appearing.',
    cost: 100,
    gain: 0.4,
    expo: 1.6,
  },
  {
    name: 'Rocket Science',
    desc: 'Get a better firework rocket to speed you up with less fuel.',
    cost: 150,
    gain: 0.1,
    expo: 1.7,
  },
];

const STAR_TYPES = [
  {
    range: [800, 8000],
    count: 100,
    value: 0,
    frame: 'not a star lol',
  },
  {
    range: [3, 70],
    count: 5,
    value: 1,
    frame: 0,
  },
  {
    range: [70, 150],
    count: 5,
    value: 2,
    frame: 1,
  },
  {
    range: [150, 300],
    count: 10,
    value: 3,
    frame: 2,
  },
  {
    range: [300, 600],
    count: 20,
    value: 4,
    frame: 3,
  },
  {
    range: [600, 1000],
    count: 25,
    value: 5,
    frame: 4,
  },
  {
    range: [1000, 2000],
    count: 50,
    value: 7,
    frame: 5,
  },
  {
    range: [2000, 3000],
    count: 50,
    value: 10,
    frame: 0,
  },
  {
    range: [3000, 4000],
    count: 50,
    value: 15,
    frame: 1,
  },
  {
    range: [4000, 5000],
    count: 50,
    value: 20,
    frame: 2,
  },
  {
    range: [5000, 7500],
    count: 80,
    value: 25,
    frame: 3,
  },
  {
    range: [7500, 10000],
    count: 80,
    value: 30,
    frame: 4,
  },
  {
    range: [10000, 12500],
    count: 80,
    value: 35,
    frame: 5,
  },
  {
    range: [12500, 15000],
    count: 80,
    value: 40,
    frame: 0,
  },
  
  {
    range: [15000, 20000],
    count: 160,
    value: 45,
    frame: 1,
  },
  {
    range: [20000, 25000],
    count: 160,
    value: 50,
    frame: 2,
  },
  
  {
    range: [25000, 30000],
    count: 160,
    value: 55,
    frame: 3,
  },
  {
    range: [30000, 35000],
    count: 160,
    value: 60,
    frame: 4,
  },
  {
    range: [35000, 40000],
    count: 160,
    value: 65,
    frame: 5,
  },
  {
    range: [40000, 50000],
    count: 330,
    value: 70,
    frame: 0,
  },
  {
    range: [50000, 60000],
    count: 330,
    value: 75,
    frame: 1,
  },
  {
    range: [60000, 70000],
    count: 330,
    value: 80,
    frame: 2,
  },
  {
    range: [70000, 80000],
    count: 330,
    value: 85,
    frame: 3,
  },
  {
    range: [80000, 90000],
    count: 330,
    value: 90,
    frame: 4,
  },
  {
    range: [90000, 100000],
    count: 330,
    value: 95,
    frame: 5,
  },

  // SPACE (100k)

  {
    range: [100000, 150000],
    count: 1650,
    value: 100,
    frame: 6,
  },
  {
    range: [150000, 200000],
    count: 1650,
    value: 110,
    frame: 7,
  },
  {
    range: [200000, 250000],
    count: 1650,
    value: 120,
    frame: 8,
  },
  {
    range: [250000, 300000],
    count: 1650,
    value: 130,
    frame: 9,
  },

  // FANCY SPACE
  
  {
    range: [300000, 400000],
    count: 1650,
    value: 150,
    frame: 6,
  },
  {
    range: [300000, 400000],
    count: 1650,
    value: 300,
    frame: 10,
  },

  {
    range: [400000, 600000],
    count: 3300,
    value: 200,
    frame: 7,
  },
  {
    range: [400000, 600000],
    count: 3300,
    value: 450,
    frame: 11,
  },

  {
    range: [600000, 1000000],
    count: 6600,
    value: 300,
    frame: 8,
  },
  {
    range: [600000, 1000000],
    count: 6600,
    value: 700,
    frame: 12,
  },

  {
    range: [1000000, 2000000],
    count: 13000,
    value: 500,
    frame: 9,
  },
  {        
    range: [1000000, 2000000],
    count: 13000,
    value: 1200,
    frame: 13,
  },
];
