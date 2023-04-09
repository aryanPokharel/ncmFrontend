
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import './BlogCard.css'

const BlogCard = (props) => {
    return (
        <Card sx={{ display: 'flex' }} id='blogCard'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }} id='blogCardImageSection'>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 151 }}
                        image={props.image}
                        alt="BlogImage"
                    />
                </CardContent>

            </Box>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    {props.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    {props.date}
                </Typography>
            </CardContent>
            <Typography variant="subtitle1" color="text.secondary" component="div" id='blogCardContentSection'>
                {props.content}
            </Typography>
        </Card>
    )
}

export default BlogCard;

