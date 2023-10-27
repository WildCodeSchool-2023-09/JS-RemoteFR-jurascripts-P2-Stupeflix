const questions = [
  {
    id: 1,
    img: "https://st2.depositphotos.com/2788513/12248/i/450/depositphotos_122489272-stock-photo-snowy-owl-bubo-scandiacus-standing.jpg", // Image en rapport avec la question
    text: "Quelle est cette prison qui fait trembler de peur le monde de la sorcellerie ?",
    options: [
      { id: 0, text: "Astara", correct: false },
      { id: 1, text: "Azkaban", correct: true },
      { id: 2, text: "Amékel", correct: false },
      { id: 3, text: "Astaban", correct: false },
    ],
    difficult: 1,
  },
  {
    id: 2,
    img: "https://cdn.pixabay.com/photo/2018/10/13/20/24/harry-potter-3745064_1280.jpg",
    text: "Lequel de ces balais n'existe pas ?",
    options: [
      { id: 0, text: "L'Éclair de feu", correct: false },
      { id: 1, text: "Le Supernova 5", correct: true },
      { id: 2, text: "Le Nimbus 2000", correct: false },
      { id: 3, text: "Le Super destructeur", correct: false },
    ],
  },
  {
    id: 3,
    img: "https://cdn.pixabay.com/photo/2017/11/06/21/11/paint-2924891_1280.jpg",
    text: "Quelle poudre lance-t-on dans sa cheminée pour atterrir dans une autre cheminée ?",
    options: [
      { id: 0, text: "La poudre de cheminette", correct: true },
      { id: 1, text: "La poudre du cheminot", correct: false },
      { id: 2, text: "La poudre de chemine", correct: false },
      { id: 3, text: "La poudre de perlimpinpin", correct: false },
    ],
  },
  {
    id: 4,
    img: "https://cdn.pixabay.com/photo/2015/10/06/22/04/harry-potter-975362_1280.jpg",
    text: "Où le fameux diadème de Serdaigle est-il caché ?",
    options: [
      { id: 0, text: "Dans une caverne, près d'une mer", correct: false },
      { id: 1, text: "Dans la Salle sur Demande, à Poudlard", correct: true },
      {
        id: 2,
        text: "Dans une chambre forte, à la banque Gringotts",
        correct: false,
      },
      { id: 3, text: "Dans un livre des sorts", correct: false },
    ],
  },
  {
    id: 5,
    img: "https://cdn.pixabay.com/photo/2014/10/11/20/20/abracadabra-484969_1280.jpg",
    text: "Quelle formule magique faut-il prononcer pour pouvoir désarmer son adversaire ?",
    options: [
      { id: 0, text: "Evanesco !", correct: false },
      { id: 1, text: "Abracadabrus !", correct: false },
      { id: 2, text: "Expelliarmus !", correct: true },
      { id: 3, text: "Expulso !", correct: false },
    ],
  },
];
export default questions;
