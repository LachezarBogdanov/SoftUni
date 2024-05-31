function pieceOfPie (arr, firstTarg, secondTarg){

    let indexOfFirst = arr.indexOf(firstTarg);
    let secondIdx = arr.indexOf(secondTarg);
    let newArr = arr.slice(indexOfFirst, secondIdx + 1);
    
    return newArr;
}
pieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie');