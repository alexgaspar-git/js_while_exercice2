// # Exercice 1
// 1. Créer une boucle, tant que l'utilisateur ne rentre pas de valeur dans un prompt, demandé lui de re rentré une nouvelle valeur 
// 2. Créer une boucle, tant que l'utilisateur donne un chiffre plus petit que 10, demandé lui de re rentré une nouvelle valeur

// let valeur = prompt("valeur?");

// while (valeur == "") {
//     valeur = prompt("entrez une valeur svp");
// }

// while (valeur < 10) {
//     valeur = parseInt(prompt("entrez une valeur svp"));
// }

// # Exercice 2
// ## Boucle avec condition
// 1. Créer une boucle qui s'incrémente de 1 et qui affiche uniquement les nombres impair, cette boucle s'incrémente jusqu'a 11

// let compt = 0;
// while (compt <= 11) {
//     if (compt % 2 == 1) {
//         console.log(compt);
//     };
//     compt++
// }

// 2. Créer un programme qui demande le prénom de la personne, qui affiche la longueur de son prénom et affiche autant de fois le prénom qu'il y a de lettre

// let prenom = prompt('Quel est ton prénom?');
// let prenomTaille = prenom.length;
// let compt = 0;

// while (compt < prenomTaille) {
//     console.log(prenom);
//     compt++
// }

// 3. Créer un programme qui affiche chaque lettre du prénom une par une

// let prenom = prompt('Quel est ton prénom?');
// let prenomTaille = prenom.length;
// let compt = 0;

// while (compt < prenomTaille) {
//     console.log(prenom.charAt(compt));
//     compt++
// }

// # Exercice 3
// ## Boucle avec condition et method
// 1. Créer un programme qui affiche chaque lettre du prénom MAIS à chaque tour impair la lettre sera en majuscule

// let prenom = prompt('Quel est ton prénom?');
// let prenomTaille = prenom.length;
// let compt = 0;

// while (compt < prenomTaille) {
//     if (compt % 2 == 1) {
//         console.log(`${prenom.charAt(compt).toUpperCase()} => à l'indice ${compt}`);
//     } else {
//         console.log(`${prenom.charAt(compt).toLowerCase()} => à l'indice ${compt}`);
//     }
//     compt++
// }

// 2. Créer un programme qui demande d'entrer un calcul, laisse le choix a l'utilisateur , exemple 3,5 * 3 et si la réponse est a virgule il faut afficher le résultat au nom entier le plus haut

// let calcul = prompt('Quel est ton calcul?');
// let condition = true;

// while (condition == true) {
//     console.log(Math.ceil(eval(calcul)));
//     let stop = prompt('Veux-tu stop?');
//     if (stop == 'oui') {
//         condition = false;
//         alert("merci");
//     } else {
//         calcul = prompt("Quel est ton calcul?");
//     }
// }

// 3. Créer un programme qui vérifie la longueur du prénom qui doit etre plus grand que 5 caractères et qui doit etre tout en minuscule, une fois que les conditions sont respectés, afficher le prénom en majuscule

// let prenom = prompt('ton prenom');

// while (prenom.length <= 5 ) {
//     prenom = prompt('prenom trop court,  recommencer')
// }
// if (prenom.length >=5) {
//     console.log(prenom.toUpperCase());
// }