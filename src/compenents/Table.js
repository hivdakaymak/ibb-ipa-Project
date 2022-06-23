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
              <th>{props.EtNo}</th>
              <th>{props.EtAdi} </th>
              <th>{props.EtAciklamasi} </th>
              <th>{props.EtTarih} </th>
              <th>{props.EtKonum} </th>
              <th>{props.EtKontenjan} </th>
              <th>{props.EtBasvuru} </th>
              <th>{props.EtKalKontnjan} </th>
              <th>{props.EtkinDuzenle} </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.EtkinNo} </td>
              <td> {props.EtkinAdi} </td>
              <td> {props.EtkinAcik} </td>
              <td> {props.EtkinTarih} </td>
              <td> {props.EtkinKonum} </td>
              <td> {props.EtkinKontenjan} </td>
              <td> {props.EtkinBasvuru} </td>
              <td> {props.EtkinKalKontenjan} </td>
              
              <td className="tableIcon">
                <span>
                  <TableModaler />
                  
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Etkinlik 2</td>
              <td>Açıklama</td>
              <td>10.11.2022</td>
              <td>Hangar</td>
              <td>100</td>
              <td>75</td>
              <td>25</td>
              <td className="tableIcon">
                <span>
                  <FaEdit />
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Etkinlik 2</td>
              <td>Açıklama</td>
              <td>10.11.2022</td>
              <td>Hangar</td>
              <td>100</td>
              <td>75</td>
              <td>25</td>
              <td className="tableIcon">
                <span>
                  <FaEdit />
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Etkinlik 2</td>
              <td>Açıklama</td>
              <td>10.11.2022</td>
              <td>Hangar</td>
              <td>100</td>
              <td>75</td>
              <td>25</td>
              <td className="tableIcon">
                <span>
                  <FaEdit />
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Etkinlik 2</td>
              <td>Açıklama</td>
              <td>10.11.2022</td>
              <td>Hangar</td>
              <td>100</td>
              <td>75</td>
              <td>25</td>
              <td className="tableIcon">
                <span>
                  <FaEdit />
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
