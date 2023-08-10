document.querySelector('#elastic').addEventListener('input', function () {
  let currentValue = this.value.trim().toLowerCase();
  let elasticItems = document.querySelectorAll('.elastic li');

  elasticItems.forEach(function (elem) {
    if (elem.textContent.toLowerCase().search(currentValue) === -1) {
      elem.style.display = 'none';
    } else {
      elem.style.display = null;
      let str = elem.textContent;
      elem.innerHTML = insertMark(
        str,
        str.toLowerCase().indexOf(currentValue),
        currentValue.length
      );
    }
  });
});

function insertMark(string, position, length) {
  return (
    string.slice(0, position) +
    '<mark>' +
    string.slice(position, position + length) +
    '</mark>' +
    string.slice(position + length)
  );
}
