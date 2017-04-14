# application-builder
A JavaScript Application Builder

available for front-end ( browsers or applications like electron.atom.io, or another cool stuff )

```sh
bower install app-prototype
```

and available as a NodeJS package `application-prototype`

```sh
sudo npm install -g application-prototype
```

## Present Objects

- **ApplicationPrototype** - a builder for application design pattern ;
  *Documentation* [here](docs/index.md)
- **ApplicationBuilder** - a builder for application design pattern that requires a lot of custom dependencies ;
  *Documentation* [here](docs/index.md#applicationbuilder)

## Present modules / libraries

- [lib](docs/modules/lib.md) - a `function` that register in Application all default sub-modules
- [async](docs/modules/async.md) - a module for executing asynchronous a list of operations in flow or waterfall

- [js-template](docs/modules/js-template.md) - a library for emulating Two-Way Data Binding; documentation @TODO
- [custom-elements](docs/modules/custom-elements.md) - a library for implementing webComponents ;  documentation @TODO

- [browser-session](docs/modules/browser-session.md) - a cross browser function implemented with Promises and indexed-db ; documentation @TODO
- [browser-session/strategy/indexed-db](docs/modules/browser-session/strategy/indexed-db.md) - IndexedDb strategy
- [browser-session/strategy/local-storage](docs/modules/browser-session/strategy/local-storage.md) - Local Storage strategy

- [extensions/prototype](docs/modules/extensions/prototype.md) - rich library for cross browsing ; documentation @TODO
- [request](docs/modules/request.md) - a XmlHttprequest Wrapper
- [request/params-parser](docs/modules/request/params-parser.md) - documentation @TODO
- [uri-load](docs/modules/uri-load.md) - a script for loading async a list of stylesheets or scripts

- [canvas-draw](docs/modules/canvas-draw.md) - documentation @TODO
- [graphic](docs/modules/graphic.md) - a function that quickly loads all `graphic` sub-modules
- [graphic/convert](docs/modules/graphic/convert.md) - documentation @TODO
- [graphic/convert/blob-to-imagedata](docs/modules/graphic/convert/blob-to-imagedata.md) - documentation @TODO
- [graphic/convert/imagedata-to-blob](docs/modules/graphic/convert/imagedata-to-blob.md) - documentation @TODO
- [graphic/filters](docs/modules/graphic/filters.md) - documentation @TODO
- [graphic/filters/blur](docs/modules/graphic/filters/blur.md) - documentation @TODO
- [graphic/filters/contrast](docs/modules/graphic/filters/contrast.md) - documentation @TODO
- [graphic/filters/saturation](docs/modules/graphic/filters/saturation.md) - documentation @TODO
- [graphic/polyfill](docs/modules/graphic/polyfill.md) - documentation @TODO
- [graphic/recognition](docs/modules/graphic/recognition.md) - documentation @TODO
- [graphic/recognition/edge-detection](docs/modules/graphic/recognition/edge-detection.md)
- [graphic/utils](docs/modules/graphic/utils.md) - documentation @TODO
- [graphic/utils/imagedata-clone](docs/modules/graphic/utils/imagedata-clone.md) - documentation @TODO

## Contribution
if you find code interesting you may participate by updating documentation using pull request or mail messages to [sergiu.gordienco@gmail.com](mailto:sergiu.gordienco@gmail.com)


## License

Creative Commons License [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/)
![Creative Commons License - Creative Commons Attribution-NonCommercial 4.0 International License](https://i.creativecommons.org/l/by-nc/4.0/88x31.png)

*JS Application Builder* by [JavaScript Application Builder](http://sgapps.io) is licensed under a [Creative Commons Attribution-NonCommercial 4.0 International License](http://creativecommons.org/licenses/by-nc/4.0/).
Based on a work at [http://sgapps.io](http://sgapps.io).
Permissions beyond the scope of this license may be available at [http://sgapps.io](http://sgapps.io).
