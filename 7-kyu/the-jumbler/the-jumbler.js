function jumbler(indices) {
    let arr = indices.slice(); 
    let count = 0;
​
    while (arr[0] !== 0) {
        let searchIndex = arr[0];
        let value = arr[searchIndex];
        arr.splice(searchIndex, 1);  
        arr.unshift(value);          
        count++;
    }
​
    return count;
}