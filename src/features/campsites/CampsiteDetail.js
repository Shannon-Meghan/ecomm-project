import { Card, CardImg, CardTitle, CardText, CardBody, Col } from 'reactstrap';

const CampsiteDetail = ({ campsite }) => {
    const { image, title, price, description } = campsite;

    return (
        <>
        <div class="container">
                <div class="row">
                    <Col md='7' className='m-4'>
                        <Card>
                            <CardImg top src={image} alt={title} />
                        </Card>
                    </Col>

                    <Col md='3' className='m-4'>
                        <h1>{title} for sale</h1>
                        <h2>${price}</h2>
                        <h3>Bi-weekly payments: ${Math.round(price/72)}</h3>
                        <div>
                            <button type="button" class="btn btn-primary my-2 w-100">Book Test Drive <i className='fa fa-car' /></button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary my-2 w-100">Finance It <i className='fa fa-usd' /></button>
                        </div>
                        <div>
                            <button type="button" class="btn btn-primary my-2 w-100">Free Credit Score <i className='fa fa-tachometer' /></button>
                        </div>
                    </Col>

                    <Col md='12' className='m-4'>
                        <Card>
                            <CardBody>
                                <CardText>{description}</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                </div>
            </div>
        </>
    );
};

export default CampsiteDetail;