import React from 'react';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import { Link } from 'react-scroll';
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  Address
} from './FooterElements';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <Link to='hero' spy={true} smooth={true}><SocialLogo >Italiano</SocialLogo></Link>
            <Address style={{ textAlign: "center" }}>
              <SocialLogo style={{ cursor: "default" }} >غزة - تقاطع شارع الوحدة مع شارع النصر</SocialLogo>
              <SocialLogo style={{ cursor: "default" }} >2848823</SocialLogo>
            </Address>
            <SocialIcons>
              <SocialIconLink href='https://www.facebook.com/italianogaza/?ref=page_internal' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='https://www.instagram.com/italianogaza/?fbclid=IwAR1mX-b_9-Jt9plua1Abf3VbrjzSv0-YEOIzxJify07eRO3NOw85csbHeaI' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href='https://twitter.com/Italian60053753'
                target='_blank'
                aria-label='Twitter'
                rel='noopener noreferrer'
              >
                <FaTwitter />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
