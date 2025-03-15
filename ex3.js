let text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";


const texto = `Ceci est la première ligne.
Ceci est la deuxième ligne.
loop noon.
Il y a une ligne avec un I.
Voici une autre ligne sans I.`;
function myfunc(txt){
    return txt
    .split("\n")
    .map((n)=>n.toUpperCase())
    .filter(ligne =>ligne.includes('I'))
    .forEach(ligne =>  console.log(ligne))
    ;
   }
myfunc(texto);
