
function googleSearch() {
var query = document.getElementById("newSearch").value;
var encodeQuery = encodeURI(query);
[[UIApplication sharedApplication] openURL:[NSURL URLWithString: @"https://www.google.com/search?q=" + encodeQuery]];
};

function toggle() {
document.getElementById('date').classList.toggle('active');
document.getElementById('slider').classList.toggle('active');
document.getElementById('newSearch').classList.toggle('active');
document.getElementById('google').classList.toggle('active');
};
