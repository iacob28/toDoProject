// Marking completion
$("li").on("click", function(){
    $(this).toggleClass("completed");
});

// Delete completed toDo

$("span").on("click", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});