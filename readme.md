## My experiments with Micro Front-end (MFE) architecture

Random stuff related to micro front-end architecture with Webpack's Module Federation plugin


### Gotchas

- Element "id" (in host/container's index.html) cannot be the same as the remote app's "name" (in remote's webpack config)
[Error: `SES_UNHANDLED_REJECTION: TypeError: fn is not a function while loading ./output from webpack/container/reference/pokedex`]
  - This happens because of a **variable name conflict**. The browser creates global variables with the same name as *element IDs* (this "feature" has nothing to do with webpack at all). On the other hand, webpack also creates global variables with the *names of the remote apps* (eg: "pokedex", "quiz"). Explanation: https://www.udemy.com/course/microfrontend-course/learn/lecture/23206900

- Navigate to /profile/settings. Then click on the "Profile" link from the container app. The browser still renders "Profile settings" instead of "This is your profile".

---

Original document: https://github.com/gdebojyoti/101-mfe-webpack