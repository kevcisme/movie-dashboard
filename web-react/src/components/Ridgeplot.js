import React from 'react'
import ReactDOM from 'react-dom'
import OrdinalFrame from 'semiotic/lib/OrdinalFrame'
const theme = ['#e7dfd5', '#84a9ac', '#3b6978', '#204051']
const frameProps = {
  data: [
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 80 },
    { k: 'Drama', v: 85 },
    { k: 'Comedy', v: 66 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 75 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 85 },
    { k: 'Drama', v: 85 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 85 },
    { k: 'Drama', v: 85 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 98 },
    { k: 'Family - Animated', v: 125 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 99 },
    { k: 'Drama', v: 85 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 85 },
    { k: 'Family - Animated', v: 75 },
    { k: 'Drama', v: 65 },
    { k: 'Comedy', v: 40 },
    { k: 'Action/Adventure', v: 97 },
    { k: 'Family - Animated', v: 110 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 35 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 65 },
    { k: 'Action/Adventure', v: 90 },
    { k: 'Family - Animated', v: 85 },
    { k: 'Drama', v: 90 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 90 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 85 },
    { k: 'Comedy', v: 60 },
    { k: 'Action/Adventure', v: 99 },
    { k: 'Family - Animated', v: 97 },
    { k: 'Drama', v: 70 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 60 },
    { k: 'Family - Animated', v: 80 },
    { k: 'Drama', v: 70 },
    { k: 'Comedy', v: 60 },
    { k: 'Action/Adventure', v: 88.7 },
    { k: 'Family - Animated', v: 69 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 99 },
    { k: 'Family - Animated', v: 98 },
    { k: 'Drama', v: 85 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 97 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 70 },
    { k: 'Comedy', v: 65 },
    { k: 'Action/Adventure', v: 99 },
    { k: 'Family - Animated', v: 75 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 65 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 42 },
    { k: 'Drama', v: 90 },
    { k: 'Comedy', v: 80 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 90 },
    { k: 'Family - Animated', v: 80 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 80 },
    { k: 'Action/Adventure', v: 92 },
    { k: 'Family - Animated', v: 85 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 98 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 85 },
    { k: 'Action/Adventure', v: 98 },
    { k: 'Family - Animated', v: 92 },
    { k: 'Drama', v: 91 },
    { k: 'Comedy', v: 85 },
    { k: 'Action/Adventure', v: 90 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 65 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 85 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 65 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 98 },
    { k: 'Family - Animated', v: 95 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 90 },
    { k: 'Action/Adventure', v: 85 },
    { k: 'Family - Animated', v: 85 },
    { k: 'Drama', v: 90 },
    { k: 'Comedy', v: 65 },
    { k: 'Action/Adventure', v: 80 },
    { k: 'Family - Animated', v: 15 },
    { k: 'Drama', v: 74 },
    { k: 'Comedy', v: 65 },
    { k: 'Action/Adventure', v: 98 },
    { k: 'Family - Animated', v: 80 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 96 },
    { k: 'Family - Animated', v: 85 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 99 },
    { k: 'Family - Animated', v: 85 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 75 },
    { k: 'Action/Adventure', v: 85 },
    { k: 'Family - Animated', v: 84 },
    { k: 'Drama', v: 87 },
    { k: 'Comedy', v: 60 },
    { k: 'Action/Adventure', v: 90 },
    { k: 'Family - Animated', v: 150 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 90 },
    { k: 'Action/Adventure', v: 250 },
    { k: 'Family - Animated', v: 85 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 80 },
    { k: 'Action/Adventure', v: 98 },
    { k: 'Family - Animated', v: 96 },
    { k: 'Drama', v: 90 },
    { k: 'Comedy', v: 90 },
    { k: 'Action/Adventure', v: 98 },
    { k: 'Family - Animated', v: 96 },
    { k: 'Drama', v: 82 },
    { k: 'Comedy', v: 86 },
    { k: 'Action/Adventure', v: 175 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 70 },
    { k: 'Comedy', v: 80 },
    { k: 'Action/Adventure', v: 175 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 90 },
    { k: 'Comedy', v: 90 },
    { k: 'Action/Adventure', v: 99 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 60 },
    { k: 'Action/Adventure', v: 160 },
    { k: 'Family - Animated', v: 80 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 90 },
    { k: 'Family - Animated', v: 70 },
    { k: 'Drama', v: 80 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 175 },
    { k: 'Family - Animated', v: 80 },
    { k: 'Drama', v: 90 },
    { k: 'Comedy', v: 70 },
    { k: 'Action/Adventure', v: 85 },
    { k: 'Family - Animated', v: 90 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 65 },
    { k: 'Action/Adventure', v: 175 },
    { k: 'Family - Animated', v: 80 },
    { k: 'Drama', v: 75 },
    { k: 'Comedy', v: 60 },
  ],
  size: [500, 200],
  margin: { left: 150, top: 60, bottom: 50, right: 1 },
  summaryType: {
    type: 'ridgeline',
    bins: 10,
    amplitude: 50,
    curve: 'monotonex',
  },
  projection: 'horizontal',
  oAccessor: 'k',
  rAccessor: 'v',
  summaryStyle: (d, i) => ({
    fill: theme[i % theme.length],
    stroke: 'black',
    strokeWidth: 2,
    fillOpacity: 0.5,
    strokeOpacity: 0.25,
  }),
  title: ' Box Office Amounts by Genre',
  axes: [
    {
      orient: 'bottom',
      label: 'Box Office',
      tickFormat: function (e) {
        return e
      },
    },
  ],
  summaryHoverAnnotation: true,
  oLabel: (d) => (
    <text style={{ textAnchor: 'end', fill: 'grey' }} x={-10} y={5}>
      {d}
    </text>
  ),
}

export default () => {
  return <OrdinalFrame {...frameProps} />
}
