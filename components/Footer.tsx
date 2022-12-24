import React from 'react'
import Image from 'next/image';
import logo from '../assets/image/logo.svg'
import Link from 'next/link';
import { facebookIcon, linkedIcon, twitterIcon } from './customIcons/socialIcons';
import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

type Props = {}

const FacebookIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={facebookIcon} {...props} />
);

const LinkedInIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={linkedIcon} {...props} />
);

const TwitterIcon = (props: Partial<CustomIconComponentProps>) => (
    <Icon component={twitterIcon} {...props} />
);

const Footer = (props: Props) => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__head">
                    <div className="footer__main-info">
                        <Link href='/'><Image src={logo} width={247} height={48} alt={'logo'} /></Link>
                        <p className="footer__main-info-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur in possimus sunt, commodi maxime deserunt hic veritatis ea eum atque?</p>
                        <div className="footer__socials">
                            <a href="#" className="footer__social-link">
                                <FacebookIcon />
                            </a>
                            <a href="#" className="footer__social-link">
                                <LinkedInIcon />
                            </a>
                            <a href="#" className="footer__social-link">
                                <TwitterIcon />
                            </a>
                        </div>
                    </div>
                    <nav className="footer__links">
                        <h3 className="footer__links-title">Site Map</h3>
                        <ul className="footer__link-list">
                            <li>
                                <a href="#" className="footer__link">Home</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">About</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">NFT</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Roadmap</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="footer__links">
                        <h3 className="footer__links-title">Site Map</h3>
                        <ul className="footer__link-list">
                            <li>
                                <a href="#" className="footer__link">Help & Support</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Privacy Policy</a>
                            </li>
                        </ul>
                    </nav>
                    <nav className="footer__links">
                        <h3 className="footer__links-title">Site Map</h3>
                        <ul className="footer__link-list">
                            <li>
                                <a href="#" className="footer__link">Partner</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Blog</a>
                            </li>
                            <li>
                                <a href="#" className="footer__link">Newsletter</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="footer__copyright">
                    <span>Copyright</span>
                    <span>&copy;</span>
                    <span>Next.js Store 2022, all rights reserved</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer