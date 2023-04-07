import * as React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import WarehouseIcon from '@mui/icons-material/Warehouse';
import MailLockIcon from '@mui/icons-material/MailLock';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import './Services.css'


const Services = () => {
  return (
    <section id="services">

      <div className="container">
        <h1>How can we help you?</h1>
        <p id="servicesContent">Nepal Can Move (NCM) is a national logistic and courier company with largest domestic
          distribution network in the country.
          We let you to exercise full control and visibility of your packages through dedicated Relationship Managers (RMs)
          and Self-Service Portals (SSP).</p>

        <Stack direction="column" spacing={2}>
          <Stack direction="row" spacing={2}>
            <Card id='serviceCard' >
              <CardContent>
                <ShoppingCartIcon />
                <Typography variant="h5" component="div">
                  eCommerce delivery & COD
                </Typography>

                <Typography variant="body2">
                  We provide ecommerce pickup from your office or home and delivery to your customer's
                  home with COD collection services all over Nepal. Sell more online with us.
                  <br />

                </Typography>
              </CardContent>

            </Card>
            <Card id='serviceCard' >
              <CardContent>
                <WarehouseIcon />
                <Typography variant="h5" component="div">
                  Warehousing & inventory
                </Typography>

                <Typography variant="body2">
                  We provide warehousing and inventory services at key locations. We can receive your inventory,
                  manage it and fulfill your orders so that you can focus on selling more.
                  <br />

                </Typography>
              </CardContent>

            </Card>
            <Card id='serviceCard' >
              <CardContent>
                <DirectionsBoatIcon />
                <Typography variant="h5" component="div">
                  Export
                </Typography>

                <Typography variant="body2">
                  We can export items to most countries from Nepal, including Australia, China, Europe, India US, UK, UAE at most affordable rates.
                  <br />

                </Typography>
              </CardContent>

            </Card>
          </Stack>
          <Stack direction="row" spacing={2}>
            <Card id='serviceCard' >
              <CardContent>
                <MailLockIcon />
                <Typography variant="h5" component="div">
                  Express mail & parcels
                </Typography>

                <Typography variant="body2">
                  We provide corporate express mail & parcel services, which includes prepaid satchels,
                  boxes that are fully trackable and delivered with proof of delivery.
                  <br />

                </Typography>
              </CardContent>

            </Card>
            <Card id='serviceCard' >
              <CardContent>
                <PriceChangeIcon />
                <Typography variant="h5" component="div">
                  Banking & financial
                </Typography>

                <Typography variant="body2">
                  We provide agency services for home banking, account opening, cards delivery,
                  deposit collections and remittance services all over Nepal.
                  <br />

                </Typography>
              </CardContent>

            </Card>
            <Card id='serviceCard' >
              <CardContent>
                <AccountCircleIcon />
                <Typography variant="h5" component="div">
                  Project services
                </Typography>

                <Typography variant="body2">
                  We provide aid delivery & project logistics management services to government and NGOs,
                  INGOs, all over Nepal. We need your project needs.
                  <br />

                </Typography>
              </CardContent>

            </Card>
          </Stack>

        </Stack>


      </div>
    </section>
  )
}

export default Services