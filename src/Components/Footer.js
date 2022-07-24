import React from 'react';
import SimpleReactFooter from "simple-react-footer";
import Logo from '../Static/images/Logo.png';
import '../Static/Css/Footer.css';


function Footer() {

    const title = "PIRATES e-Sports";
    const image = Logo;
    const description = `We are PIRATES e-Sports, our dream is bring indian Esports to another level. Come Join Us and let's complete our dream together.`;
    const columns = [
      {
          title: "Resources",
          resources: [
              {
                  name: "About",
                  link: "/about"
              },
              {
                  name: "Careers",
                  link: "/careers"
              },
              {
                  name: "Contact",
                  link: "/contact"
              },
              {
                  name: "Admin",
                  link: "http://127.0.0.1:8000/admin/"
              }
          ]
      },
      {
          title: "Legal",
          resources: [
              {
                  name: "Privacy",
                  link: "/privacy"
              },
              {
                  name: "Terms",
                  link: "/terms"
              }
          ]
      },
      {
          title: "Visit",
          resources: [
              {
                  name: "Locations",
                  link: "/locations"
              },
              {
                  name: "Culture",
                  link: "/culture"
              }
          ]
      }
   ];

    return(
        <SimpleReactFooter 
            image = {image}
            description={description} 
            title={title}
            columns={columns}
            copyright="PIRATES e-Sports-2022"
            iconColor="black"
            backgroundColor="#c04c71"
            fontColor="#343740"
            copyrightColor="darkgrey"
        />
    );
}


export default Footer;