"use client";
import React from "react";
import { Navbar, NavbarBrand, NavbarItem } from "@nextui-org/react";
import ContactMeButton from "../components/contactme";

export default function MyNavbar({ setslide, ...props }) {
  return (
    <Navbar {...props}>
      <NavbarBrand onClick={() => setslide(0)} className="cursor-pointer">
        <p className="font-bold text-inherit">Chaian Par-ool</p>
      </NavbarBrand>
      <NavbarItem>
        <ContactMeButton color="secondary" />
      </NavbarItem>
    </Navbar>
  );
}
