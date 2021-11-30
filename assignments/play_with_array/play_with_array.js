function getEven(arr) {
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */
   var even = []
   for(var i = 0 ; i < arr.length ; i++){
       if(arr[i]%2 === 0){
           even.push(arr[i])
       }
   }
   return even

}

function multiplyByN(arr, n) {
    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
   mul_arr = []
   for(var j = 0; j<arr.length; j++){
       mul_arr.push(arr[j]*3)
   }
   return mul_arr
}

function removeNthElement(arr, n) {
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
   value = []
   for(var b = 0; b < arr.length; b++){
       if(arr[b] ===n){

       }
       else{
           value.push(arr[b])
       }
   }
   return value
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}