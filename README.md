                             Rapport Atelier 3 : 
Javascript et Programmation Fonctionnelle
Objectif
L’objectif principal de cet atelier est de se familiariser avec les concepts de la programmation fonctionnelle en JavaScript à travers plusieurs exercices pratiques.
Exercice 1 : Filtrage des nombres pairs
Solution
const numbers = [1, 7, 10, 9, 8 , 2];
console.log(numbers);
//pair,
console.log(numbers.filter(n=>n%2==0));

Exercice 2 : Calcul des factorielles 
Solution
function fact2(n){
if(n==1)
    return 1;
else
return n*fact2(n-1);
}


console.log(numbers2.map(n=>fact2(n)));
Exercice 3 : Filtrage de texte
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


Exercice 4 : Trouver le maximum dans un tableau
Solution
console.log("le max est :"+numbers.reduce((max,current)=>
  current>max ?current : max)
);

Exercice 5 : Calcul du prix total avec TVA
const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
    ];


    //tva calcul
    //prix TTC=prix HT×(1+taux de TVA/100)
    const result=products.map(n=>n.price*1.25).reduce((val ,sum )=>sum +val,0);
    console.log(result);

Exercice 6 : Application Web de Gestion des Produits
     Objectif
Développer une application web permettant de :
Filtrer les produits par catégorie
Calculer le prix total des produits
Trouver les produits en faible stock
Trier les produits par prix ou quantité
Rechercher un produit par son nom
Afficher un tableau de bord avec des graphiques (Chart.js)
Implémentation
Chargement des produits depuis un fichier JSON
document.getElementById("fileInput").addEventListener("change",function(e){
    const file = e.target.files[0]; if (!file) return;
    let fr = new FileReader();
    fr.onload= function(e){
        try{
            products=JSON.parse(e.target.result);
            console.log("donnes :",products);
            populatecategory();
            updateTable()
           
         } catch (error) {
            console.error("Erreur lors du chargement du JSON :", error);
        }
    };
    fr.readAsText(file);


});


Filtrage et tri des produits
function updateTable(){
    const searchText=document.getElementById("search-bar").value.toLowerCase();
    const categoryfilter=document.getElementById("categoryfilter").value;
    const stocklow=document.getElementById("stock-search").value;
    const triselected=document.getElementById("tri").value;
    const priceinput=document.getElementById("totalPrice");


    const stocklowValue = stocklow ? parseInt(stocklow, 10) : null;
    const filterproducts = products.filter(p =>
        p.name.toLowerCase().includes(searchText) &&
        (categoryfilter === "" || p.category === categoryfilter) &&
        (stocklow === "" || p.stock === stocklowValue)
    );
    if(triselected=="stock"){
        filterproducts.sort(function(a, b){return a.stock-b.stock});


    }else if(triselected=="price"){
        filterproducts.sort(function(a, b){return b.price-a.price});


    }
let tableHtml=`
<table>
  <thead>
  <tr>
                    <th>Nom</th>
                    <th>Prix</th>
                    <th>Catégorie</th>
                    <th>Stock</th>
  </tr>
  </thead>
</tbody>
`;
filterproducts.forEach(product => {
    tableHtml+=`
    <tr>
    <td>${product.name}</td>
    <td>${product.price} dh</td>
    <td>${product.category}</td>
    <td>${product.stock}</td>
    </tr>
    `
   
});
tableHtml+=`</tbody></table>`;


let price = filterproducts.reduce((sum, p) => sum + p.price, 0);
priceinput.value=price;


console.log("price is "+price);
//document.getElementById("totalPrice").value = price;
document.getElementById("listprod").innerHTML = tableHtml;
}


function generatedachstock(categories,stockdata){
    const ctx = document.getElementById("stockChart").getContext("2d");
new Chart(ctx, {
   type: "pie",
   data: {
     labels: categories,
     datasets: [{
        backgroundColor: [
            "rgba(99, 133, 255, 0.6)",  // Rouge
            "rgba(54, 162, 235, 0.6)",  // Bleu
            "rgba(255, 206, 86, 0.6)",  // Jaune
            "rgba(65, 26, 100, 0.6)",  // Vert
            "rgba(153, 102, 255, 0.6)", // Violet
            "rgba(64, 217, 255, 0.6)"   // Orange
        ],
       data: stockdata
     }]
   },
   options: {
    responsive: true,
    plugins: {
     title: {
       display: true,
       text: "stock data"
     }
   }
}
 });
}



Affichage du pie avec Chart.js du stock des produits par catégories :
function generatedachstock(categories,stockdata){
    const ctx = document.getElementById("stockChart").getContext("2d");
new Chart(ctx, {
   type: "pie",
   data: {
     labels: categories,
     datasets: [{
        backgroundColor: [
            "rgba(99, 133, 255, 0.6)",  // Rouge
            "rgba(54, 162, 235, 0.6)",  // Bleu
            "rgba(255, 206, 86, 0.6)",  // Jaune
            "rgba(65, 26, 100, 0.6)",  // Vert
            "rgba(153, 102, 255, 0.6)", // Violet
            "rgba(64, 217, 255, 0.6)"   // Orange
        ],
       data: stockdata
     }]
   },
   options: {
    responsive: true,
    plugins: {
     title: {
       display: true,
       text: "stock data"
     }
   }
}
 });
}

Affichage du tableau de bord avec Chart.js du prix des produits:
function generatedachprice(productname,prices){
    const ctx = document.getElementById("priceChart").getContext("2d");
    const xValues = productname;
    const yValues = prices;
   
    new Chart(ctx, {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
            label: "Prix des produits (dh)",
          backgroundColor:"rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues,
          fill: false,  // Ne pas remplir sous la ligne
                borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
}  

