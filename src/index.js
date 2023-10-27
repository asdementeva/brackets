module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = new Set();
  const closeBracketToOpenBracket = {};

  for (const [open, close] of bracketsConfig) {
    openBrackets.add(open);
    closeBracketToOpenBracket[close] = open;
  }

  for (const char of str) {
    if (openBrackets.has(char)) {
      // Если текущий символ - открывающая скобка, добавляем ее в стек
      stack.push(char);
    } else {
      // Если текущий символ - закрывающая скобка
      if (stack.length === 0) {
        // Если стек пуст, то нет соответствующей открывающей скобки
        return false;
      }

      const lastOpenBracket = stack.pop();
      if (lastOpenBracket !== closeBracketToOpenBracket[char]) {
        // Проверяем, соответствует ли текущая закрывающая скобка последней открывающей
        return false;
      }
    }
  }

  // Если после обхода строки стек не пуст, то есть непарные открывающие скобки
  return stack.length === 0;

}
