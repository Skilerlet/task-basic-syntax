export function romanToInteger(str) {
    let result = 0;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    const alfabet = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    for (let i = 0; i < str.length; i++) {
        if (alfabet[str[i]] < alfabet[str[i + 1]]) {
            result += alfabet[str[i + 1]] - alfabet[str[i]];
            i++;
        } else {
            result += alfabet[str[i]];
        }
    }
    return result;
}
