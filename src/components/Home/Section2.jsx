import * as React from 'react';
import CustomCard from './CustomCard';
import './Section2.css'


const Section2 = () => {

  return (
    <section id="section2">

      <div id='section2B'>
        <div id='section2C'>
          <h1>How can we help you?</h1>
          <p id="section2Content">We have developed a state of art technology, a well-trained team,
            one of the largest network of branches and a comprehensive vehicle fleet to solve the logistics problems of Nepal.</p>
        </div>
        <div id="section2D">
          <div id="row">

            <CustomCard
              icon={"DirectionsBoatIcon"}
              title={"Cargo"}
              content={"We work closely with our partner freight forwarders to bring any cargo merchandise from anywhere in the world to Nepal."} />


            <CustomCard
              icon={"AllInboxIcon"}
              title={"Courier & delivery"}
              content={"We provide convenient home &; office pickup, and delivery to most locations in Nepal. We also provide affordable counter delivery to most of our branches."} />


            <CustomCard
              icon={"WarehouseIcon"}
              title={"Logistics & warehousing"}
              content={"We provide complex logistics management that includes warehousing, inventory control, cold chain, project logistics, aid delivery, etc."} />

          </div>
          <div id="row">

            <CustomCard
              icon={"LocalShippingIcon"}
              title={"Transport"}
              content={"We operate our own fleet to provide a range of reliable transport & trucking staff, vehicles and solutions that meet your business needs."} />


            <CustomCard
              icon={"StorageIcon"}
              title={"Technology"}
              content={"We provide advanced logistics, ecommerce, warehousing and inventory technology. We provide APIs and integration services."} />


            <CustomCard
              icon={"AccountTreeIcon"}
              title={"Projects"}
              content={"We provide project management services to meet any complex logistics needs of organizations, corporations, government and NGOs."} />

          </div>
        </div>
      </div>
    </section>
    // <section id="section2">

    //   <div className="container">
    //     <h1>How can we help you?</h1>
    //     <p id="section2Content">We have developed a state of art technology, a well-trained team,
    //       one of the largest network of branches and a comprehensive vehicle fleet to solve the logistics problems of Nepal.</p>
    //     <div class="container">
    //       <div class="row">
    //         <div class="col-sm">
    //           <CustomCard
    //             icon={"DirectionsBoatIcon"}
    //             title={"Cargo"}
    //             content={"We work closely with our partner freight forwarders to bring any cargo merchandise from anywhere in the world to Nepal."} />
    //         </div>
    //         <div class="col-sm">
    //           <CustomCard
    //             icon={"AllInboxIcon"}
    //             title={"Courier & delivery"}
    //             content={"We provide convenient home &; office pickup, and delivery to most locations in Nepal. We also provide affordable counter delivery to most of our branches."} />
    //         </div>
    //         <div class="col-sm">
    //           <CustomCard
    //             icon={"WarehouseIcon"}
    //             title={"Logistics & warehousing"}
    //             content={"We provide complex logistics management that includes warehousing, inventory control, cold chain, project logistics, aid delivery, etc."} />
    //         </div>
    //       </div>
    //       <div class="row">
    //         <div class="col-sm">
    //           <CustomCard
    //             icon={"LocalShippingIcon"}
    //             title={"Transport"}
    //             content={"We operate our own fleet to provide a range of reliable transport & trucking staff, vehicles and solutions that meet your business needs."} />
    //         </div>
    //         <div class="col-sm">
    //           <CustomCard
    //             icon={"StorageIcon"}
    //             title={"Technology"}
    //             content={"We provide advanced logistics, ecommerce, warehousing and inventory technology. We provide APIs and integration services."} />
    //         </div>
    //         <div class="col-sm">
    //           <CustomCard
    //             icon={"AccountTreeIcon"}
    //             title={"Projects"}
    //             content={"We provide project management services to meet any complex logistics needs of organizations, corporations, government and NGOs."} />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Section2;