
let products=[];
document.getElementById("fileInput").addEventListener("change",function(e){
    const file = e.target.files[0]; if (!file) return;
    let fr = new FileReader();
    fr.onload= function(e){
        try{
            products=JSON.parse(e.target.result);
            console.log("donnes :",products);
            populatecategory();
            updateTable()


            //dashboards statistic
           

         } catch (error) {
            console.error("Erreur lors du chargement du JSON :", error);
        }
    };
    fr.readAsText(file);

});
  

function populatecategory(){
    const categorySet = new Set(products.map(p => p.category));
    const categoryfilter=document.getElementById("categoryfilter");
    categoryfilter.innerHTML = `<option value="">Toutes les catégories</option>`;

    categorySet.forEach(category=>{
        const option =document.createElement("option");
        option.value=category;
        option.textContent=category;
        categoryfilter.appendChild(option);
    });
}

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
function updateCharts() {
    const categories=[...new Set(products.map(p=>p.category))];
    const stockdata=categories.map(elm=>{
        return products
        .filter(p=>p.category===elm)
        .reduce((sum,p)=>sum+p.stock,0);
    });
    generatedachstock(categories,stockdata)

    //statistique pour dachboareds de prix
    const productname=products.map(n=>n.name);
    const prices = products.map(p => p.price);
    generatedachprice(productname,prices)
   // document.getElementById("fileInput").dispatchEvent(new Event("change"));
}
