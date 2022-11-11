const heroTypes = {
  MAGICIAN: 2,
  WARRIOR:3,
  ANIMAL:1
};

const heroTypesNames = {
  [heroTypes.MAGICIAN]: 'Mago',
  [heroTypes.WARRIOR]: 'Guerrero',
  [heroTypes.ANIMAL]: 'Animal'
}

const heroTypesImgs = {
  [heroTypes.MAGICIAN]: '/assets/img/fire.png',
  [heroTypes.WARRIOR]: '/assets/img/warrior.png',
  [heroTypes.ANIMAL]: '/assets/img/druid.png'
}

export {
  heroTypes,
  heroTypesNames,
  heroTypesImgs
};