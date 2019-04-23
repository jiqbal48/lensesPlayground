import * as R from "ramda";
import * as L from "partial.lenses";

var sampleTitles = {
  titles: [
    { language: "en", text: "Title of some book" },
    { language: "sv", text: "Rubrik ke de booke" }
  ]
};

const divider = msg => {
  console.log(`\t>>>>>>>>${msg}`);
};

divider("get property using old way, and cool new way");
const titlesOldWay = sampleTitles.titles;
console.log("old way: ", titlesOldWay);
const titlesUsingLenses = L.get(L.prop("titles"), sampleTitles);
console.log("optics way: ", titlesUsingLenses);

divider("grab just the english title.");
let oldeEnglishTitle = sampleTitles.titles[0].text;
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

divider("hm.. so can set it very easily too..");
sampleTitles.titles[0].text = "green tees";
console.log("changing original is bad: ", sampleTitles);
const aLens = L.compose(
  L.prop("titles"),
  L.index(0),
  L.prop("text")
);
const setted = L.set(aLens, "bsunny", sampleTitles);
console.log("setted: ", setted);
console.log("unchanged original: ", sampleTitles);
