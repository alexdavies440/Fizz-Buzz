
window.addEventListener("load", function() {

    let header = document.querySelector("h1");
    header.style = "text-align: center";

    let form = document.querySelector("form");
    form.style = "text-align: center; font-size: larger";

    document.addEventListener("submit", function(event) {

        const fizz = document.querySelector("input[name=fizz]").value;
        const buzz = document.querySelector("input[name=buzz]").value;
        const fizzbuzz = fizz * buzz;
        const countTo = document.querySelector("input[name=countTo]").value;
        let result = [];
        for (let i = 1; i <= countTo; i++) {
            result.push(i);
        }
        
        for (let i = 0; i < result.length; i++) {
    
            if (result[i] % fizzbuzz === 0) {
                result[i] = "Fizzbuzz";
            }
            else if (result[i] % fizz === 0) {
                result[i] = "Fizz";
            }
            else if (result[i] % buzz === 0) {
                result[i] = "Buzz";
            }
        }
        console.log(result);
        let addSpace = function(num) {
            return " " + num + " ";
        }
        result = result.map(addSpace);
        console.log(result);
        // let space = "------";
        // space = " ";
        //space = ")...(";
        space = "...";
        space ="~"
        result = result.join(space);
        //console.log(result)
        let p = document.querySelector("p");
        p.innerHTML = result;

        event.preventDefault();
    })
    
})
    