import * as R from "ramda";
import * as L from "partial.lenses";

var sampleTitles = {
  titles: [{ language: "en", text: "Title" }, { language: "sv", text: "Rubrik" }]
};

// get property using old way, and cool new way
const titlesOldWay = sampleTitles.titles;
console.log("old way: ", titlesOldWay);

const titlesUsingLenses = L.get(L.prop("titles"), sampleTitles);
console.log("optics way: ", titlesUsingLenses);
