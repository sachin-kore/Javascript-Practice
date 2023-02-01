const num = -121;

function Palindrome(num) {
    let rem, temp, final = 0;
    temp = num;
    while (num > 0) {
        rem = num % 10;
        num = parseInt(num / 10);
        final = final * 10 + rem;
    }
    if (final == temp) {
        console.log(temp, "Number is palindrome");
    } else {
        console.log(temp, "Number is not palindrome");
    }
}
Palindrome(num);