# Cookies
1. cookies are the set of key value pairs which are stored in the users browser so that it could be sent to the server to remember it's previous information.
2. cookies can be created from the frontend by using javascript using document.setcookie property.And by web server using the header set-cookie.
3. cookies are sent wiht every request to a web server.
4. For every domain(IP address) there is a separate bucket. so every domain's cookie belong's to that bucket only.
   so 2 domain can't share the same cookie. they are saved in different duckets. 
   so amazon domain can not even touch youtube cookie.
5. when a request is made from browser a cookie  is attached to request and sent to the server.

6. if you write a coookie for example.com it will not be available for www.example.com
   If you want a common cookie for them then use """ document.cookie="allName=allTejas; domain=.example.com"  """ 

# path

7. cookies can also be path specific.if you want to make the cookie accessible by only one path then you can make it happen.
path=/ ===> accessible by all the paths of domain.

8. document.cookie="path1Cookie=1; path=/path1"  ===> only accessible by path1

   document.cookie="path2Cookie=2; path=/path2"  ===> only accessible by path2

   document.cookie="allpathsCookie=3; path=/"  ===> accessible by all the paths

This can help us to save our bandwidth because cookies can be huge at times.
login cookies can only be used at their paths and not in the other paths.hence saves our bandwidth.


# expires and max-age

8. this helps to keep the cookie uptill a particular time.
    because as soon as the browser closes the cookie withour this 2 property will be deleted by the browser.


# samesite
9. so as we know that one domain can not get the cookies of the other site. like amazon.com cannot  the the login cookie of youtube.com/ But there is one way that other site can access other site's cookies.if you have a secret cookie stored for example.com . if you are on a server which and make a request to that server , secret cookie will not be given to him because the buckets of cookies are different.But if that server have a hperlink consisting of example.com . And if you click that hyperlink then even the secret cookie will be gone to that server.Therefore we want that even after clcikig the hyperlink the cookies should not go to him . so samesite property is used.
    
    while creating secret cookie in example.com use ===> """ document.cookie="secretCookie=1; sameSite=strict; """  . By doing it when the hyperlink is clicked that server will not the secret cookie . but if you go directly to example.com your cookie will be shared.

    samesite=strict ===>> only available when directly accessed without hyperlinks.

    samesite=lax ===>> available with direct or through hperlinks .---> loose


# Cookie Types
1. session cookie :- This cookie do not have expiry or max-age property. 
   Which allows this type of cookie to be with the browser even if it closes because the session key or 
   cookie is always unabled and disabled from the Redis database
2. httponly cookie :- This cookie is sent by the server which is unreadable by the browser or JavaScript. 
   So if any attacker wants to sniff into our browser and get the particular session key or token ID of the 
   youtube.com then it will not be possible for him. Even our browser cannot read it, we can see it in developer 
   tools but we cannot read it.But this cookie is only send to the server every time at the request
3. Secure cookies:- this cookies will only be sent if the site is https and not http.
4. Third party cookies :- desert the cookies which only track you the cannot access your cookies just keeps 
   the track and can send some of the information to themselves. So if you are running a websit and there is an 
   image which is loaded from another website. Let it see you are on the website example.com and there is an 
   image from youtube.com . So when the images loaded on the example.com even the cookies from the youtube.com 
   even enters your browser. So as a whole all the domains which are used in a particular website all that 
   domain's cookie which are said by their server will be sent to you. To track your things
5. Zombie cookies :- this are the cookies which cannot be deleted so if you go on a website and 
   finally you got some of the cookies in your browser you try to delete it for sometime you might think 
   that all the cookies have been deleted but the Zombies cookies cannot be deleted it comes back due to 
   some of the other conditions. So there is an example of person who just used e-tags . That eat at was a 
   cookie which is saved in your computer and whenever you are browsing on any website that it is sent to 
   the bad server and you are complete browsing history is being shared with that bad server



# Security 
1. Cross site request forgery :- this is a type of method which we discuss earlier that if any hyperlink is 
   present in the hackers website and you just click that hyperlink. That hyperlink is of Bank of America and 
   if we had an account there as soon as we click on the bank of America hyperlink all the cookies which are 
   related to Bank of America will be shared to that bad server so this means that if we click any hyperlink 
   related to any particular website then that particular website cookie will be shared to the bad server as 
   well so this is called as cross site request forgery