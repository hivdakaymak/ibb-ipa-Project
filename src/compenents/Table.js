import React from "react";
import { FaEdit } from "react-icons/fa";
import { Table } from "react-bootstrap";
import TableModaler from "./TableModal";

const TableCom = (props) => {
  return (
    <div>
      <div className="table-responsive-md">
        <Table
          className="mb-5 mt-5 text-center   tableTitle"
          striped
          bordered
          hover
        >
          <thead>
            <tr>
              <th> Etkinlik No</th>
              <th> Etkinlik Adı </th>
              <th> Açıklama</th>
              <th> Tarihi </th>
              <th> Konum </th>
              <th> Kontenjan</th>
              <th> Başvuru</th>
              <th> Kalan Kontenjan </th>
              <th> Düzenle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 </td>
              <td> Etkinlik 1 </td>
              <td> Etkinlik Açıklaması </td>
              <td> 29.0.2002 </td>
              <td> Hangar </td>
              <td> Kontenjan</td>
              <td> Başvuru </td>
              <td> Kalan Kontenjan </td>

              <td className="tableIcon">
                <span>
                  <TableModaler />
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableCom;
