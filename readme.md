# Flatdoc Template

A template for creating [Flatdoc](http://ricostacruz.com/flatdoc/) based documentation. This template has the added benefit of supporting multiple files, and also allows you to use [Mermaid JS](https://github.com/knsv/mermaid) markdown charts.

The files to be included can be indicated via a comma-delimited list in the body ```data-files``` attribute.

The documents can deployed to a ```gh-pages``` branch by running ```gulp docs```.

A Beefy server can be spun up to serve the files with ```npm start```.