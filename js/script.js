$(document).ready(function(){
	new WOW().init();
    $(".tel, ._x37847471 input").intlTelInput(
        {
          utilsScript       : 'js/utils.js',
          defaultCountry    : 'auto',
          separateDialCode  : false,
          nationalMode      : false,
          initialCountry    : 'auto',
          geoIpLookup       : function (callback) {
            $.get("https://ipinfo.io", function () {
            }, "jsonp").always(function (resp) {
              var countryCode = (resp && resp.country) ? resp.country : "";
              callback(countryCode);
            });
          },
          preferredCountries: ['ru', 'ua', 'by', 'kz']
        });
});