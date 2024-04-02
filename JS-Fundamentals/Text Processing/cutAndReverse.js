function cutAndReverse (str){

    let idxToCut = str.length / 2;

    let firstHalf = str.substring(0, idxToCut).split('').reverse().join('');
    let secondHalf = str.slice(idxToCut).split('').reverse().join('');

    console.log(firstHalf);
    console.log(secondHalf);

    

}
cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');