// Cookies - a small text file stored on your computer
    // - used to remember information about the user, it is stored in name=value pairs

    // check if cookies is enabled on browser
    // console.log(navigator.cookieEnabled)

        // to add a cookie manually
            // document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"
        // can hold more than one cookie
            // document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"

        // to override just set new values
        // console.log(document.cookie)

    // deleteCookie("firstName");
    // deleteCookie("lastName");

    setCookie("email", "sponge@gmail.com", 365)
    console.log(document.cookie)

    function setCookie(name, value, daysToLive) {
        const date = new Date();
        date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000)
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }

    // to delete a cookie all we have to do is set a past date
    function deleteCookie(name) {
        setCookie(name, null, null)
    }