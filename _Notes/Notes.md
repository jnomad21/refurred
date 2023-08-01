3rd Party api INTEGRATION from the back end. GitHub will protect and CHECk for keys and credentials of sorts beings pushed... BE CAREFUL.

Video Link:
https://generalassembly.zoom.us/rec/play/UpeB2UoIlaUfiqsfY4TEoWldDWWeIXt39r4aGAYcodKXs8g1GtEmotRVfZMTVXnxDY0BzGobYhlTywpN.9mL13xwz_NUFrPuL?canPlayFromShare=true&from=share_recording_detail&startTime=1681926690000&componentName=rec-play&originRequestUrl=https%3A%2F%2Fgeneralassembly.zoom.us%2Frec%2Fshare%2F8SuU0LCHyfayFqslzdkSF1IzUeYqeuF0tXDRWBOkN6Ubpw5TgbQoZ45svY66TxTF.IjlTO6l8U7AZbN4n%3FstartTime%3D1681926690000

Loose structure
1 - Backend server is the "secure" middleman int he api process.
2 - User will send a request via a form
    2.1 - NO KEY is involved yet.
    2.2 - That request hits a route...
    2.3 - Our route will pull in the API key from .env
    2.4 - Send the request to the API (async/await, try/catch)
    2.5 - Received response (async/await, try/catch)
    2.6 - Send response to the user
3 - We store the keys in the .env (whit is in .gitignore).
4 - Create a new route for the API request.

Consuming 3rd party APIs
- Server that responds with requests from an app.
