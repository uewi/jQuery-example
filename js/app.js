(function () {
  $('#itemForm').submit(function (e) {
    e.preventDefault();
    const li = document.createElement('li');
    li.innerText = $('#itemInput').val();
    $('#itemList').append(li);
    $('#itemInput').val('');
  });

  $(document).on('click', 'li', function () {
    $(this).toggleClass('completed-item');
  });
})();
