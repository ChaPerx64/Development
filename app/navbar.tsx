"use client";
import React from "react";
// import { Divider } from "@nextui-org/react";
import { Navbar, NavbarBrand, NavbarItem, Button } from "@nextui-org/react";
import ContactMeButton from "../components/contactme";
// import "../styles/global.css";

export default function MyNavbar(props) {
  return (
    <Navbar {...props}>
      <NavbarBrand>
        <p className="font-bold text-inherit">Chaian Par-ool</p>
      </NavbarBrand>
      <NavbarItem>
        <ContactMeButton color="secondary" />
      </NavbarItem>
    </Navbar>
  );
}
