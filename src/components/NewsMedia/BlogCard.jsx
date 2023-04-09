import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const BlogCard = (props) => {
    const theme = useTheme();
    return (
        <Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h5">
                        {props.title}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.date}
                    </Typography>
                </CardContent>
                
            </Box>
            <Typography variant="subtitle1" color="text.secondary" component="div">
                        {props.content}
                    </Typography>
        </Card>
    )
}

export default BlogCard;

