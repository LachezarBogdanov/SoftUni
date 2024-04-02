function replaceChars (str){

    let result = '';

    for (let i = 0; i < str.length; i++) {
        if(i === 0) {
            result += str[i];
        }else {
            if(str[i] !== str[i - 1]) {
                result += str[i];
            }
        }
    }
    console.log(result);

}
replaceChars('qqqwerqwecccwd');