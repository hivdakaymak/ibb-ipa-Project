import React from "react";
import {
  Container,
  Row,
  Navbar,
  Col,
  Pagination,
  Table,
  Button,
} from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import Menu from "../compenents/Navbar";
import Modaler from "../compenents/Modal";

const PolicyUserList = () => {
  return (
    <Container>
      <Row>
        <Menu title="SOSYAL POLİTİKALAR ÇALIŞTAYI KATILIMCI LİSTESİ" />
        <Col md={6} className="mt-5">
          <div className="userList">
            <div className="userListBox d-flex align-items-center justify-content-center mb-4">
              <Col sm={2}>
                <p className="ULnumber Ulnumber1">100</p>
              </Col>
              <Col className="text-center" sm={2}>
                <img src="/img/users.png" />
              </Col>
              <Col sm={3}>
                <p className="ULdesc">
                  Toplam <br /> Katılımcı Sayısı
                </p>
              </Col>
            </div>
          </div>
          <div className="userList">
            <div className="userListBox d-flex align-items-center justify-content-center mb-4">
              <Col sm={2}>
                <p className="ULnumber Ulnumber2">100</p>
              </Col>
              <Col className="text-center" sm={2}>
                <img src="/img/user.png" />
              </Col>
              <Col sm={3}>
                <p className="ULdesc">
                  Erkek <br /> Katılımcı Sayısı
                </p>
              </Col>
            </div>
          </div>
          <div className="userList">
            <div className="userListBox d-flex align-items-center justify-content-center mb-4">
              <Col sm={2}>
                <p className="ULnumber Ulnumber3">100</p>
              </Col>
              <Col className="text-center" sm={2}>
                <img src="/img/userwoman.png" />
              </Col>
              <Col sm={3}>
                <p className="ULdesc">
                  Kadın <br /> Katılımcı Sayısı
                </p>
              </Col>
            </div>
          </div>
        </Col>
        <Col md={4} className="mt-5">
          <div className="table-responsive-md">
            <Table striped bordered hover>
              <thead>
                <tr className="PUtitle">
                  <th>Yaş Grubu</th>
                  <th>Katılımcı Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="PUimg d-flex align-items-center">
                    {" "}
                    <img src="/img/boys.png" />
                    <p className="PUtext">18-20 </p>
                  </td>
                  <td>
                    <p className="PUtext">20 </p>
                  </td>
                </tr>
                <tr>
                  <td className="PUimg d-flex align-items-center">
                    {" "}
                    <img src="/img/girls.png" />
                    <p className="PUtext">30-60 </p>
                  </td>
                  <td>
                    {" "}
                    <p className="PUtext">50 </p>
                  </td>
                </tr>
                <tr>
                  <td className="PUimg d-flex align-items-center">
                    {" "}
                    <img src="/img/adult.png" />
                    <p className="PUtext">60+ </p>
                  </td>
                  <td>
                    {" "}
                    <p className="PUtext">30</p>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>

        <Col md={10} className="mb-5">
          <div className="PUbuttons d-flex align-items-center justify-content-end">
            <p className="PUtext">LİSTEYİ DIŞARI AKTAR</p>
            <button className="PUpdf">PDF</button>
            <button className="PUexcel">EXCEL</button>
          </div>
        </Col>
        <hr />

        <div className="table-responsive-md">
          <Table
            className="mb-4 mt-5 tableTitle text-center"
            striped
            bordered
            hover
          >
            <thead>
              <tr>
                <th>Etkinlik No</th>
                <th>Etkinlik Adı</th>
                <th>Açıklaması</th>
                <th>Tarih</th>
                <th>Konum</th>
                <th>Kontenjan</th>
                <th>Başvuru Sayısı </th>
                <th>Kalan Kontenjan</th>
                <th>Düzenle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Etkinlik 1</td>
                <td>Açıklama</td>
                <td>10.12.2022</td>
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
                <td>1</td>
                <td>Etkinlik 1</td>
                <td>Açıklama</td>
                <td>10.12.2022</td>
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
                <td>1</td>
                <td>Etkinlik 1</td>
                <td>Açıklama</td>
                <td>10.12.2022</td>
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
                <td>1</td>
                <td>Etkinlik 1</td>
                <td>Açıklama</td>
                <td>10.12.2022</td>
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
                <td>1</td>
                <td>Etkinlik 1</td>
                <td>Açıklama</td>
                <td>10.12.2022</td>
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

        <Pagination className="pagination d-flex align-items-center justify-content-center mb-5">
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Ellipsis />

          <Pagination.Item>{10}</Pagination.Item>
          <Pagination.Item>{11}</Pagination.Item>
          <Pagination.Item active>{12}</Pagination.Item>
          <Pagination.Item>{13}</Pagination.Item>
          <Pagination.Item disabled>{14}</Pagination.Item>

          <Pagination.Ellipsis />
          <Pagination.Item>{20}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Row>
    </Container>
  );
};

export default PolicyUserList;
