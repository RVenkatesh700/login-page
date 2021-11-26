// import React from 'react'
// import {useTabel} from 'react-tabel'
// import TABEL_DATA from './tabel_data.json'
// import { COLUMNS } from './column'
// import './table.css'


// export const basicTabel = () => {

//     const columns1 = useMemo(() => COLUMNS, [])
//     const data = useMemo(() => TABEL_DATA, [])

//     const tabelInstance = useTabel({
//         columns1,
//         data
//     })

//     const { getTabelProps, getTableBodyProps, headerGroups, rows , prepareRow} = tabelInstance

//     return (
//         <table {...getTabelProps()}>
//             <thead >
//                     {
//                         headerGroups.map(headerGroups => (
//                  <tr {...headerGroups.getHeaderGroupsProps()}>
//                      {
//                          headerGroups.headers.map( column1 => (
//                             <th {...column1.getHeaderProps()}> {column.render('Header')} </th>
//                          ))}
                   
//                 </tr>
//                         ))}

                
//             </thead>
//             <tbody {...getTableBodyProps()}>
//                 {rows.map((row) => {
//                     prepareRow(row)
//                     return (
//                         <tr {...row.getRowProps()}>
//                             {
//                                 row.cells.map((cell) => {
//                                     return <td {...cell.getCellProps()}> {cell.render('Cell')} </td>
//                                 })
//                             }
                    
//                 </tr>
//                     )
//                 })}
            
//             </tbody>
//         </table>
//     )
// }