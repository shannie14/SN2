import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';

function Example() {

    const data = React.useMemo(
        () => [
            {
                col1: 'Proximo',
                col2: 'Stranahans & Flying Dog',
                col3: '11/10/22',
                col4: '3,971',
                col5: '2,986',
                col6: '25',
                col7: '$6,680.00',
            },
            {
                col1: 'Pernod Ricard',
                col2: 'Sipping Point',
                col3: '11/03/22',
                col4: '53,601',
                col5: '18,646',
                col6: '0',
                col7: '$0',
            },
            {
                col1: 'Castle Brands',
                col2: 'Home Bar Hero S3E4',
                col3: '06/02/22',
                col4: '502,515',
                col5: '66,223',
                col6: '0',
                col7: '$0',
            },
            {
                col1: 'Castle Brands',
                col2: 'Whiskey Wednesday S3E1',
                col3: '06/08/22',
                col4: '885,944',
                col5: '98,504',
                col6: '3',
                col7: '$82.72',
            },
        ],
        []
    )

    const columns = React.useMemo(
        () => [
            {
                Header: 'Clent',
                accessor: 'col1', // accessor is the "key" in the data
            },
            {
                Header: 'Campaign',
                accessor: 'col2',
            },
            {
                Header: 'Live Date',
                accessor: 'col3', // accessor is the "key" in the data
            },
            {
                Header: 'Impressions',
                accessor: 'col4', // accessor is the "key" in the data
            },
            {
                Header: 'Views',
                accessor: 'col5', // accessor is the "key" in the data
            },
            {
                Header: 'Units Sold',
                accessor: 'col6', // accessor is the "key" in the data
            },
            {
                Header: 'Gross Sales',
                accessor: 'col7', // accessor is the "key" in the data
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy);

    return (
        <div>
            <table {...getTableProps()} style={{ border: 'solid 1px black' }}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    {...column.getHeaderProps(column.getSortByToggleProps())}
                                    style={{
                                        backgroundColor: '#005066',
                                        fontSize: '12px',
                                        borderBottom: 'solid 3px black',
                                        color: 'white',
                                    }}
                                >
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted
                                            ? column.isSortedDesc
                                                ? '🔽'
                                                : '🔼'
                                            : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map(row => {
                        prepareRow(row)
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map(cell => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            style={{
                                                padding: '10px',
                                                border: 'none',
                                                fontSize: '12px',
                                            }}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default Example;