import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  NavDropdown,
  Stack,
} from "react-bootstrap";
import { brands, categories } from "../../dummyData/data";

const Filter = (props) => {
  const { setBrand, brand, setCategory, category, setSearch, search } = props;

  const [text, setText] = useState("");

  return (
    <div className="mb-5">
      <Container>
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <NavDropdown title="Category">
            {categories.map((x, index) => (
              <NavDropdown.Item
                style={{ color: category == x.id ? "blue" : "black" }}
                onClick={() => setCategory(x.id)}
                key={x.id}
              >
                {x.name}
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Item
              style={{ color: category == "" ? "blue" : "black" }}
              onClick={() => setCategory("")}
            >
              Clear Filter
            </NavDropdown.Item>
          </NavDropdown>
          <NavDropdown title="Brand">
            {brands.map((x, index) => (
              <NavDropdown.Item
                style={{ color: brand == x.id ? "blue" : "black" }}
                onClick={() => setBrand(x.id)}
                key={x.id}
              >
                {x.name}
              </NavDropdown.Item>
            ))}
            <NavDropdown.Divider />
            <NavDropdown.Item
              style={{ color: brand == "" ? "blue" : "black" }}
              onClick={() => setBrand("")}
            >
              Clear Filter
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form className="d-flex">
          <FormControl
            onChange={(e) => setText(e.target.value)}
            type="search"
            value={text}
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Stack direction="horizontal" gap={3}>
            <Button variant="outline-success" onClick={() => setSearch(text)}>
              Search
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                setSearch("");
                setText("");
              }}
            >
              Clear
            </Button>
          </Stack>
        </Form>
      </Container>
    </div>
  );
};

export default Filter;
