import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AddHotelType, NewHotelType } from '../types/hotel';
import { Box } from '@mui/system';
import { StarBorder, StarBorderOutlined } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
interface Iprops {
    id: NewHotelType,
}
export default function Information({ id }: Iprops) {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            m: 7
        }}>
            <Card sx={{ maxWidth: 345 }}>
                <CardHeader

                    title={id.title}
                    subheader={id.feature}
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={id.imageUrl}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {id.description}
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                        <Typography> {`${id.noOfReviews}`}</Typography>
                    </IconButton>
                    <IconButton aria-label="share">
                        <StarBorderOutlined /><Typography> {`${id.starsRating}`}</Typography>
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Link to={`/hotels/${id.id}`}>
                    <Button variant="outlined" color="success">View More Information</Button>
                </Link>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography paragraph>Packages: </Typography>
                        <Typography paragraph>
                            Price per Night: {`${id.pricePerNight}`}
                        </Typography>
                        <Typography paragraph >
                            Prices Including Food: {`${id.includingFoodPrice}`}
                        </Typography>
                        <Typography paragraph>
                            HoneyMoon Package: {`${id.includingFoodPrice} + ${id.pricePerNight}`}
                        </Typography>
                    </CardContent>
                </Collapse>

            </Card>
        </Box>
    );
}
