export function romanToInteger(str) {
    let result = 0;
    let letter = 0;
    for (let i = 0; i < str.length; i += 1) {
        let letter1 = letter;
        let a = 0;
        switch (str[i]) {
            case 'I':
                letter = 1;
                break;
            case 'V':
                letter = 5;
                break;
            case 'X':
                letter = 10;
                break;
            case 'L':
                letter = 50;
                break;
            case 'C':
                letter = 100;
                break;
            case 'D':
                letter = 500;
                break;
            case 'M':
                letter = 1000;
                break;
        }
        if (letter > letter1) {
            a = -2 * letter1;
        }
        result += a + letter;
    }
    return result;
}
