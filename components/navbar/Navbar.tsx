import React, { Suspense } from "react";
import Container from "../global/Container";
import Logo from "./Logo";
import NavSearch from "./NavSearch";
import CartButton from "./CartButton";
import ToggleMode from "./ToggleMode";
import LinksDropdown from "./LinksDropdown";

function Navbar() {
  return (
    <nav className="border-b">
      <Container className="flex flex-col flex-wrap gap-2 py-6 sm:flex-row sm:items-center sm:justify-between">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex items-center gap-4">
          <CartButton />
          <ToggleMode />
          <LinksDropdown />
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
