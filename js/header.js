$(document).ready(function () {
	var baseurl = '/JalanInfosystem';

	$('button#contactbtn').click(function () {
		window.location = baseurl + '/contact/';
	});

	var pathname = window.location.pathname;
	if (pathname === baseurl + '/contact/') {
		$('#contactbtn').addClass('linkbtnnow');
	}
});