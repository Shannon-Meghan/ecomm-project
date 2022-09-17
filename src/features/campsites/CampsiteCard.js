import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
    // const { campsite } = props;
    const { id, image, title, price } = campsite;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg
                    width='100%'
                    src={image}
                    alt={title}
                />
                <CardImgOverlay>
                    <CardTitle>{title}</CardTitle>
                    <CardTitle>${price}</CardTitle>
                </CardImgOverlay>
                <button type="button" class="btn btn-primary">Shop Now</button>
            </Card>
        </Link>
    )
};

export default CampsiteCard;