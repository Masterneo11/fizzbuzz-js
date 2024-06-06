document.getElementById("fizz").addEventListener("click", (e) => {

    function fizzBuzz() {

        for (let i = 0; i < 101; i++) {
            if (i % 5 === 0 && i % 3 === 0) {
                console.log(`${i}: Fizz Buzz`);
            }
            else if (i % 5 === 0) {
                console.log(`${i}: Buzz`);
            }
            else if (i % 3 === 0) {
                console.log(`${i}: Fizz`);
            }
            else {
                console.log(i);
            }
        }
        alert(`fizz buzz wooo `);
    }
    fizzBuzz();
});