const num = 543175377;
function addData(num) {
    let convertedString = "" + num;
    let convertedArray = convertedString.split("").map((data) => {
        return parseInt(data);
    });
    const finalOutput = convertedArray.reduce((a, b) => a + b)
    if (finalOutput > 10) {
        addData(finalOutput);
    } else {
        console.log(finalOutput); 
    }
}
addData(num);