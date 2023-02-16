module.exports = function check(str, bracketsConfig) {

  const config = bracketsConfig.map(el => el.join(''));
  for (let i = 0; i < config.length;) {
    !str.includes(config[i]) ? i++ : (str = str.replace(config[i], ''), i = 0)
  }
  return str.length === 0 ? true : false
} // your solution
