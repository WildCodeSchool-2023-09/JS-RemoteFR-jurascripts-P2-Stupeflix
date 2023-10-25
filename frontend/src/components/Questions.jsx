const Questions = [

    {
        title: "La prison", 
        img: , // Image en rapport avec la question
        question: "Quelle est cette prison qui fait trembler de peur le monde de la sorcellerie ?",
        answA: "Astara",
        answB: "Azkaban",
        answC: "Amékel",
        answD: "AStaban", 
        answGood: answB,
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?A
    },
    {
        title: "les balais de Harry", 
        question: "Lequel de ces balais n'existe pas ?", 
        answA: "L'Éclair de feu", 
        answB: "Le Supernova 5",
        answC: "Le Nimbus 2000", 
        answD: "Le Super destructeur", 
        answGood: answB, 
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "La poudre mystérieuse", 
        question: "Quelle poudre lance-t-on dans sa cheminée pour atterrir dans une autre cheminée ?", 
        answA: "La poudre du cheminot", 
        answB: "La poudre de chemine",
        answC: "La poudre de cheminette", 
        answD: "La poudre de perlimpinpin", 
        answGood: answC, 
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "La cachette secréte", 
        question: "Où le fameux diadème de Serdaigle est-il caché ?", 
        answA: "Dans la Salle sur Demande, à Poudlard",
        answB: "Dans une caverne, près d'une mer",
        answC: "Dans une chambre forte, à la banque Gringotts", 
        answD: "Dans un livre des sorts", 
        answGood: answA, 
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le sort de Harry contre Voldemort", 
        question: "Quelle formule magique faut-il prononcer pour pouvoir désarmer son adversaire ?", 
        answA: "Expulso !", 
        answB: "Evanesco !",
        answC: "Abracadabrus", 
        answD: "Expelliarmus !", 
        answGood: answD, 
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "La plante étrangleuse", 
        question: "Quelle est cette adorable plante qui étrangle celui qui la touche ?", 
        answA: "Le Filet de l'Enfer", 
        answB: "Le Filet du Démon",
        answC: "Le filet mignion", 
        answD: "Le Filet du Diable", 
        answGood: answC, 
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le lancer de créature", 
        question: "Cette créature prolifère dans le jardin de Ronald Weasley :", 
        answA: "Le gobelin", 
        answB: "Le gnome",
        answC: "La goule", 
        answD: "Le gaillard", 
        answGood: answB, 
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "La chouette Harfang", 
        question: "Cette chouette Harfang des neiges posée sur les épaules du timide Harry Potter a fait le tour du monde. Je m'appelle...", 
        answA: "Hedwige", 
        answB: "Helena",
        answC: "Bulbizarre", 
        answD: "Harmony", 
        answGood: answA, 
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Un sort est le maléfice d'Entrave et l'un des trois sortilèges Impardonnables", 
        question: "Quel maléfice n'existe pas ?", 
        answA: "Impero !", 
        answB: "Imperator !",
        answC: "Impedimenta !", 
        answD: "Impala !", 
        answGood: answC, 
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le fameux Quidditch", 
        question: " Au Quidditch, qu'est-ce qui est de couleur jaune ?", 
        answA: "Le Dégommeur", 
        answB: "Le Cognard",
        answC: "Le Souafle", 
        answD: "Le Vif d'or", 
        answGood: answD, 
        difficult: 1, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le village maléfique", 
        question: "Quel est le village où ont été tués Lily et James Potter ?", 
        answA: "Godric's Hollow", 
        answB: "No man's land",
        answC: "Budly Babberton", 
        answD: "Little Winghing", 
        answGood: answA, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le mot de passe", 
        question: "Quel est le mot de passe pour rentrer dans la salle commune de Gryffondor ?", 
        answA: "Kaputt Draconis", 
        answB: "Caput Draconis",
        answC: "Catapult Draconis", 
        answD: "Kaput Draconis", 
        answGood: answB, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Bhhouuu ! ", 
        question: "Qui est le fantôme de la maison Gryffondor ?", 
        answA: "Fantomas", 
        answB: "Le moine chauve",
        answC: "Nick-Quasi-Sans-Tête", 
        answD: "Mimi Geignarde", 
        answGood: answC, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "La voiture volante", 
        question: "Quelle est la plaque d'immatriculation de la voiture volante ?", 
        answA: "7990 gh", 
        answB: "7990 dy",
        answC: "7990 xd", 
        answD: "7990 td", 
        answGood: answD, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "L'arbre Magique", 
        question: "Comment s'appelle l'arbre dans lequel Ron et Harry arrivent-ils ?", 
        answA: "Le Poudlard Cogneur",
        answB: "Le Saule Cogneur",
        answC: "Le Poudlard Frappeur", 
        answD: "Le Saule Frappeur", 
        answGood: answB, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Finish", 
        question: "Qui se fait pétrifier en premier ?", 
        answA: "Hermione Granger", 
        answB: "Colin Crivey",
        answC: "Miss Teigne", 
        answD: "Harry Potter", 
        answGood: answC, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le méchant livre", 
        question: "Comment s'appelle le livre qui s'attaque à Neville Londubat ?", 
        answA: "Le monstrueux livre des monstres", 
        answB: "Le livre monstrueux",
        answC: "Tout savoir sur les monstres", 
        answD: "Couture et Cassoulet", 
        answGood: answA, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le coup de pouce", 
        question: "Qui aide Sirius Black à s'introduire dans le château ?", 
        answA: "Severus Rogue", 
        answB: "Peter Pettigrew",
        answC: "Remus Lupin", 
        answD: "Voldemort", 
        answGood: answC, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le chat d'hermione", 
        question: "Comment se prénomme le chat d'Hermione Granger ?", 
        answA: "Patenrond", 
        answB: "Pattenrond",
        answC: "Potiron", 
        answD: "Pattenron", 
        answGood: answB, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "L'usurpateur", 
        question: "Qui se fait passer pour Alastor Maugrey à l'aide du Polynectar ?", 
        answA: "Peter Pettigrew", 
        answB: "Barty Croupton Jr",
        answC: "Barty Croupton", 
        answD: "Peter Petton", 
        answGood: answB, 
        difficult: 2, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le controleur du bus", 
        question: "Comment s'appelle le contrôleur du Magicobus ?", 
        answA: "Stan Rocade", 
        answB: "Ernie Prang",
        answC: "Elphias Doge", 
        answD: "Erphias Rocande", 
        answGood: answA, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le patronus", 
        question: "Quel est le patronus de Ginny Weasley ?", 
        answA: "Un serpent", 
        answB: "Une loutre",
        answC: "Un chat", 
        answD: "Un cheval", 
        answGood: answD, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le livre mordeur", 
        question: "Quel livre mordeur Harry essaie-t-il d'ouvrir au Chaudron Baveur ?", 
        answA: "Propriétés des plantes aquatiques magiques du bassin méditerranéen", 
        answB: "Le monstrueux livre des monstres",
        answC: "Le livre des sorts", 
        answD: "Oracle des rêves", 
        answGood: answB, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "La baguette de secours", 
        question: "Après avoir été désarmé par Harry dans le manoir des Malefoy, quelle baguette Drago utilise-t-il ?", 
        answA: "Celle de Bellatrix Lestrange", 
        answB: "Celle de son père",
        answC: "Celle de Hermione", 
        answD: "Celle de sa mère", 
        answGood: answD, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Message important", 
        question: "Qu'y a-t-il écrit à côté du sortilège de sectumsempra dans le livre de potions de Harry ?", 
        answA: "Attention", 
        answB: "Contre les ennemis",
        answC: "En cas d'urgence uniquement", 
        answD: "À utiliser avec modération", 
        answGood: answB, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "La photo", 
        question: "Selon Hermione, qui est le jeune homme sur la photo dans la maison de Bathilda Tourdesac ?", 
        answA: "Gellert Grindelwald", 
        answB: "Ignotus Peverell",
        answC: "Voldemort", 
        answD: "Le professeur Dumbledore", 
        answGood: answA, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Aprés l'attaque des mangemorts", 
        question: "Où transplanent Harry, Ron et Hermione après l'attaque des mangemorts pendant le mariage de Bill et Fleur ?", 
        answA: "À la chaumière aux coquillages", 
        answB: "À Pré-au-Lard",
        answC: "À Londres", 
        answD: "À L'abbaye de Lacock", 
        answGood: answC, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "L'apparition", 
        question: "Dans Harry Potter et l'ordre du phénix, quelle lettre apparaît dans le ciel au-dessus de Poudlard pendant le feu d'artifice géant ?", 
        answA: "Un V", 
        answB: "Un W",
        answC: "Un G", 
        answD: "Un F", 
        answGood: answB, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "The winner", 
        question: "Qui est le dernier champion à sortir du lac lors de la deuxième tâche du tournoi des trois sorciers ?", 
        answA: "Fleur Delacour", 
        answB: "Viktor Krum",
        answC: "Albus Dumbledore", 
        answD: "Harry Potter", 
        answGood: answD, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    {
        title: "Le délateur", 
        question: "Dans Harry Potter à l'école des sorciers, qui dénonce Hagrid parce que celui-ci élève un bébé dragon dans sa cabane ?", 
        answA: "Argus Rusard", 
        answB: "Le professeur McGonagall",
        answC: "Rubeus Hagrid", 
        answD: "Drago Malefoy", 
        answGood: answD, 
        difficult: 3, 
        theme: , // Le cours dans lequel la question apparaît ?
    },
    

]
export default Questions