Pour déclarer une classe en Java, utilisez un mot-clé classe suivi d'un nom personnalisé. Ensuite, terminez avec des accolades ouvrante et fermante ({}) pour l'ensemble du contenu. Ceci inclut la liste complète des propriétés :

<pre>class Book {
// propriétés d'une classe
}
</pre>

Maintenant, ajoutons les champs définis précédemment :

<pre>class Book {
String title;
String author;
int numberOfPages; 
String publisher="OC";
}
</pre>

Avez-vous remarqué que les trois premiers n'ont pas de valeurs, mais que le dernier en a une ?

L'exemple précédent peut s'appliquer si vous êtes un éditeur et que vous voulez cataloguer vos livres. Comme ce sont vos propres stocks, vous savez que la valeur de l'éditeur sera toujours la même, peu importe le livre. Les titres des livres, les auteurs et les numéros de page, cependant, changeront en fonction du livre en question.

Cependant, si vous revenez à l'exemple original d'une librairie en ligne, la classe ressemblerait davantage à ceci :

<pre>class Book {
String title;
String author;
int numberOfPages;
String publisher; 
}
</pre>

Comme vous aurez des livres de plusieurs éditeurs différents, vous ne pouvez pas mettre pour chacun d'entre eux une valeur par défaut. Vous définissez donc ici le champ et vous ajouterez une valeur ultérieurement !

### **Utilisez des classes**

Vous avez un tout nouveau type – Book 📖 – mis en œuvre !

Que pouvez-vous en faire ?

Les classes sont plus abstraites ou conceptuelles. Les champs de classe sont comme un modèle sur une librairie en ligne : peu importe le livre que vous recherchez, les mêmes informations apparaîtront (titre, auteur, nombre de pages, etc.).

