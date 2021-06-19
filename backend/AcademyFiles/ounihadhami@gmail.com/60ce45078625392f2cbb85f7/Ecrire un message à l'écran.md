À partir de maintenant, on va modifier nous-mêmes le code de ce programme minimal.

Votre mission, si vous l'acceptez : afficher le message « Bonjour » à l'écran.

Comme tout à l'heure, une console doit s'ouvrir. Le message « Bonjour » doit s'afficher dans la console.

Comment fait-on pour choisir le texte qui s'affiche à l'écran ?

Ce sera en fait assez simple. Si vous partez du code qui a été donné plus haut, il vous suffit simplement de remplacer « Hello world! » par « Bonjour » dans la ligne qui fait appel àprintf.

Comme je vous le disais plus tôt,printfest une **instruction**. Elle commande à l'ordinateur : « Affiche-moi ce message à l'écran ».

Il faut savoir queprintfest en fait une fonction qui a déjà été écrite par d'autres programmeurs avant vous.

Cette fonction, où se trouve-t-elle ? Moi je ne vois que la fonctionmain!

Vous vous souvenez de ces deux lignes ?

<pre>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;
</pre>

Je vous avais dit qu'elles permettaient d'ajouter des bibliothèques dans votre programme.

Les bibliothèques sont en fait des fichiers avec des tonnes de fonctions toutes prêtes à l'intérieur. Ces fichiers-là (stdio.hetstdlib.h) contiennent la plupart des fonctions de base dont on a besoin dans un programme.stdio.hen particulier contient des fonctions permettant d'afficher des choses à l'écran (commeprintf) mais aussi de demander à l'utilisateur de taper quelque chose (ce sont des fonctions que l'on verra plus tard).

#### **Dis Bonjour au Monsieur**

Dans notre fonctionmain, on fait donc appel à la fonctionprintf. C'est une fonction qui en appelle une autre (ici,mainappelleprintf). Vous allez voir que c'est tout le temps comme ça que ça se passe en langage C : une fonction contient des instructions qui appellent d'autres fonctions, et ainsi de suite.

Donc, pour faire appel à une fonction, c'est simple : il suffit d'écrire son nom, suivi de deux parenthèses, puis un point-virgule.

<pre>printf();
</pre>

C'est bien, mais ce n'est pas suffisant. Il faut indiquer quoi écrire à l'écran. Pour faire ça, il faut donner à la fonctionprintfle texte à afficher. Pour ce faire, ouvrez des guillemets à l'intérieur des parenthèses et tapez le texte à afficher entre ces guillemets, comme cela avait déjà été fait sur le code minimal.

Dans notre cas, on va donc taper très exactement :

<pre>printf("Bonjour");
</pre>

J'espère que vous n'avez pas oublié le point-virgule à la fin, je vous rappelle que c'est très important ! Cela permet d'indiquer que l'instruction s'arrête là.

Voici le code source que vous devriez avoir sous les yeux :

<pre>#include &lt;stdio.h&gt;
#include &lt;stdlib.h&gt;

int main()
{
  printf("Bonjour");
  return 0;
}
</pre>

On a donc deux instructions qui commandent dans l'ordre à l'ordinateur :

1. affiche « Bonjour » à l'écran ;
2. la fonctionmainest terminée, renvoie 0. Le programme s'arrête alors.

<!-- -->

<br>

