Just enough bang out quick prototypes without having to start from scratch.

## Get Started  

You'll need to have [node](https://nodejs.org/en/) installed.
Then you can go into the command line and do this:

```
npm i -g harp  
harp init grid-demos --boilerplate johngruen/grid-demos
harp server
```

## Directory Structure

```
├── README.md
├── harp.json // data passed in to jade files
└── public
    ├── _layout.jade // wrapper for all pages
    ├── intro.jade // quick explainer of jade lang
    ├── index.jade // root page
    ├── lib // copy pasted 3rd party utils
    │   ├── _normalize.scss
    │   └── jquery.min.js
    ├── main.js // write js here
    └── main.scss // write scss here
```

