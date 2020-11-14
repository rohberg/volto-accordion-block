# volto-accordion-block
[![Releases](https://img.shields.io/github/v/release/rohberg/volto-accordion-block)](https://github.com/rohberg/volto-accordion-block/releases)

[Volto](https://github.com/plone/volto) add-on

## Features

Volto block type *question and answer* (FAQ)

FAQ as accordion:
![FAQ as accordion](https://github.com/rohberg/volto-accordion-block/raw/master/public/faq_accordion.png)

Editing the FAQ:
![Editing the FAQ](https://github.com/rohberg/volto-accordion-block/raw/master/public/faq_sidebar.png)

## Getting started

1. Create new volto project if you don't already have one:
    ```
    $ npm install -g yo @plone/generator-volto
    $ yo @plone/volto my-volto-project --addon @rohberg/volto-accordion-block
    $ cd my-volto-project
    ```

1. Update `package.json`:
    ``` JSON
    "addons": [
        "@eeacms/volto-blocks-form",
        "@rohberg/volto-accordion-block"
    ],

    "dependencies": {
        "@eeacms/volto-blocks-form": "^1.0.0",
        "@rohberg/volto-accordion-block": "^0.1.0"
    }
    ```

1. Install new add-on and restart Volto:
    ```
    $ yarn
    $ yarn start
    ```

1. Go to http://localhost:3000

1. Login and edit a page by adding a block of type FAQ

## Author

Katja Süss, Rohberg (@ksuess)

## Merits

Add-On Template to start with: Eau de Web / European Environment Agency (EEA) https://github.com/eea/volto-addon-template

*DragDropList* component from @eeacms/volto-blocks-form by Eau de Web / European Environment Agency (EEA)

## Training

If you are new to Volto and or React: 
See the training [Mastering of Plone 6 development](https://training.plone.org/) where I use this use case and code to explain how to create a customized block and how to create a Volto add-on.

