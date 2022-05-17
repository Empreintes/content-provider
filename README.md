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

    const {content_provider} = require('@empreintes/content-provider')

    const cp = content_provider({base_path:'view',file_extension:'html'})
    cp('foo.bar.myfile) // return the content
    cp('afolder.another.folder.myfile) // return the content etc..
---
    contentProvider({ file_extension: "json", base_path: "." })("myfile")

#### publish

     npm run prepare
     npm publish ./dist [options]

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
- Full synchrone