import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import NavigationBar from "../Components/Navbar";
import { Container } from "react-bootstrap";

function RootLayout() {
  return (
    <>
      <NavigationBar />
      <Container className="mt-4">
        <Suspense fallback={<h3>Loading...</h3>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
}

export default RootLayout;
