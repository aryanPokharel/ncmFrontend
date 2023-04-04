import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </React.Fragment>
  );
  
const Section2 = () => {
    return (
        <section className="my-section">
        <div className="row top-row">
          <div className="col-12 d-flex align-items-center justify-content-center">
            <h1>How can we help you?</h1>
            <p>We have developed a state of art technology, a well-trained team, 
                one of the largest network of branches and a comprehensive vehicle fleet to 
                solve the logistics problems of Nepal.</p>
          </div>
        </div>
        <div className="row bottom-row">
          <div className="col-md-4 mb-3">
            <div className="box">
            <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
            </Box>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="box">
            <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="box">
            <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="box">
            <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="box">
            <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="box">
            <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
            </div>
          </div>
        </div>
      </section>
    )
}

export default Section2;