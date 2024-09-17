// utils/massiveFunction.js
export function massiveFunction(text, replacements) {
  return text.replace(/\[(\d+)(LA|LAN|SENDER)\]/g, (match, count, type) => {
    let result = '';
    count = parseInt(count, 10);

    if (type === 'LA') {
      result = Array.from({ length: count }, () =>
        String.fromCharCode(97 + Math.floor(Math.random() * 26))
      ).join('');
    } else if (type === 'LAN') {
      const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
      result = Array.from(
        { length: count },
        () => characters[Math.floor(Math.random() * characters.length)]
      ).join('');
    } else if (type === 'SENDER') {
      result = replacements['SENDER'] || 'SENDER';
    }

    return result;
  });
}
