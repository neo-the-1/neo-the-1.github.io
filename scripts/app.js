$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function hit() {
  var key = 'hit';
  if (sessionStorage.getItem(key) == true)
    return;
  $.post("https://neo-the-1.cfapps.io/hits", (data) => sessionStorage.setItem(key, true));
}
