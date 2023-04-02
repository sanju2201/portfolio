import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin, AiFillMail } from 'react-icons/ai';

import { Container, Span, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () => (
  <Container style={{ textAlign: "center" }}>
    <Div1>
      <Link href={"/"}>
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "20px" }}>
          <Span style={{ marginTop: "5px", fontSize: "2.5rem" }}>@SanjuManna</Span>
        </a>
      </Link>
    </Div1>
    <Div2 style={{ marginTop: "5px" }}>
      <li>
        <Link href={"#projects"}>
          <NavLink >Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#tech"}>
          <NavLink >Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href={"#about"}>
          <NavLink >About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com' >
        <AiFillGithub size={"3rem"} />
      </SocialIcons>
      <SocialIcons href='https://github.com' >
        <AiFillLinkedin size={"3rem"} />
      </SocialIcons>
      <SocialIcons href='https://github.com' >
        <AiFillMail size={"3rem"} />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
