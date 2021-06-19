Il y a plusieurs manières d'insérer un commentaire. Tout dépend de la longueur du commentaire que vous voulez écrire.

- Votre commentaire est **court** : il tient sur une seule ligne, il ne fait que quelques mots. Dans ce cas, vous devez taper un double slash (//) suivi de votre commentaire. Par exemple :

<!-- -->

<pre>// Ceci est un commentaire
</pre>

- Vous pouvez aussi bien écrire un commentaire seul sur sa ligne, ou bien à droite d'une instruction. C'est d'ailleurs quelque chose de très pratique car ainsi, on sait que le commentaire sert à indiquer à quoi sert la ligne sur laquelle il est. Exemple :

<!-- -->

<pre>printf("Bonjour"); // Cette instruction affiche Bonjour à l'écran
</pre>

- Votre commentaire est **long** : vous avez beaucoup à dire, vous avez besoin d'écrire plusieurs phrases qui tiennent sur plusieurs lignes. Dans ce cas, vous devez taper un code qui signifie « début de commentaire » et un autre code qui signifie « fin de commentaire » :
- pour indiquer le début du commentaire : tapez un slash suivi d'une étoile (/\*) ;
- pour indiquer la fin du commentaire : tapez une étoile suivie d'un slash (\*/).
- Vous écrirez donc par exemple :

<!-- -->

<pre>/* Ceci est
un commentaire
sur plusieurs lignes */
</pre>

Reprenons notre code source qui écrit « Bonjour », et ajoutons-lui quelques commentaires juste pour s'entraîner :

<pre>/*
Ci-dessous, ce sont des directives de préprocesseur.
Ces lignes permettent d'ajouter des fichiers au projet, 
fichiers que l'on appelle bibliothèques.
Grâce à ces bibliothèques, on disposera de fonctions toutes prêtes pour afficher
par exemple un message à l'écran.
*/

#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

/*
Ci-dessous, vous avez la fonction principale du programme, appelée main.
C'est par cette fonction que tous les programmes commencent.
Ici, ma fonction se contente d'afficher Bonjour à l'écran.
*/

int main()
{
  printf("Bonjour"); // Cette instruction affiche Bonjour à l'écran
  return 0;          // Le programme renvoie le nombre 0 puis s'arrête
}
</pre>

Voilà ce que donnerait notre programme avec quelques commentaires. Oui, il a l'air d'être plus gros, mais en fait c'est le même que tout à l'heure. Lors de la compilation, tous les commentaires seront ignorés. Ces commentaires n'apparaîtront pas dans le programme final, ils servent seulement aux programmeurs.

