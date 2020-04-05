# Loup Garou

Ce code reprend le jeu du loup garou pour la dernière séance de cours avec les L2 de l'UGA.

## Déroulement de la séance

- Etant donné que le serveur Discord principal n'a pas de salon pour React, je vous invite sur un [autre serveur](https://discord.gg/qk3TzeV).
- Je suis également disponible toute la journée sur skype -- mon identifiant est pl.guhur.
- Pendant la séance, nous allons travailler sur Material UI et Styled components
- Puis un TP noté va reprendre l'ensemble des notions vues en cours.
- Pensez à cloner ce repo et à répondre aux questions en modifiant directement ce README.

## Sass

Au cas où vous avez un trou de mémoire sur Sass, voici un [rappel de la syntaxe](https://devhints.io/sass).

## Material UI

Je vous invite à regarder la vidéo de [Human Talks Paris](https://www.youtube.com/watch?v=D3tB_DGgICE).


Quelques petites questions :
- Résumer en une phrase l'intérêt de Material UI
  - Utiliser des composants pré-conçus afin de designer efficacement une appli web.


- Comment importer `material-ui` dans un fichier ?
  - On importe le composant qui nous intéresse depuis "@meterial-ui/core/cequ'onveut"


- Comment une application peut utiliser un thème à travers l'ensemble d'un projet ?
  - En utilisant 'MuiThemeProvider' mis à disposition par Material-ui, et en encapsulant notre appli par ce theme.


- A quoi sert `createMuiTheme` ?
  - Il permet de personnaliser une partie des composants importés grâce à différentes options.


- A quoi correspond `palette` ?
  - Sert à modifier la palette de couleur de l'application pour tout le ocmposant Material-UI. On peut par exemple
modifier la couleur primaire de boutons.


- Comment re-définir des propriétés ?
  - En utilisant la propriété 'overrides' dans createMuiTheme.


- A quoi vous fait penser `withStyle` ? Comment l'utiliser ?
  - 'withStyle' fait penser au composant que l'on avait utilisé au dernier cours, et qui servait à utiliser un state global. Pour l'utiliser, il faut le déclarer au début et encapsuler notre app lors de l'export.


- Reproduire les deux boutons rouge et bleu présentées dans la vidéo.
``` import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles'; 
import Button from '@material-ui/core/Button';

class App extends Component {
  render() {
    return(
      <MuiThemeProvider theme={ theme }>
        <div>
          <Button className={this.props.classes.myLeftButton}> Test </Button>
          <Button> Click me </Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

const styles = {
  myLeftButton: {
    backgroundColor: 'blue'
  }
};

const theme = createMuiTheme({
  typography: {
    fontSize: 40
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: 'red',
        '&:hover': { backgroundColor: 'green' }
      }
    }
  }
})

export default withStyles(styles)(App); 
```


## Styled Components

De la même manière, voici une [vidéo](https://www.youtube.com/watch?v=mS0UKNBh-Ig) pour introduire le sujet.

Quelques petites questions :

- Qu'est-ce que le CSS-in-JS ?
    - C'est une manière différente d'écrire du CSS. Il permet entre autres de résoudre les problèmes de scope et d'effet de bord, mais aussi de générer des classes dynamiques.

- Qu'est-ce que sont les tagged templates (délimitées par des backticks) ?
    - Ce sont des moyens pour écrire plus simplement des propriétés.

- Donner un exemple d'un bouton personnalisé avec et sans les tagged templates ?
    - Avec : ```const Button = styled.button`
                color: white;
             `
             ```
    - Sans : ```const Button = styled.button([
                "color: red"
             ]);
             ```

- Comment utilise-t-on les props dans cette librarie ?
    - En utilisant ```${props => ...}```

- Reprendre l'exemple du Material UI avec styled-components; l'écrire avec la composition et avec l'héritage.
    ```import React from 'react';
    import styled from 'styled-components';

    const style = `
    font-size: 20px;
    cursor: pointer;
    border: none;
    padding: 10px;
    margin: 5px;
    color: white;
    `

    const ButtonBlue = styled.button`
    ${style}
    background-color: blue
    `

    const ButtonRed = styled.button`
    ${style}
    background-color: red
    `

    function App(props) {
    return (
        <div>
        <ButtonBlue> Test </ButtonBlue>
        <ButtonRed> Click me </ButtonRed>
        </div>
    );
    }

    export default App; 
    ``` 

- Quelles sont les fonctions du contexte de styled-components ?
    - Ces fonctions permettent de gérer un thème.



## Mise en place du design

Pour mettre en pratique ces notions, je vous propose de designer une application reprenant le principe de jeu du loup garou.

Cette plateforme est entièrement numérique, ce qui permet de s'affranchir d'un maître du jeu, et donc d'avoir un joueur supplémentaire.

A l'initialisation de la partie, un joueur démarre une partie. Un court identifiant est alors communiqué aux autres joueurs, qui doivent rejoindre la partie.
Lorsque tous les joueurs ont rejoint la partie, la partie peut démarrer. Chaque joueur joue à tour de rôle depuis son téléphone.

Une contrainte importante est la synchronisation des joueurs : chaque joueur utilise son propre téléphone. Il reçoit un message lorsque c'est à son tour de jouer, ou attend autrement. Pour résoudre techniquement cette contrainte, tout en évitant d'écrire une application en backend, on utilise Firebase. Firebase permet d'utiliser des observateurs, qui réagissent lors d'un appel extérieur, ce qui donne une impression de temps réel.

Une partie du code vous est fournie, afin de faciliter la mise en place de Firebase et des context providers. Il vous est demandé d'explorer le code, d'y apporter un design responsive, et de compléter l'application pour ajouter les différentes étapes de jeu.

Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase.
Activer l'authentification anonyme dans la console de Firebase.

### Découverte du code

- Le code utilise des fonctions plutôt que des classes. Ecrire un bouton sous la forme d'une classe et d'une fonction. Retrouver les équivalences entre les méthodes des composants (telles que setState) et celles des fonctions ?
    - le code est dans 'components/Button.js'.

- Comment récupérer les props dans une fonction ?
    - En faisant ```const ...= (props) => {}```

- Dans `App.js`, identifier les différents producteurs de données. Retrouver leur définition. Quelles données partagent-ils à l'ensemble de l'application ?
    - CodePage.js : Permet d'ajouter notre pseudo dans l'instance de la partie 
    - CreatePage.js : Permet de créer une instance de partie
    - SpellPage.js : Permet de mettre à jour les actions de la sorcière, tuer, ressusciter ou ne rien faire.

- Identifier les différentes pages de l'application. Décrire à l'aide d'une phrase le rôle de chacune d'entre elles.
    - App.js : Sorte de sommaire qui créé les liens entre les pages grâce aux route path.
    - AlivePage.js : Indique le rôle de chaque joueur.
    - CastPage.js : Permet de vérifier si un joueur est encore en vie et l'envoyer sur la page d'attente (?)
    - CodePage.js : Page qui s'affiche quand on clique sur 'Rejoindre une partie', permet de copier le code donné par ses amis, de rentrer un pseudo et de rejoindre une partie.
    - CreatePage.js : Page qui s'affiche quand on clique sur 'Nouvelle partie', permet de générer un code pour que ses amis puissent rejoindre, et de lancer la partie.
    - DeadPage.js : Page qui s'affiche quand le joueur meurt.
    - EndPage.js : Page qui s'affiche quand la partie est terminée. Permet d'afficher le nom des gagnants.
    - NightPage.js : Page qui s'affiche quand c'est la nuit.
    - ResultsPage.js : Page qui s'affiche à la fin de chaque vote du village. Permet d'afficher qui a été tué par les villageois.
    - SpellPage.js : Permet à la sorcière de choisir entre ses deux potions, ou de ne rie nfaire.
    - StartPage.js : Page d'accueil commune à chaque joueur, permet de choisir entre créer une partie ou la rejoindre.

- Pourquoi voit-on sur plusieurs pages "Chargement du master game en cours" ?
  - Cette phrase apparaît quand le jeu est en train de charger ou n'est pas démarré.

- Avec les classes, nous utilisions `withMyContext` pour s'inscrire aux données d'un provider. Identifier dans services/Game.js la fonction qui joue désormais ce rôle.
  - Le fonction qui joue ce rôle est `useGame`.

- Dans `CodePage`, rappeler comment un formulaire gère les champs de remplissage des données.
  - À chaque changement dans le formulaire, la nouvelle valeur est stockée dans une variable (fonction e.target.value). Lors de l'envoi, la variable est alors transmise au state qui modifie sa valeur sans recharger la page.


### Reprise du design

- En utilisant styled-components, reprendre le design du composant Button.
- Votre nouveau bouton peut alors être utilisé pour améliorer l'affichage de la page `StartPage`.
- Ajouter un header et un footer sur toutes les pages de l'application. 
- Réaliser le design du formulaire de `CodePage`, utilisé pour rejoindre l'application.
- Faire de même avec `CreatePage`.


### Utilisation de Firebase

- Dans 'User.js', comment fait-on pour garder une trace persistente de l'application, même lorsqu'on rafraichit la page ? Comment reconnait-on l'utilisateur lorsqu'il revient dans l'application ?
  - L'utilisateur est reconnu même au chargement de la page grâce à Firebase qui fournit un cookie de connexion au navigateur. Cela permet alors de ne pas utiliser de back-end spécialisé pour la connexion.

- Dans Firebase, nous ne pouvons pas ajouter des champs à un utilisateur. Par conséquent, nous devons créer une collection d'utilisateurs et synchroniser les utilisateurs avec cette table. Expliquer où est-ce que cette synchronisation a lieu.
  - Cette synchronisation a lieu grâce à la fonction useUser dans le fichier User.js, qui récupère les informations de l'utilisateur et l'associe avec un id dans une collection d'utilisateurs : la synchronisation avec Firebase est effectuée.

- A votre avis, à quoi sert useEffect ?
  - /

- A quoi sert la fonction `unsubscribe` utilisée dans les `useEffect` de `User.js` ?
  - /

- Décrire les trois valeurs de retour de `UseUser`.
  - Error : Indique s'il y a eu une erreur 
  - Loading : Indique si le chargement est toujours en cours ou non
  - User : Représente l'objet user

- Combien de collections dans Firebase pouvez-vous identifier ? A quoi correspondent les `doc` ?
  - Deux collections sont présentes dans Firebase : game (représente les parties) et user (représente les utilisateurs).
  - Un document dans Firebase représente une entrée dans la collection.


### Contribuer à l'application

- Lors du lancement du jeu, ajouter l'attribution des rôles à chaque joueur : loup-garou, villageois, petite fille ou sorcier. Le nombre de loup-garou est calculé en fonction du nombre de joueurs.
- Chaque joueur reçoit alors une image de son rôle. Partager cette information depuis /wait.
- Lorsque la nuit tombe, la liste des joueurs encore vivants est proposée aux  loups garous, qui doivent se mettre d'accord. Réaliser cette fonction.
- Lorsque le jour arrive, tous les joueurs reçoivent une notification indiquant la cible des loups garous. Cette dernière est redirigée vers DeadPage.
- Les joueurs vivant votent pour éliminer un joueur, suspecté d'être un loup garou. Réaliser cette fonction.

### Rapport

Rédiger un court rapport -- inférieur à une page, expliquant les modifications apportées au projet. Motiver ses choix. Expliquer les difficultés rencontrées.

##### Modifications

- Ajout d'un design pour les boutons : couleur rouge sang (pour le thème du loup-garou), et couleur encore plus rouge au hover. Utilisation de styled-components.
- Ajout d'une image de fond.
- Design du formulaire : l'un en dessous de l'autre, bordure rouge sang, input plus grand. Utilisation de styled-components.
- Ajout d'un header et d'un footer basique au sein d'un seul composant 'Layout.js' qui est encapsulée dans 'App.js'.

##### Difficultées rencontrées

- Changement de PC dû à un bug : Github et React ne marchaient plus. 
- Comprendre comment marche Styled Components, et l'utiliser correctement.
- Quelques problèmes de compréhension au niveau de Firebase : tout n'est pas encore très clair dans mon esprit. 


