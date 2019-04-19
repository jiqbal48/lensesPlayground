import * as R from "ramda";
import * as L from "partial.lenses";

var sampleTitles = {
  titles: [
    { language: "en", text: "Title of some book" },
    { language: "sv", text: "Rubrik ke de booke" }
  ]
};

const divider = () => {
  console.log("-----------------------------");
};

// get property using old way, and cool new way
const titlesOldWay = sampleTitles.titles;
console.log("old way: ", titlesOldWay);
const titlesUsingLenses = L.get(L.prop("titles"), sampleTitles);
console.log("optics way: ", titlesUsingLenses);
divider();

// grab just the english title.
const oldeEnglishTitle = sampleTitles.titles[0].text;
console.log("oldeEnglishTitle: ", oldeEnglishTitle);
const newEnglish = L.get(
  L.compose(
    L.prop("titles"),
    L.index(0),
    L.prop("text")
  ),
  sampleTitles
);
console.log("hm.. newEnglish is so hard!: ", newEnglish);
divider();
