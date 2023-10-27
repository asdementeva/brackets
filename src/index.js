module.exports = function check(str, bracketsConfig) {
   const stack = [];
  const openBrackets = new Set();
  const bracketMap = new Map();

  for (const [open, close] of bracketsConfig) {
    openBrackets.add(open);
    bracketMap.set(close, open);
  }

  for (const char of str) {
    if (openBrackets.has(char)) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false; // Unmatched closing bracket
      }

      const top = stack.pop();
      if (top !== bracketMap.get(char)) {
        return false; // Mismatched brackets
      }
    }
  }

  return stack.length === 0; // Stack should be empty for a valid sequence

}
