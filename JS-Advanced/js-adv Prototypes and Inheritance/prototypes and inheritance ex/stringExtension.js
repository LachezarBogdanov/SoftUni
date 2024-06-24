(function solve () {
    String.prototype.ensureStart = function (str) {
        if(this.startsWith(str)) {
            return this.toString();
        } 
        return str + this;
    }
    
    String.prototype.ensureEnd = function (str) {
        if(this.endsWith(str)) {
            return this.toString();
        }
        return this + str;
    }
    
    String.prototype.isEmpty = function() {
        if(this.length === 0) {
            return true;
        }
        return false;
    }
    
    String.prototype.truncate = function(n) {
        if(n < 4) {
            return '.'.repeat(n);
        }
        if(this.length <= n) {
            return this.toString();
        }
        if(this.includes(' ')) {
            let res = [];
            let words = this.split(' ');
    
            for (let word of words) {
                if(res.join(' ').length + word.length + 3 <= n) {
                    res.push(word);
                }else {
                    break;
                }
            }
            return res.join(' ') + '...';
        }
        return this.slice(0, n - 3) + '...';
    }

    String.format = function (string, ...params) {
        for (let i = 0; i < params.length; i++) {
            if(string.includes(`{${i}}`)) {
                string = string.replace(`{${i}}`, params[i]);
            }
        }
        return string;
    }
})()






let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
str = str.truncate(16);
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
str = String.format('The {0} {1} fox', 'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
  'dog');