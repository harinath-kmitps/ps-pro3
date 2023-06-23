const addinp = async () => {
    var new_chq_no = parseInt($('#total_chq').val())+1;
    var new_input="<input type='text' id='new_"+new_chq_no+"'> <br>";
    $('#total_chq').val(new_chq_no)
    $('#new_chq').append(new_input);
    const nd=document.getElementById("new_chq").value;
    console.log(nd);
}