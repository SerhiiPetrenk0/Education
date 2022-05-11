import React, { useState, useEffect }  from 'react';
import { ListGroup } from 'react-bootstrap';
import {
  SelectionState,
  PagingState,
  IntegratedPaging,
  IntegratedSelection,
  SortingState,
  IntegratedSorting,
} from '@devexpress/dx-react-grid';
import { 
  Grid, 
  Table, 
  TableHeaderRow,
  TableSelection,
  PagingPanel, 
} from '@devexpress/dx-react-grid-bootstrap4';
import '@devexpress/dx-react-grid-bootstrap4/dist/dx-react-grid-bootstrap4.css';
import  ArrowBottom from './img/ArrowBottom';

export const StartWars = () => {
  const [ list, setList ] = useState([])
  const renderList = list.map((item, index) => <ListGroup.Item style={{background: item.eye_color}} key={index}>{item.name}</ListGroup.Item>)
  const [sorting, setSorting] = useState([{ columnName: 'height', direction: 'asc' }]);
  const [selection, setSelection] = useState([]);
  const columns = [
    { name: 'id', title: 'ID' },
    { name: 'name', title: 'Name' },
    { name: 'height', title: 'Height' },
    { name: 'mass', title: 'Mass' },
    { name: 'hair_color', title: 'Hair_color' },
    { name: 'skin_color', title: 'Skin_color' },
    { name: 'eye_color', title: 'Eye_color' },
    { name: 'birth_year', title: 'Birth_year' },
    { name: 'gender', title: 'Gender' }
  ];

  const forColumns = columns.map(item => ({columnName: item.name, align: 'center',  wordWrapEnabled: true }))
  const [tableColumnExtensions] = useState(forColumns);

  const test = list.map((item, index) => ({ 
    id: index, 
    name: item.name, 
    height: item.height, 
    mass: item.mass, 
    hair_color: item.hair_color, 
    skin_color: item.skin_color, 
    eye_color: item.eye_color, 
    birth_year: item.birth_year, 
    gender: item.gender
  }))
  const TableComponent = ({ ...restProps }) => (
    <Table.Table
      {...restProps}
      className="table-striped "
    />
  );

  const getStarWarsAPI = () => {
    const URL = 'https://swapi.dev/api/'
    const people = 'people/'
    fetch(`${URL}${people}`)
        .then(respone => respone.json())
        .then(result => setList(result.results))
        .catch(err => console.error(err))
  }
  useEffect(() => {
      getStarWarsAPI()
  },[])
  const HighlightedCell = ({ value, style, ...restProps }) => (
    <Table.Cell
      {...restProps}
      style={{
        backgroundColor: value > 180 ? 'red' : value < 100 ? 'green' : undefined,
        ...style,
      }}
    >
      <span
        style={{
          color: value > 180 ? 'white' : undefined,
        }}
      >
        {value}
      </span>
    </Table.Cell>
  );
  const Cell = (props) => {
    const { column } = props;
    if (column.name === 'height') {
      return <HighlightedCell {...props} />;
    }
    return <Table.Cell {...props} />;
  };
  const TableRow = ({ row, ...restProps }) => (
    <Table.Row
      {...restProps}
      onClick={() => alert(JSON.stringify(row))}
    />
  );
  const TableHeaderContent = ({ column, children, ...restProps }) => (
    <TableHeaderRow.Content
      column={column}
      {...restProps}
    >
      {children}
      {column.name === 'name' ? (
        <button
          type="button"
          className="btn btn-outline-secondary"
          style={{ margin: '-7px 5px' }}
          onClick={() => alert('hi')}
        >
          <ArrowBottom />
        </button>
      ) : null}
    </TableHeaderRow.Content>
  );
  const renderTable =  ( 
    <div className="card">
      <Grid
        rows={test}
        columns={columns}
      >
        <SelectionState
          selection={selection}
          onSelectionChange={setSelection}
        />
        <PagingState
          defaultCurrentPage={0}
          pageSize={3}
        />
        <SortingState
          sorting={sorting}
          onSortingChange={setSorting}
        />
        <IntegratedSorting />
        <IntegratedSelection />
        <IntegratedPaging />
        <Table 
          rowComponent={TableRow}
          cellComponent={Cell}
          tableComponent={TableComponent} 
          columnExtensions={tableColumnExtensions}
          
        />
        <TableHeaderRow
          showSortingControls
          contentComponent={TableHeaderContent}
        />
        <TableSelection showSelectAll />
        <PagingPanel />
      </Grid>
    </div>
  )
  return (
    <div>
      {renderTable}
    </div>)
}
