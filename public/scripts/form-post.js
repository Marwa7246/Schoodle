$('#form-submission')
    .ajaxForm({
        url : '/create-bookie/', // or whatever
        dataType : 'json',
        success : function (response) {
            alert("The server says: " + response);
        }
    })
;
