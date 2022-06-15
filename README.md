# Magic Mirror Hanzi

This is a [`Magic Mirror²`](https://magicmirror.builders/) module that displays a Chinese character (hanzi), its pronunciation (in pinyin)
and the translation in English.
Magic Mirror² is open source software for creating a powerful dashboard mostly for home use.

`Magic Mirror Hanzi` is based on the Chinese HSK test vocabulary and you can configure up to 6 levels
of difficulty.

The interval of the rotation of the characters is also configurable.

## Preview Screenshot

This is how Magic Mirror Hanzi looks in my configuration:

![Magic Mirror Hanzi exmaple screen](./mmm-hanzi-screenshot.png)

## Installation

1. Clone this repository into your MagicMirror `modules` folder.

Example:

```
cd /home/pi/MagicMirror/modules
git clone https://github.com/tderflinger/MMM-Hanzi.git
```

2. Edit your configuration file under `config/config.js` with the following configuration.
```
{
  module: "MMM-Hanzi",
  position: "top_left",
  config: {
      hskLevel: 2, // up to six levels available
      interval: 300000 // rotation speed in ms
  },
},
```

## Config Options
| **Option**        | **Description** |
| --- | --- |
| `hskLevel`     | HSK difficulty level, number from 1 to 6 |
| `interval`      | Rotation time of Hanzi in ms |

## References

Magic Mirror²: https://magicmirror.builders

HSK: https://en.wikipedia.org/wiki/Hanyu_Shuiping_Kaoshi

Source of HSK Hanzi Vocabulary Files: https://github.com/clem109/hsk-vocabulary

## License

MIT License