// Marking completion
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

// Delete completed toDo
$("ul").on("click", "span", function (event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
});

// Add toDo to list
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        var inputText = $(this).val();
        $("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span> " + inputText + "</li>");
        $(this).val("");
    }
});

//Toggle Input form
$(".fa-plus").on("click", function () {
    $("input[type='text']").fadeToggle();
});