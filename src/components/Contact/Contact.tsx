import React, { FC, Fragment, useEffect } from 'react';
import ContactForm from '../ContactForm/ContactForm.lazy';
import HeaderPage from '../HeaderPage/HeaderPage';
// import Partenaires from '../Partenaires/Partenaires';
import './Contact.css';

interface ContactProps { }

const Contact: FC<ContactProps> = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })


  return (
    <Fragment>
      <div className="Contact" data-testid="Contact">
        <HeaderPage
          name={"Contactez-nous"}
        />
        <div className="container">
          <ContactForm />
        </div>

        {/* <div className="">
          <div className="row page-container align-items-center g-0">
            <div className="col-lg-6 contact-img animate__flipInY"
              style={{ backgroundImage: `url("/assets/images/all/call-center.png")` }}
            >

            </div>
            <div className="col-lg-6 ali">
              <div className="form-contact">
                <h1 className="text-center">Merci nous laisser votre message</h1>
                <ContactForm />

              </div>

            </div>
          </div>
        </div> */}
      </div>

      {/* <Partenaires /> */}
    </Fragment>
  )
};

export default Contact;
