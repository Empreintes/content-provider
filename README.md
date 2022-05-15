# Content Provider

A tiny small script for node.js to load stuff in your code

This project has been designed to get content from text file

## Getting Started
This script target nodejs environment

    npm install @empreintes/contentprovider
    # or
    yarn add @empreintes/contentprovider 


### Prerequisites

fs module

### Usage

#### basic usage

    const cp = require("@empreintes/tpljs")
    cp({base_path:'view',file_extension:'html'})
    cp('foo.bar.myfile) // get the content
    cp('afolder.another.folder.myfile) // get the content etc..

## Licence

released under the MIT license.

## Versioning

[Semantic Versioning](http://semver.org/) for versioning.

## Authors

- **Julien Appéré <@empreintes>** -
  [Github](https://github.com/empreintes) | [Twitter](https://twitter.com/empreintes)


## Acknowledgments

- This is a side project of a side project of a side project (for real)
- Use in production only if you know what you do.