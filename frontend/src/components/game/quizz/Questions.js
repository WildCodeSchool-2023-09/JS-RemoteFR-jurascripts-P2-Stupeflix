const questions = [
  {
    id: 1,
    img: "Question1_1.png", // Image en rapport avec la question
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
    img: "Question2_1.png",
    text: "Lequel de ces balais n'existe pas ?",
    options: [
      { id: 0, text: "L'Éclair de feu", correct: false },
      { id: 1, text: "Le Supernova 5", correct: true },
      { id: 2, text: "Le Nimbus 2000", correct: false },
      { id: 3, text: "Le Super destructeur", correct: false },
    ],
    difficult: 1,
  },
  {
    id: 3,
    img: "Question3_1.png",
    text: "Quelle poudre lance-t-on dans sa cheminée pour atterrir dans une autre cheminée ?",
    options: [
      { id: 0, text: "La poudre de cheminette", correct: true },
      { id: 1, text: "La poudre du cheminot", correct: false },
      { id: 2, text: "La poudre de chemine", correct: false },
      { id: 3, text: "La poudre de perlimpinpin", correct: false },
    ],
    difficult: 1,
  },
  {
    id: 4,
    img: "Question4_1.png",
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
    difficult: 1,
  },
  {
    id: 5,
    img: "Question5_1.png",
    text: "Quelle formule magique faut-il prononcer pour pouvoir désarmer son adversaire ?",
    options: [
      { id: 0, text: "Evanesco !", correct: false },
      { id: 1, text: "Abracadabrus !", correct: false },
      { id: 2, text: "Expelliarmus !", correct: true },
      { id: 3, text: "Expulso !", correct: false },
    ],
    difficult: 1,
  },
  {
    id: 6,
    img: "Question6_1.png",
    text: "Quelle est cette adorable plante qui étrangle celui qui la touche ?",
    options: [
      { id: 0, text: "Le Filet de l'Enfer", correct: false },
      { id: 1, text: "Le Filet du Démon", correct: false },
      { id: 2, text: "Le filet mignion", correct: false },
      { id: 3, text: "Le Filet du Diable", correct: true },
    ],
    difficult: 1,
  },
  {
    id: 7,
    img: "Question7_1.png",
    text: "Cette créature prolifère dans le jardin de Ronald Weasley :",
    options: [
      { id: 0, text: "Le gobelin", correct: false },
      { id: 1, text: "Le gnome", correct: true },
      { id: 2, text: "La goule", correct: false },
      { id: 3, text: "Le gaillard", correct: false },
    ],
    difficult: 1,
  },
  {
    id: 8,
    img: "Question8_1.png",
    text: "Cette chouette Harfang des neiges, posée sur les épaules du timide Harry Potter a fait le tour du monde. Je m'appelle...",
    options: [
      { id: 0, text: "Hedwige", correct: true },
      { id: 1, text: "Helena", correct: false },
      { id: 2, text: "Bulbizarre", correct: false },
      { id: 3, text: "Harmony", correct: false },
    ],
    difficult: 1,
  },
  {
    id: 9,
    img: "Question9_1.png",
    text: "Quel maléfice n'existe pas ?",
    options: [
      { id: 0, text: "Impero !", correct: false },
      { id: 1, text: "Imperator !", correct: false },
      { id: 2, text: "Impedimenta !", correct: true },
      { id: 3, text: "Impala !", correct: false },
    ],
    difficult: 1,
  },
  {
    id: 10,
    img: "Question10_1.png",
    text: " Au Quidditch, qu'est-ce qui est de couleur jaune ?",
    options: [
      { id: 0, text: "Le Dégommeur", correct: false },
      { id: 1, text: "Le Cognard", correct: false },
      { id: 2, text: "Le Souafle", correct: false },
      { id: 3, text: "Le Vif d'or", correct: true },
    ],
    difficult: 1,
  },
  {
    id: 11,
    img: "Question31_1.png",
    text: "Quel est le signe du zodiaque du jeune Harry Potter ?",
    options: [
      { id: 0, text: "Vierge", correct: false },
      { id: 1, text: "Lion", correct: true },
      { id: 2, text: "Balance", correct: false },
      { id: 3, text: "Taureau", correct: false },
    ],
    difficult: 1,
  },
  {
    id: 12,
    img: "Question32_1.png",
    text: "Quelle est la matière principalement enseignée par le Professeur Rogue dans la saga Harry Potter ?",
    options: [
      { id: 0, text: "Métamorphose", correct: false },
      { id: 1, text: "Enchantement", correct: false },
      { id: 2, text: "Potions", correct: true },
      { id: 3, text: "Botanique", correct: false },
    ],
    difficult: 1,
  },
  {
    id: 13,
    img: "Question33_1.png",
    text: "Quel est le prénom de Hagrid, le demi-géant de la saga Harry Potter ?",
    options: [
      { id: 0, text: "Remus", correct: false },
      { id: 1, text: "Albus", correct: false },
      { id: 2, text: "Serverus", correct: false },
      { id: 3, text: "Rubeus", correct: true },
    ],
    difficult: 1,
  },
  {
    id: 14,
    img: "Question1_2.png",
    text: "Quel est le village où ont été tués Lily et James Potter ?",
    options: [
      { id: 0, text: "Godric's Hollow", correct: true },
      { id: 1, text: "No man's land", correct: false },
      { id: 2, text: "Budly Babberton", correct: false },
      { id: 3, text: "Little Winghing", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 15,
    img: "Question2_2.png",
    text: "Quel est le mot de passe pour rentrer dans la salle commune de Gryffondor ?",
    options: [
      { id: 0, text: "Kaputt Draconis", correct: false },
      { id: 1, text: "Caput Draconis", correct: true },
      { id: 2, text: "Catapult Draconis", correct: false },
      { id: 3, text: "Kaput Draconis", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 16,
    img: "Question3_2.png",
    text: "Qui est le fantôme de la maison Gryffondor ?",
    options: [
      { id: 0, text: "Fantomas", correct: false },
      { id: 1, text: "Le moine chauve", correct: false },
      { id: 2, text: "Nick-Quasi-Sans-Tête", correct: true },
      { id: 3, text: "Mimi Geignarde", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 17,
    img: "Question4_2.png",
    text: "Quelle est la plaque d'immatriculation de la voiture volante ?",
    options: [
      { id: 0, text: "7990 gh", correct: false },
      { id: 1, text: "7990 dy", correct: false },
      { id: 2, text: "7990 xd", correct: false },
      { id: 3, text: "7990 td", correct: true },
    ],
    difficult: 2,
  },
  {
    id: 18,
    img: "Question5_2.png",
    text: "Comment s'appelle l'arbre dans lequel Ron et Harry arrivent-ils ?",
    options: [
      { id: 0, text: "Le Poudlard Cogneur", correct: false },
      { id: 1, text: "Le Saule Cogneur", correct: true },
      { id: 2, text: "Le Poudlard Frappeur", correct: false },
      { id: 3, text: "Le Saule Frappeur", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 19,
    img: "Question6_2.png",
    text: "Qui se fait pétrifier en premier ?",
    options: [
      { id: 0, text: "Hermione Granger", correct: false },
      { id: 1, text: "Colin Crivey", correct: false },
      { id: 2, text: "Miss Teigne", correct: true },
      { id: 3, text: "Harry Potter", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 20,
    img: "Question7_2.png",
    text: "Comment s'appelle le livre qui s'attaque à Neville Londubat ?",
    options: [
      { id: 0, text: "Le monstrueux livre des monstres", correct: true },
      { id: 1, text: "Le livre monstrueux", correct: false },
      { id: 2, text: "Tout savoir sur les monstres", correct: false },
      { id: 3, text: "Couture et Cassoulet", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 21,
    img: "Question8_2.png",
    text: "Qui aide Sirius Black à s'introduire dans le château ?",
    options: [
      { id: 0, text: "Severus Rogue", correct: false },
      { id: 1, text: "Peter Pettigrew", correct: false },
      { id: 2, text: "Remus Lupin", correct: true },
      { id: 3, text: "Voldemort", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 22,
    img: "Question9_2.png",
    text: "Comment se prénomme le chat d'Hermione Granger ?",
    options: [
      { id: 0, text: "Patenrond", correct: false },
      { id: 1, text: "Pattenrond", correct: true },
      { id: 2, text: "Potiron", correct: false },
      { id: 3, text: "Pattenron", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 23,
    img: "Question10_2.png",
    text: "Qui se fait passer pour Alastor Maugrey à l'aide du Polynectar ?",
    options: [
      { id: 0, text: "Peter Pettigrew", correct: false },
      { id: 1, text: "Barty Croupton Jr", correct: true },
      { id: 2, text: "Barty Croupton", correct: false },
      { id: 3, text: "Peter Petton", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 24,
    img: "Question34_2.png",
    text: "Quelle est la formule du sortilège de mort dans la saga Harry Potter ?",
    options: [
      { id: 0, text: "Avada Kedavra", correct: true },
      { id: 1, text: "Mortibus Rem", correct: false },
      { id: 2, text: "Machina Fino", correct: false },
      { id: 3, text: "Post Mortem", correct: false },
    ],
    difficult: 2,
  },
  {
    id: 25,
    img: "Question35_2.png",
    text: "Quel acteur joue le rôle de Drago Malefoy dans Harry Potter ?",
    options: [
      { id: 0, text: "Jeff Rawie", correct: false },
      { id: 1, text: "Rupert Grint", correct: false },
      { id: 2, text: "Robbie Coltrane", correct: false },
      { id: 3, text: "Tom Felton", correct: true },
    ],
    difficult: 2,
  },
  {
    id: 26,
    img: "Question36_2.png",
    text: "Sur quelle partie du corps, Albus Dumbledore possède-t-il une cicatrice qui représente le plan du métro de Londres ?",
    options: [
      { id: 0, text: "Dans le bas du dos", correct: false },
      { id: 1, text: "Sur l'avant bras", correct: false },
      { id: 2, text: "Dans le creux de la main", correct: false },
      { id: 3, text: "Au dessus du genoux", correct: true },
    ],
    difficult: 2,
  },
  {
    id: 27,
    img: "Question1_3.png",
    text: "Comment s'appelle le contrôleur du Magicobus ?",
    options: [
      { id: 0, text: "Stan Rocade", correct: true },
      { id: 1, text: "Ernie Prang", correct: false },
      { id: 2, text: "Elphias Doge", correct: false },
      { id: 3, text: "Erphias Rocande", correct: false },
    ],
    difficult: 3,
  },
  {
    id: 28,
    img: "Question2_3.png",
    text: "Quel est le patronus de Ginny Weasley ?",
    options: [
      { id: 0, text: "Un serpent", correct: false },
      { id: 1, text: "Une loutre", correct: false },
      { id: 2, text: "Un chat", correct: false },
      { id: 3, text: "Un cheval", correct: true },
    ],
    difficult: 3,
  },
  {
    id: 29,
    img: "Question3_3.png",
    text: "Quel livre mordeur Harry essaie-t-il d'ouvrir au Chaudron Baveur ?",
    options: [
      {
        id: 0,
        text: "Propriétés des plantes aquatiques magiques du bassin méditerranéen",
        correct: false,
      },
      { id: 1, text: "Le monstrueux livre des monstres", correct: true },
      { id: 2, text: "Le livre des sorts", correct: false },
      { id: 3, text: "Oracle des rêves", correct: false },
    ],
    difficult: 3,
  },
  {
    id: 30,
    img: "Question4_3.png",
    text: "Après avoir été désarmé par Harry dans le manoir des Malefoy, quelle baguette Drago utilise-t-il ?",
    options: [
      { id: 0, text: "Celle de Bellatrix Lestrange", correct: false },
      { id: 1, text: "Celle de son père", correct: false },
      { id: 2, text: "Celle de Hermione", correct: false },
      { id: 3, text: "Celle de sa mère", correct: true },
    ],
    difficult: 3,
  },
  {
    id: 31,
    img: "Question5_3.png",
    text: "Qu'y a-t-il écrit à côté du sortilège de sectumsempra dans le livre de potions de Harry ?",
    options: [
      { id: 0, text: "Attention", correct: false },
      { id: 1, text: "Contre les ennemis", correct: true },
      { id: 2, text: "En cas d'urgence uniquement", correct: false },
      { id: 3, text: "À utiliser avec modération", correct: false },
    ],
    difficult: 3,
  },
  {
    id: 32,
    img: "Question6_3.png",
    text: "Selon Hermione, qui est le jeune homme sur la photo dans la maison de Bathilda Tourdesac ?",
    options: [
      { id: 0, text: "Gellert Grindelwald", correct: true },
      { id: 1, text: "Ignotus Peverell", correct: false },
      { id: 2, text: "Voldemort", correct: false },
      { id: 3, text: "Le professeur Dumbledore", correct: false },
    ],
    difficult: 3,
  },
  {
    id: 33,
    img: "Question7_3.png",
    text: "Où transplanent Harry, Ron et Hermione après l'attaque des mangemorts pendant le mariage de Bill et Fleur ?",
    options: [
      { id: 0, text: "À la chaumière aux coquillages", correct: false },
      { id: 1, text: "À Pré-au-Lard", correct: false },
      { id: 2, text: "À Londres", correct: true },
      { id: 3, text: "À L'abbaye de Lacock", correct: false },
    ],
    difficult: 3,
  },
  {
    id: 34,
    img: "Question8_3.png",
    text: "Dans Harry Potter et l'ordre du phénix, quelle lettre apparaît dans le ciel au-dessus de Poudlard pendant le feu d'artifice géant ?",
    options: [
      { id: 0, text: "Un V", correct: false },
      { id: 1, text: "Un W", correct: true },
      { id: 2, text: "Un G", correct: false },
      { id: 3, text: "Un F", correct: false },
    ],
    difficult: 3,
  },
  {
    id: 35,
    img: "Question9_3.png",
    text: "Qui est le dernier champion à sortir du lac lors de la deuxième tâche du tournoi des trois sorciers ?",
    options: [
      { id: 0, text: "Fleur Delacour", correct: false },
      { id: 1, text: "Viktor Krum", correct: false },
      { id: 2, text: "Albus Dumbledore", correct: false },
      { id: 3, text: "Harry Potter", correct: true },
    ],
    difficult: 3,
  },
  {
    id: 36,
    img: "Question10_3.png",
    text: "Dans Harry Potter à l'école des sorciers, qui dénonce Hagrid parce que celui-ci élève un bébé dragon dans sa cabane ?",
    options: [
      { id: 0, text: "Argus Rusard", correct: false },
      { id: 1, text: "Le professeur McGonagall", correct: false },
      { id: 2, text: "Rubeus Hagrid", correct: false },
      { id: 3, text: "Drago Malefoy", correct: true },
    ],
    difficult: 3,
  },
  {
    id: 37,
    img: "Question37_3.png",
    text: "Qui garde Azkaban, la prison des sorciers dans la saga Harry Potter ?",
    options: [
      { id: 0, text: "Les goules", correct: false },
      { id: 1, text: "Les épouvantards", correct: false },
      { id: 2, text: "Les détraqueurs", correct: true },
      { id: 3, text: "Les cérberes", correct: false },
    ],
    difficult: 3,
  },
  {
    id: 38,
    img: "Question38_3.png",
    text: "En quelle année, Harry Potter et les Reliques de la Mort : 2ème partie est-il sorti au cinéma ?",
    options: [
      { id: 0, text: "2011", correct: true },
      { id: 1, text: "2013", correct: false },
      { id: 2, text: "2015", correct: false },
      { id: 3, text: "2017", correct: false },
    ],
    difficult: 3,
  },
  {
    id: 39,
    img: "Question39_3.png",
    text: "Quel professeur a la réputation d'avoir été champion de duel dans sa jeunesse ?",
    options: [
      { id: 0, text: "Rogue", correct: false },
      { id: 1, text: "Lockart", correct: false },
      { id: 2, text: "Flitwick", correct: true },
      { id: 3, text: "Dumbledore", correct: false },
    ],
    difficult: 3,
  },
];
export default questions;
