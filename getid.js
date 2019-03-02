FB.init(
{
    appId  : 2219729861583137,
    status : true, // check login status
    cookie : true, // enable cookies to allow the server to access the session
    xfbml  : true  // parse XFBML
});

if(FB.getLoginStatus() != null) {
FB.api('/me', function(response) 
    {
        alert ("Welcome " + response.name + ": Your UID is " + response.id); 
    });
}