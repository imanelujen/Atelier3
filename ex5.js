const products = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 }
    ];

    //tva calcul 
    //prix TTC=prix HT×(1+taux de TVA/100)
    const result=products.map(n=>n.price*1.25).reduce((val ,sum )=>sum +val,0);
    console.log(result);