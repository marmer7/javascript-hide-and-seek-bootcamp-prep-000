function getFirstSelector(selector) {
  var first = document.querySelector(selector)
  return first
};

function nestedTarget() {
  var t = document.getElementById('nested').querySelector('.target')
  return t
}

function increaseRankBy(n) {
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list')
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
}

function deepestChild() {
  var nodes = document.getElementById("grand-node").querySelectorAll('div');
  var deepest = nodes[nodes.length -1];
  return deepest
  // return deepest child, Boo
}
