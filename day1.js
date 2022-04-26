//https://www.youtube.com/watch?v=M2bJBuaOeOQ
//Credits:- Traversy Media
//TODO - Improve implementation

//1. Reverse a string
function reverseStr(str) {
    // split string and store into list, use reverse and join back
    return str.split('').reverse().join('');
    //alternative approach
    // create empty string variable, loop over arg in reverse and append to variable at each iteration
    // length is 1 indexed
    let reversed = '';
    for(let i = str.length-1; i >=0; i--){
        reversed = reversed + str[i];
    }
    // ?If loop is changed to increasing, and rearrange assignment, it still works.why?
    let rev2 = '';
    for(let char of str) {
        rev2 = char + rev2;
    }

    let rev3 = '';
    str.split('').foreach(char => rev3 = char + rev3);

    // Reduce
    let rev4 = '';
    str.split('').reduce((rev4, char)=>
         char + rev4,'');

}

function isPal(str) {
    // reverse string and compare with original
    const rev = str.split('').reverse().join('');
    return rev === str;
}

function reverseInt(num){
    // convert to string, reverse it and typecast
    const rev = num.toString().split('').reverse().join('');
    //what if we want to preserve the sign? 
    return parseInt(rev) * Math.sign(num);
}

function initCap(sentence) {
    const strArr = sentence.toLowerCase().split(' ');
    for(let i = 0; i <  strArr.length; i++ ){
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(' ');

    // 
    return sentence.toLowerCase().split(' ').map(word => word[0].toUpperCase() + word.substr(1)).join(' ');
    // can also use regex
}

function mostFrequent(word) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = '';
    word.split('').foreach(char => {
        if (charMap[char]){
            charMap[char]++;
        }
        else {
            charMap[char] = 1;
        }
    });
    for (let char in charMap){
        if(charMap[char] > maxNum){
            maxChar = char;
            maxNum = charMap[char];
        }
    }
    return maxChar;
}

function fizzBuzz(num) {
    for (let i = 1; i <= num; i++){
        var str = '';
        if(i%3==0){
            str+= 'Fizz';
        }
        if(i%5==0){
            str += 'Buzz';
        }
        if(str==''){
            str = i;
        }
        console.log(str);
    }
}