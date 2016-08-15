$(document).ready(function() {
  $("#things").submit(function(event) {
    event.preventDefault();
    $("#things").toggle();
    $(".results").toggle();

    var itemInput1 = $("input#item1").val();
    var itemInput2 = $("input#item2").val();
    var itemInput3 = $("input#item3").val();
    var itemInput4 = $("input#item4").val();

    var list1 = [itemInput1, itemInput2, itemInput3, itemInput4];

    var listCaps = list1.map(function(list) { return list.toUpperCase();
    });

    var alphaList = list1.sort();

    document.write(
      "<ul>"
        + "<li>" + alphaList[0] + "</li>"
        + "<li>" + alphaList[1] + "</li>"
        + "<li>" + alphaList[2] + "</li>"
        + "<li>" + alphaList[3] + "</li>"
          +
      "</ul>"
      );


  });
});
