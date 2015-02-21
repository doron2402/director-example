# Express app using Director


# conclusion, don't use it. 

I found it better to break your app into two seperates app,
1. api communicating using JSON 
2. web/client side mvc for ex' backbone or react

# The Flow
- [GET] http://www.example.com
- Web return index.html + JS files + CSS files
- after js is loaded create ajax request to the api for data
- [GET] http://api.example.com/site/menu
- [GET] http://api.example.com/user/:user_id (if already authenticated)
