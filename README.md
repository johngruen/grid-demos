## Hello

I gave a talk and code demo at GA Atlanta. This is the repo I used for that.

The presentation from the talk is available [here](https://docs.google.com/presentation/d/1aUt-t28m49jsEDCdoB9MUyysDqKou-VLR20wKhJud1o/edit?usp=sharing).

## Get Started  

You'll need to have [node](https://nodejs.org/en/) installed.
Then you can go into the command line (Terminal on MacOS) and do this:

```
npm i -g harp  
harp init grid-demos --boilerplate johngruen/grid-demos
harp server
```

to see different demos, just add `display: none` to the other `grid-example` Ids in `main.scss`. `#grid-example-1` is shown by default.

## Directory Structure of this Repository

```
├── README.md
├── harp.json // data passed in to jade files
└── public
    ├── _layout.jade // wrapper for all pages
    ├── index.jade // root page
    ├── intro.jade // quick explainer of jade lang
    ├── lib // copy pasted 3rd party utils
    │   ├── _normalize.scss
    │   └── jquery.min.js
    ├── main.js // write js here
    └── main.scss // write scss here
```

