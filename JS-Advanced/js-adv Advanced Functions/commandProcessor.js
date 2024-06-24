function solution (){

    let string = '';
    let obj = {
        append: function(word) {
            string += word;
        },

        removeStart: function(number){
            string = string.slice(number);
        },

        removeEnd: function(number){
            string = string.slice(0, -number);
        },

        print: function(){
            console.log(string);
        }
    }

    return obj;
}

let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();