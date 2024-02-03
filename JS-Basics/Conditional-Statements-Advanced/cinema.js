function cinema (input){

    let projection = input[0];
    let r = Number(input[1]);
    let c = Number(input[2]);
    let income = 0;

    if(projection === 'Premiere'){
        income = (r * c) * 12;
    }else if(projection === 'Normal'){
        income = (r * c) * 7.5;
    }else if(projection === 'Discount'){
        income = (r * c) * 5;
    }
    console.log(income.toFixed(2));

}
cinema(["Premiere",
"10",
"12"]);