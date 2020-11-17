import React from 'react';
import ReactDOM from 'react-dom'
import XYFrame from "semiotic/lib/XYFrame"
const colors = {
  "Operation Christmas Drop": "#204051",
  "Jingle Jangle": "#3b6978",
  "The Long Way Back": "#84a9ac"
}
const frameProps = {   summaries: [{ coordinates: [{ theaterCount: 4, rank: 18, grossWeekly: 327616, title: "Operation Christmas Drop" },
        { theaterCount: 39, rank: 15, grossWeekly: 1150814, title: "Operation Christmas Drop" },
        { theaterCount: 1255, rank: 6, grossWeekly: 7156570, title: "Operation Christmas Drop" },
        { theaterCount: 1279, rank: 6, grossWeekly: 3615000, title: "Operation Christmas Drop" },
        { theaterCount: 2004, rank: 6, grossWeekly: 5212462, title: "Operation Christmas Drop" },
        { theaterCount: 1718, rank: 9, grossWeekly: 3108609, title: "Operation Christmas Drop" },
        { theaterCount: 896, rank: 12, grossWeekly: 2248258, title: "Operation Christmas Drop" },
        { theaterCount: 506, rank: 13, grossWeekly: 1122034, title: "Operation Christmas Drop" },
        { theaterCount: 302, rank: 19, grossWeekly: 551552, title: "Operation Christmas Drop" },
        { theaterCount: 194, rank: 20, grossWeekly: 316877, title: "Operation Christmas Drop" },
        { theaterCount: 124, rank: 29, grossWeekly: 201345, title: "Operation Christmas Drop" },
        { theaterCount: 81, rank: 34, grossWeekly: 153162, title: "Operation Christmas Drop" },
        { theaterCount: 61, rank: 36, grossWeekly: 102114, title: "Operation Christmas Drop" },
        { theaterCount: 39, rank: 42, grossWeekly: 64350, title: "Operation Christmas Drop" },
        { theaterCount: 31, rank: 47, grossWeekly: 45344, title: "Operation Christmas Drop" }], title: "Operation Christmas Drop" },
    { coordinates: [{ theaterCount: 10, rank: 24, grossWeekly: 240160, title: "Jingle Jangle" },
        { theaterCount: 99, rank: 15, grossWeekly: 1090487, title: "Jingle Jangle" },
        { theaterCount: 289, rank: 10, grossWeekly: 1831958, title: "Jingle Jangle" },
        { theaterCount: 865, rank: 7, grossWeekly: 3779833, title: "Jingle Jangle" },
        { theaterCount: 902, rank: 9, grossWeekly: 2246233, title: "Jingle Jangle" },
        { theaterCount: 610, rank: 14, grossWeekly: 1129007, title: "Jingle Jangle" },
        { theaterCount: 366, rank: 17, grossWeekly: 701207, title: "Jingle Jangle" },
        { theaterCount: 256, rank: 20, grossWeekly: 430870, title: "Jingle Jangle" },
        { theaterCount: 122, rank: 24, grossWeekly: 270977, title: "Jingle Jangle" },
        { theaterCount: 105, rank: 28, grossWeekly: 195483, title: "Jingle Jangle" },
        { theaterCount: 98, rank: 30, grossWeekly: 138071, title: "Jingle Jangle" },
        { theaterCount: 74, rank: 39, grossWeekly: 86393, title: "Jingle Jangle" },
        { theaterCount: 47, rank: 42, grossWeekly: 52821, title: "Jingle Jangle" },
        { theaterCount: 27, rank: 58, grossWeekly: 25708, title: "Jingle Jangle" },
        { theaterCount: 18, rank: 60, grossWeekly: 17292, title: "Jingle Jangle" }], title: "Jingle Jangle" },
    { coordinates: [{ theaterCount: 3366, rank: 3, grossWeekly: 16660516, title: "The Long Way Back" },
        { theaterCount: 3371, rank: 5, grossWeekly: 9372323, title: "The Long Way Back" },
        { theaterCount: 3140, rank: 7, grossWeekly: 5507604, title: "The Long Way Back" },
        { theaterCount: 2115, rank: 10, grossWeekly: 2369655, title: "The Long Way Back" },
        { theaterCount: 1464, rank: 11, grossWeekly: 1823683, title: "The Long Way Back" },
        { theaterCount: 803, rank: 14, grossWeekly: 780244, title: "The Long Way Back" },
        { theaterCount: 329, rank: 17, grossWeekly: 419930, title: "The Long Way Back" },
        { theaterCount: 230, rank: 21, grossWeekly: 226064, title: "The Long Way Back" },
        { theaterCount: 155, rank: 28, grossWeekly: 126320, title: "The Long Way Back" },
        { theaterCount: 116, rank: 31, grossWeekly: 101719, title: "The Long Way Back" },
        { theaterCount: 45, rank: 40, grossWeekly: 33808, title: "The Long Way Back" },
        { theaterCount: 24, rank: 56, grossWeekly: 17379, title: "The Long Way Back" },
        { theaterCount: 9, rank: 67, grossWeekly: 6872, title: "The Long Way Back" }], title: "The Long Way Back" }],
  // size: [500,220],
  // margin: { left: 60, top: 6, bottom: 5, right: 50 },
  summaryType: { type: "contour", threshold: 3, bandwidth: 15 },
  xAccessor: "theaterCount",
  yAccessor: "rank",
  yExtent: [0],
  xExtent: [0],
  summaryStyle: function(e){return{fill:"none",strokeWidth:.05}},
  pointStyle: d => {
    return {
      r: 2,
      fill: d && colors[d.title]
    }
  },
  title: (
    <text textAnchor="middle">
      Theaters showing <tspan fill={"#204051"}>Operation Christmas Drop</tspan> vs{" "}
      <tspan fill={"#3b6978"}>Jingle Jangle</tspan>
    </text>
  ),
  axes: [{ orient: "left", label: "Rank" },
    { orient: "bottom", label: { name: "Theaters", locationDistance: 55 } }],
  showLinePoints: true,
  showSummaryPoints: true
}

export default () => {
  return <XYFrame {...frameProps} />
}
