# EasyConvert

EasyConvert is a pure JavaScript HTML parser that converts HTML into JSON directly readable by EasyPlate.

This project is a fork of Himalay destined to be integrated with EasyPlate

```bash
npm install easyconvert
```

## Usage

```js
var easyconvert = require('easyconvert');
var html = require('fs').readFileSync('/webpage.html');
var json = easyconvert.parse(html);
```

Installed globally, easyconvert can also be used from the command-line to convert HTML files to JSON files, or as a pipe transform.

```bash
easyconvert webpage.html webpage.json
# or as a pipe
echo "<h1>Hello</h1>" | easyconvert > hello.json
```

Run `easyconvert --help` for more information.


### Example Input/Output

```html
<div class='post post-featured'>
	<p>Easyconvert parsed me...</p>
	<!-- ...and I liked it. -->
</div>
```

```json
{
  "div_1": {
    "tag": "div",
    "attribute": {
      "class": "post post-featured"
    },
    "innerHTML": "\n",
    "child": {
      "p_0": {
        "tag": "p",
        "attribute": {},
        "innerHTML": "Easyconvert parsed me...",
        "child": {}
      },
      "comment": " ...and I liked it. "
    }
  },
  "innerHTML": "\n"
}
```

*Note:* Text nodes containing only whitespace were removed from the output for readability.

## Features

### Synchronous
HTML is turned into JSON, that's it. Easyplate  is completely synchronous and does not require any complicated callbacks.

### Parses Attributes
Easyplate does a couple things when processing attributes:
- Camel-cases attribute names
- Attributes without values are set to their names (i.e. `disabled` turns into `disabled="disabled"`)
- Groups `data-*` attributes into a `dataset` object
- Attempts to caste any value to a number if `!Nan`
- Parses the `style` attribute into a hash map

### Handles Weirdness
Easyplate handles a lot of HTML's fringe cases, like:
- Closes unclosed tags `<p><b>...</p>`
- Ignores extra closing tags `<span>...</b></span>`
- Properly handles void tags like `<meta>` and `<img>`
- Properly handles self-closing tags like `<input/>`
- Handles `<!doctype>` and `<-- comments -->`
- Does not parse the contents of `<script>`, `<style>`, and HTML5 `<template>` tags

### Preserves Whitespace
Easyplate does not cut corners and returns an accurate representation of the HTML supplied.

The following example does absolutely nothing. It simply parses the HTML to JSON then parses the JSON back into HTML, which is the exact same as the original. (Of course if the original was malformed, Himalaya probably buffed out the kinks.)

## Why "Easyplate"?

Because Himalay is a great lib, and I want to make it integrated with EasyPlate.

## Contributing

Follow me on [Twitter](https://twitter.com/adrien_thierry) for updates or just for the lolz and please check out my other [repositories](https://github.com/seraum) if I have earned it. I thank you for reading.
