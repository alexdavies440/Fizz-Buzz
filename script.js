
window.addEventListener("load", function() {
    let result = [];
    for (let i = 1; i < 100; i++) {
        result.push(i);
    }
    
    for (let i = 0; i < result.length; i++) {
        
        if (result[i] % 15 === 0) {
            result[i] = "fizzbuzz";
        }
        else if (result[i] % 3 === 0) {
            result[i] = "fizz";
        }
        else if (result[i] % 5 === 0) {
            result[i] = "buzz";
        }
    }
    
    result = result.join("<br>");
    console.log(result)
    let p = document.querySelector("p");
    p.innerHTML = result;
})
    