// Select color input
// Select size input
var height , width , color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
     event.preventDefault();
     height = $('#inputHeight').val();
     width = $('#inputWidth').val();
     makeGrid(height , width);

    })
function makeGrid(x,o) {
 $('tr').remove();

 for (var i=1; i<=x; i++) {
     $('#pixelCanvas').append('<tr id=table'+ i + '></tr');
    for (var z=1; z<=o; z++) {
        $('#table' + i).append('<td></td>');
    }
    }
//add color
$('td').click(function addcolor() {
    color = $('#colorPicker').val();
    if ($(this).attr('style')) {
        $(this).removeAttr('style')
    } else {
        $(this).attr('style', 'background-color:'+ color);
    }
    
}
)
}

 