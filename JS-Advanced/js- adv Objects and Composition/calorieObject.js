function calorieObject (arr){

    let res = {};

    for(let i = 0; i < arr.length; i += 2) {
        let key = arr[i];
        let value = Number(arr[i + 1]);

        res[key] = value;
    }

    console.log(res);
}
calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);