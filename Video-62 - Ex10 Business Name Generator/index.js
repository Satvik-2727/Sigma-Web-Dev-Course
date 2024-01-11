let adj = "";
let shop = "";
let suffix = "";

function complete_name(adjective,shop_name,suffix) {
    shop_name = `${adjective} ${shop_name} ${suffix}`;
    console.log(`The name of your shop is ${shop_name}`);
}

function random(){
    let random_num = Math.round(Math.random()*10);
    if(random_num <5){
        return 1;
    }
    else if(random_num == 5){
        return 2;
    }
    else{
        return 3;
    }
}

function adjective_func(){
    let adj1 = "Crazy";
    let adj2 = "Amazing";
    let adj3 = "Fire";
    if (random() == 1){
        return adj1;
    }
    else if (random() == 2){
        return adj2;
    }
    else{
        return adj3;
    }
} 
function shop_func(){
    let shop1 = "Engines";
    let shop2 = "Foods";
    let shop3 = "Garments";
    if (random() == 1){
        return shop1;
    }
    else if (random() == 2){
        return shop2;
    }
    else{
        return shop3;
    }
}
function suffix_func(){
    let suffix1 = "Bros";
    let suffix2 = "Limited";
    let suffix3 = "Hub";
    if (random() == 1){
        return suffix1;
    }
    else if (random() == 2){
        return suffix2;
    }
    else{
        return suffix3;
    }
    // console.log(suffix)
} 


adj = adjective_func();
shop = shop_func();
suffix = suffix_func();
pura_naam = `${adj}  ${shop}  ${suffix}`;
console.log(pura_naam);