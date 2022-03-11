$(".select-game-row .select-btn").on("click", function (event) {
  var dataId = $(event.currentTarget).attr("data-id");
  console.log(dataId);
  $(".heading2").hide();
  $(".game-select-options").hide();
  $(".back-btn").show();
  $('.games-section .hide[data-id="' + dataId + '"]').show();
});

$(".back-btn").on("click", function (event) {
  $(".heading2").show();
  $(".game-select-options").show();
  $(".back-btn").hide();
  $("#game-section .games-section .hide").hide();
  location.reload();
});

function closeinstruct() {
  $(".content-wrapper").hide();
  $(".instruction-page").show();
}

function backfullcontent() {
  $(".content-wrapper").show();
  $(".instruction-page").hide();
}
