// Braces Valid

function bracesValid(str){
    var braceBuddies = {
        '}': '{',
        ']': '[',
        ')': '(',
    }
    var stack = []; // []

    for (var i = 0; i < str.length; i++)
    {
        if (str[i] == '(' || str[i] == '[' || str[i] == '{')
        {
            stack.push(str[i]);
        }
        else if (str[i] == ')' || str[i] == ']' || str[i] == '}')
        {
            var opener = stack.pop();
            if (opener != braceBuddies[str[i]])
            {
                return false;
            }
        }
    }
    return (stack.length == 0);
}

console.log(bracesValid("{H[ell(o)W]or}ld")); // true
console.log(bracesValid("{H[ell(o)W]or}ld(")); // false
console.log(bracesValid("{H(ello[Wo}rl]d)")); // false