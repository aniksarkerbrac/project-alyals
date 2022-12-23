import React from 'react';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faFacebookSquare, faTwitterSquare, faYoutubeSquare, faLinkedin, faMapMarkerAlt, faEnvelope, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons';
library.add(fab)

const Footer = () => {
    const details = []
    const address = []
    const company = [
        { name: "About Us", link: "/aboutUs" },
        { name: "Our Team", link: "/team" },
        { name: "Blog", link: "/blog" },
        { name: "Service", link: "/service" },
        { name: "Legal Notice", link: "/legalNotice" }
    ]
    const support = [
        { name: "Help Center", link: "/help" },
        { name: "FAQ", link: "/faq" },
        { name: "Ticket Support", link: "/ticket" },
        { name: "My Account", link: "/myAccount" },
        { name: "Contact Us", link: "/contactUs" },
    ]

    const icon ={
        color: 'pink'
    }
    return (
        
        <footer className="mb-0">
            
            <div className="container pt-5">
            <hr className="mt-4" style={{ color: 'pink' }} />
                <div className="row pt-5">
                    <FooterCol title="" items={details}>
                        <div className="text-black">
                            <h4>Alyals</h4>
                            <p className="text-muted">Lorem ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor ipsum dolor</p>
                        </div>
                    </FooterCol>
                    <FooterCol title="Company" items={company}></FooterCol>
                    <FooterCol title="Support" items={support}></FooterCol>
                    <FooterCol title="Our office" items={address}>
                        <p><FontAwesomeIcon style={icon} icon={faMapMarkerAlt} /> House-27, Road-3/B, Sector-08, Uttara, Dhaka-1230</p>
                        <p><FontAwesomeIcon style={icon} icon={faEnvelope} /> hello@alyals.com</p>
                        <p><FontAwesomeIcon style={icon} icon={faPhoneSquareAlt} /> +8801779966880</p>
                    </FooterCol>
                    <hr className="mt-4" style={{ color: 'pink' }} />
                    <div className="d-flex justify-content-between text-muted">
                        <div>
                            <FontAwesomeIcon style={icon} className="m-1" icon={['fab', 'facebook-square']} />
                            <FontAwesomeIcon style={icon} className="m-1" icon={['fab', 'twitter-square']} />
                            <FontAwesomeIcon style={icon} className="m-1" icon={['fab', 'youtube-square']} />
                            <FontAwesomeIcon style={icon} className="m-1" icon={['fab', 'linkedin']} />
                        </div>
                        <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;