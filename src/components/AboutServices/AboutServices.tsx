import React, { FC, useEffect, useState } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import { services } from '../../api/services';
import './AboutServices.css';
import Modal from '../Modal/Modal';
import { Carousel } from 'react-bootstrap';
import Partenaires from '../Partenaires/Partenaires';
import { truncateText } from '../../api/helpers/utils';

interface AboutServicesProps { }

const AboutServices: FC<AboutServicesProps> = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  })

  const [show, setShow] = useState(false)
  const [service, setService] = useState({})
console.log(service);

  return (
    <div className="AboutServices" data-testid="AboutServices">
      <HeaderPage
        name={"Nos Services"}
      />
      {
        Object.keys(service).length ?

          <Modal
            service={service}
            handleClose={() => setService({})}
          />

          :
          null
      }
      <div className="">
        <div className="">
          <Carousel>
            {services.map((elements, index) => {
              return <Carousel.Item key={index}>
                <div className="container" >
                  <div className="row g-3">
                    {

                      elements.map((service, index) => {
                        return <div className="col-md-6 col-lg-6" key={index}>
                          <div className="service-item  animate__zoomIn">
                            <div className="service-header gap-2  d-flex ">
                              <div className="service-image">
                                <img src={service.imageUrl} width="100%" alt={"Image " + service.title} />
                              </div>
                            </div>
                            <div className="service-content">
                              <div className="service-title text-center">
                                <h3>
                                  {service.title}
                                </h3>
                              </div>
                              <div className="service-action text-center">
                                <button className="btn border"
                                  onClick={() => setService(service)}
                                >
                                  en savoir plus

                                </button>
                              </div>
                              <div className="service-description">
                              { truncateText(service.description, 200) }
                              </div>

                            </div>
                          </div>
                        </div>
                      })

                    }

                  </div>
                </div>
              </Carousel.Item>

            })}
          </Carousel>

        </div>
      </div>

      {/* <Partenaires /> */}
    </div>
  )
}

export default AboutServices;
