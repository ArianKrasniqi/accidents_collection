exports.now = () => {
  const tmp = new Date().toLocaleDateString().split('/');

  const EUFormatDate = `${tmp[1]}-${tmp[0]}-${tmp[2]}`;
  return EUFormatDate;
}