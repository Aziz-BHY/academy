Les objets JavaScript sont écrits en **JSON (JavaScript Object Notation)**. Ce sont des séries de **paires clés-valeurs** séparées par des virgules, entre des accolades. Les objets peuvent être enregistrés dans une variable :

<pre>let myBook = {

 

title: 'The Story of Tau',

 

author: 'Will Alexander',

 

numberOfPages: 250,

 

isAvailable: true

 

};
</pre>

Chaque clé est une chaîne (title, author, numberOfPages...), et les valeurs associées peuvent avoir tout type de données (nombre, chaîne, etc.).

Construire des objets présente un avantage essentiel : cela permet de regrouper les attributs d'une chose unique à un même emplacement, que ce soit un livre, un profil d'utilisateur ou la configuration d'une application, par exemple.

#### **Pratiquez la création d'un objet**

**T**

Dans un exercice précédent, vous avez créé trois variables pour décrire l'épisode d'une série. On dirait la situation parfaite pour créer un seul objet episode : créons-le maintenant !

Rendez-vous sur cet [exercice CodePen](<https://codepen.io/nicolaspatschkowski/pen/NWqMQvM>).

1. Créez un objet (Object, en anglais) et stockez-le dans une variable appelée episode . Utilisez bien des accolades {} et mettez les trois attributs suivants :

<!-- -->

- title : le titre de l'épisode ;
- duration : la durée de l'épisode ;
- hasBeenWatched : si l'épisode a été visionné ou non.

<!-- -->

Associez des valeurs appropriées à chaque attribut.

N'oubliez pas d'utiliser des paires clé-valeur séparées par des virgules. Votre code ira entre les commentaires "===" sur l'exercice.

Si vous n'y arrivez pas du premier coup, ne vous découragez pas, poursuivez vos efforts ! L'apprentissage de la programmation se fait en pratiquant et en apprenant de ses erreurs. 😎

##### **Solution**

[Voici un nouveau CodePen avec une solution](<https://codepen.io/nicolaspatschkowski/pen/qBdvRdw>) à l’exercice.

#### **Accédez aux données d'un objet**

Maintenant que vous savez comment créer un objet en JavaScript, voyons comment accéder aux données dans un objet avec la **notation pointée (dot notation)**, expliquée ci-dessous.

Une fois qu'un objet est enregistré dans une variable, vous pouvez accéder à ses données comme dans l'exemple ci-dessous.

<pre>let myBook = {

 

title: "L'Histoire de Tao",

 

author: "Will Alexander",

 

numberOfPages: 250,

 

isAvailable: true

 

};

 

let bookTitle = myBook.title;  // "L'Histoire de Tao"
</pre>

