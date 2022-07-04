import React from "react";
import { Table } from "react-bootstrap";
import TableModaler from "./TableModal";
import { useDispatch, useSelector } from "react-redux";

const TableCom = (props) => {
  const events = useSelector((state) => state.eventList);
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
              <th> Etkinlik Alanı </th>
              <th> Kontenjan</th>
              <th> Tarihi </th>
              <th> Düzenle</th>
            </tr>
          </thead>

          <tbody>   
            {events.length > 0 &&
              events.map((event) => {
                return (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.name}</td>
                    <td>{event.desc}</td>
                    <td>{event.place}</td>
                    <td>{event.kont}</td>
                    <td>{event.date}</td>
                    
                    <td className="editIcon">
                      <TableModaler id={event.id} />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableCom;
