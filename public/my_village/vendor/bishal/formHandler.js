$('.flagSelector').click(function() {
    var country = $(this).attr('data-country');
    // alert(country);
    $("#countryPanel").hide();
    $("#countryTextbox").val(country);
    $("#languagePanel").show();
});

$('.languageSelector').click(function() {
    var language = $(this).attr('data-language');
    $("#languagePanel").hide();
    $("#languageTextbox").val(language);
    $("#registrationPanel").show();
});


$('#signupButton').click(function(){
    var country = $("#countryTextbox").val();
    var language = $("#languageTextbox").val();
    var name = $("#name").val();
    var username = $("#username").val();
    var password = $("#password").val();
    var city = $("#city").val();
    var payload = {'country': country, 'language': language, 'name': name, 'username': username, 'password': password, 'city': city};
    console.log(payload)
    var url = 'http://127.0.0.1:8000/profile';
    var datatype = 'application/json';

    $.ajax({
        type: "POST",
        url: url,
        data: payload,
        success: function(data) {
            // alert(JSON.stringify(data))
            $("#closeFormModal").click();
            console.log("Show success modal");
            $("#showSuccessModal").click();
            console.log(data);

        }
      });
});