import { Container } from "react-bootstrap";
import React from "react";
import Router from "../router/Router";

export default function ContainerComponent() {
  return (
    <Container className="mb-4">
      <Router />
    </Container>
  );
}
