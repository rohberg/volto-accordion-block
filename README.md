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

1. Create a new volto project if you don't already have one:
    ```
    npm init yo @plone/volto
    ```

1. Update `package.json`:
    ```json
    "addons": [
        "@rohberg/volto-accordion-block"
    ],

    "dependencies": {
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


## Training

**If you are new to Volto and or React:**

See the training [Mastering of Plone 6 development](https://training.plone.org/) [Prelease] (https://rohberg.github.io/training-plone/mastering-plone/volto_custom_block.html) where I use this use case and code to explain how to create a custom block type and how to create a Volto add-on.

**If you want to create a Volto add-on:**

One way to start is the template `volto-addon-template`
https://github.com/rohberg/volto-addon-template