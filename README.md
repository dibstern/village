# My Village

Welcome to the README of the __My Village__ [VHacks](vhacks.org) app, by the University of Melbourne team!

## Table of Contents

- [Technology](#technology)
- [Start Up the Project](#start-up-the-project)
- [Components List](#components-list)


## Technology
- Server

   - MongoDB
   - NodeJS

- Client

   - React Framework
   - GoogleMap API

## Start Up the Project

- Server
   - Ensure you have Mongo installed locally. Add User.
   ```
   mongo
   db.createUser({ user:"vhacks", pwd: "vhacks2018", roles: [{role: "userAdminAnyDatabase", db: "test"}] })
   ```

   - Ensure you have NodeJs installed

   ```
   cd api
   npm install
   npm start
   ```

- Client
```
cd village
npm install
npm run start
```

## Components List

| P1 - Signup / Login | P2 - CountrySelect | P3 - ProfileCreate | P4 - Home | P5 - Recommend |
| :-- | -- | --- | --- | --- |
| Title | Country | Title| NavBar |  NavBar |
| Text | Language Selector | Field | Welcome | Title |
| Button | Button | Button | ProgressBar | Recommendations|
| Field | ... | ... | ConnectionsList | Recommendation |
| BackgroundImage | BackgroundImage | BackgroundImage | Service | Map |
| ... | ... | ... | Button | ... |
