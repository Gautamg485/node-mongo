$("#formsubmit").on("click", e => {
	e.preventDefault();
	var data = $("form#listSave").serialize();
	// alert(data);
	$.ajax({
		url: "/users/save",
		method: "POST",
		data: data,
		success: function(data) {
            alert("success");
        } 
	});
});

$('#customers').DataTable();
alert("fsdfsdfsdf");
