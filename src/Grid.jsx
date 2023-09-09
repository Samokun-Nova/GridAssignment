import { range } from './utils';

function Grid({ numRows, numCols }) {
  const rowIndices = range(numRows)
  const colIndices = range(numCols)

  return <div className="grid">{
    rowIndices.map(element => <div key={element} class="row">{
      colIndices.map(element => <div key={element} class="cell"></div>)
    }</div>)
    }</div>;
}

export default Grid;
