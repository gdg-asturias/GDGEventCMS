<p align="center">
  <img src="./.github/logos/gdg-asturias.png"  width="400">
</p>
<p align="center">
  <a href="https://meetup.com/GDG-Asturias"><img src="https://img.shields.io/badge/meetup-link-red.svg"/></a>
  <a href="https://gdgasturias.com"><img src="https://img.shields.io/badge/web-link-green.svg"/></a>
  <a href="https://twitter.com/gdgasturias"><img src="https://img.shields.io/badge/twitter-link-9cf.svg"/></a>
  <a href="https://facebook.com/gdgasturias"><img src="https://img.shields.io/badge/facebook-link-blue.svg"/></a>
  <a href="https://instagram.com/gdgasturias"><img src="https://img.shields.io/badge/instagram-link-brown.svg"/></a>
</p>

Hello from GDG Asturias team: [Santi](https://github.com/SantiMA10), [Aurora Barrero](https://github.com/aurorabarrero) y [María Encinar](https://github.com/encinar).

This is our first public contribution to the general GDG wisdom :-) Let us know if you have any questions: info@gdgasturias.com

# 🎟 GDG event CMS

This repo contains the "CMS" developed by [GDG Asturias](https://www.meetup.com/es-ES/GDG-Asturias) for DevFest and WTM events we've organized since 2018.

# 👏🏻 Features

- Feedback system
- Challenge system
- And more...

# 🤩 Contributing

We're happy any kind of improvements of the existing system, just make a _pull request_ or create a new _issue_ with your idea 💡.

If you like them and it makes your GDG live easier, just use them. One easy request: mention GDG Asturias in the website and in social networks, that will make the whole team very happy ;)

# ⚙️ Setup

## 🔥 Firebase

- [Create a firebase project](https://console.firebase.google.com/)
- Add your Firebase configuration to the _~/plugins/firebase.js_ file.
- Install and configure [firebase-tools](https://github.com/firebase/firebase-tools)

  ```
  npm install -g firebase-tools
  firebase login
  ```

- Deploy the the [Firestore](https://firebase.google.com/products/firestore/?hl=es-419) and [Cloud Storage](https://firebase.google.com/products/storage/?hl=es-419)
  security rules to deny/allow certain queries to both systems.

  ```
  firebase deploy --only firestore
  firebase deploy --only storage
  ```

- Enable Anonymous and Email/Password authentication with signing without password

  > You must do this thought the Firebase Console.

  > Remember to add your domain to the authorize domains list.

## 🚀 Deploy

### Hosting

#### Netlify

All the necessary configuration is on the **netlify.toml**

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/netlify-statuskit)

#### Firebase Hosting

- Build the project

```
yarn build // or npm run build
```

- Deploy to firebase hosting

> If you don't add the **--only hosting** flag you will deploy all the security rules too.

```
firebase deploy --only hosting
```

# 🌍 Events

You can find all our old [templates here](https://github.com/gdg-asturias/GDGEventTemplates)

| Event                          | Date            | Web                             | Code                                                                          |
| ------------------------------ | --------------- | ------------------------------- | ----------------------------------------------------------------------------- |
| Women Techmakers Asturias 2018 | 14 April 2018   | http://wtm.gdgasturias.com/2018 | [GitHub](https://github.com/gdg-asturias/GDGEventTemplates/tree/wtm-2018)     |
| DevFest Asturias 2018          | 1 December 2018 | http://devfest.gdgasturias.com/ | [GitHub](https://github.com/gdg-asturias/GDGEventTemplates/tree/devfest-2018) |
| Women Techmakers Asturias 2019 | 6 April 2019    | http://wtm.gdgasturias.com/     | [GitHub](https://github.com/gdg-asturias/GDGEventTemplates/tree/wtm-2019)     |

# ⚖️ License

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />Content on this site is licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0) license</a>.
