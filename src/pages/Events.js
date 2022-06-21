import React from "react";
import { Container, Row, Pagination, Table } from "react-bootstrap";
import Menu from "../compenents/Navbar";
import Swaler from "sweetalert2";

const handleCancelEr = () => {
  Swaler.fire({
    icon: "error",
    title: "İptal Edildi",
    text: "Başvurunuz İptal edildi",
    timer: 1500,
  });
};
const handleCancelSuc = () => {
  Swaler.fire({
    icon: "success",
    title: "İptal Edildi",
    text: "Başvurunuz İptal edildi",
    timer: 1500,
  });
};
const Events = () => {
  return (
    <Container>
      <Row>
        <Menu title="Etkinliklerim" />
        <Table className="mb-4 mt-5 tableTitle" striped bordered hover>
          <thead>
            <tr>
              <th>Etkinlik Adı</th>
              <th>Etkinlik Tarihi</th>
              <th>Konum</th>
              <th>Durum</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sosyal Politika Çalıştayı</td>
              <td>10.11.2022</td>
              <td>Hangar</td>

              <td>
                <button
                  onClick={handleCancelSuc}
                  type="button"
                  class="btn btn-success btn-sm"
                >
                  Başvuru İptal
                </button>
              </td>
            </tr>
            <tr>
              <td>Sosyal Politika Çalıştayı</td>
              <td>10.11.2022</td>
              <td>Hangar</td>

              <td>
                <button
                  onClick={handleCancelSuc}
                  type="button"
                  class="btn btn-success btn-sm"
                >
                  Başvuru İptal
                </button>
              </td>
            </tr>
            <tr>
              <td>Sosyal Politika Çalıştayı</td>
              <td>10.11.2022</td>
              <td>Hangar</td>

              <td>
                <button
                  onClick={handleCancelEr}
                  type="button"
                  class="btn btn-danger btn-sm"
                >
                  İptal Edildi
                </button>
              </td>
            </tr>
            <tr>
              <td>Sosyal Politika Çalıştayı</td>
              <td>10.11.2022</td>
              <td>Hangar</td>

              <td>
                <button
                  onClick={handleCancelSuc}
                  type="button"
                  class="btn btn-success btn-sm"
                >
                  Başvuru İptal
                </button>
              </td>
            </tr>
            <tr>
              <td>Sosyal Politika Çalıştayı</td>
              <td>10.11.2022</td>
              <td>Hangar</td>

              <td>
                <button
                  onClick={handleCancelEr}
                  type="button"
                  class="btn btn-danger btn-sm"
                >
                  İptal Edildi
                </button>
              </td>
            </tr>
            <tr>
              <td>Sosyal Politika Çalıştayı</td>
              <td>10.11.2022</td>
              <td>Hangar</td>

              <td>
                <button
                  onClick={handleCancelSuc}
                  type="button"
                  class="btn btn-success btn-sm"
                >
                  Başvuru İptal
                </button>
              </td>
            </tr>
            <tr>
              <td>Sosyal Politika Çalıştayı</td>
              <td>10.11.2022</td>
              <td>Hangar</td>

              <td>
                <button
                  onClick={handleCancelEr}
                  type="button"
                  class="btn btn-danger btn-sm"
                >
                  İptal Edildi
                </button>

                {/* <FaExclamation /> */}
              </td>
            </tr>
            <tr>
              <td>Sosyal Politika Çalıştayı</td>
              <td>10.11.2022</td>
              <td>Hangar</td>

              <td>
                <button
                  onClick={handleCancelSuc}
                  type="button"
                  class="btn btn-success btn-sm"
                >
                  Başvuru İptal
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
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

export default Events;
