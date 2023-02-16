module.exports = function check(str, bracketsConfig) {
  const config = bracketsConfig.map(el => el.join(''));
  for (let j = 0; j < config.length;) {
    !str.includes(config[j]) ? j++ : (str = str.replace(config[j], ''), j = 0)
  }
  return str.length === 0 ? true : false
}
