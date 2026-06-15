## My experiments with Micro Front-end (MFE) architecture

Random stuff related to micro front-end architecture with Webpack's Module Federation plugin


### Gotchas

- Element "id" (in host/container's index.html) cannot be the same as the remote app's "name" (in remote's webpack config)
[Error: `SES_UNHANDLED_REJECTION: TypeError: fn is not a function while loading ./output from webpack/container/reference/pokedex`]

---

Original document: https://github.com/gdebojyoti/101-mfe-webpack