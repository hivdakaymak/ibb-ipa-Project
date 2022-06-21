import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { etkinlikEkle } from "../actions/action";
import {
  Row,
  Col,
  Container,
  Button,
  Form,
  Pagination,
  Navbar,
  Table,
} from "react-bootstrap";
import { FaEdit } from "react-icons/fa";
import Menu from "../compenents/Navbar";

const INITIAL_STATE = [{ name: "Etkinlik Adı" }];

const EventPlace = (props) => {
  const [text, setText] = useState("");
  return (
    <Container>
      <Row>
        <Menu title="Etkinlik Alanı Tanımlama" />
        <Form>
          <Form.Group className="mt-5 mb-3  " controlId="formBasicEmail">
            <h5 className="event-title text-center mb-3">
              Etkinlik Alanı Tanımlama
            </h5>
            <Form.Control
              className="place-input"
              style={{ width: "60%" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Etkinlik alanı giriniz"
              type="text"
            />
          </Form.Group>
        </Form>
        <Button
          onClick={() => {
            setText("");
            props.etkinlikEkle(text);
          }}
          className="login-save-button mb-4 mt-3"
          variant="info"
        >
          Kaydet
        </Button>

        <div className="table-responsive-md">
          <Table className="mb-4 tableTitle" striped bordered hover>
            <thead>
              <tr>
                <th>Etkinlik Alan No</th>
                <th>Etkinlik Alan Adı</th>
                <th>Düzenle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td >
                  Hangar
                </td>
                <td className="tableIcon">
                  <span>
                    <FaEdit />
                  </span>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Havuz</td>
                <td className="tableIcon">
                  <span>
                    <FaEdit />
                  </span>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Kütüphane</td>
                <td className="tableIcon">
                  <span>
                    <FaEdit />
                  </span>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Hangar</td>
                <td className="tableIcon">
                  <span>
                    <FaEdit />
                  </span>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Havuz</td>
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

const mapStateToProps = (state) => {
  return {
    events: state.liste,
  };
};

export default connect(mapStateToProps, { etkinlikEkle })(
  EventPlace
);
