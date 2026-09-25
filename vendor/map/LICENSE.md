# Portfolio map basemap

`world-50m.topo.json` draws the Global Portfolio Explorer basemap. It is the
land and internal country borders of **Natural Earth** 1:50m Admin 0
(v4.1.0, public domain: https://www.naturalearthdata.com/about/terms-of-use/),
taken from the `world-atlas` 2.0.2 TopoJSON redistribution, simplified to 20%
with mapshaper, and unwrapped across the antimeridian so a flat Leaflet map
draws it without wrap-around bands. Natural Earth requires no attribution.

`topojson-client.min.js` is `topojson-client` 3.1.0, used to decode the file.

Both `world-atlas` and `topojson-client` carry this notice:

> Copyright 2012-2019 Michael Bostock
>
> Permission to use, copy, modify, and/or distribute this software for any purpose
> with or without fee is hereby granted, provided that the above copyright notice
> and this permission notice appear in all copies.
>
> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
> REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND
> FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
> INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS
> OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER
> TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF
> THIS SOFTWARE.
