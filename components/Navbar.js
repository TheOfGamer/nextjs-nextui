'use strict'

import React from "react";
import {Navbar, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import Image from "next/image";

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
      <main className="dark">
        <Navbar position="sticky" isBordered >

          <NavbarContent className="sm:hidden pr-3" justify="center">
              <p className="font-bold text-inherit">EXAMPLE</p>
          </NavbarContent>

          <NavbarContent className="hidden sm:flex gap-4" justify="center">
              <p className="font-bold text-inherit">EXAMPLE</p>
            <NavbarItem>
              <Link color="foreground" href="https://github.com/TheOfGamer/nextjs-nextui">
                GitHub
              </Link>
            </NavbarItem>
          </NavbarContent>

        </Navbar>
      </main>
        );
        }