// import { CAMPSITES } from '../../app/shared/CAMPSITES';
import { useSelector} from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    return (
        <>
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <h4>Filters</h4>
                        <label for="cars">Make: </label>
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <br></br>
                        <label for="cars">Model: </label>
                        <select name="cars" id="cars">
                            <option value="volvo">Volvo</option>
                            <option value="saab">Saab</option>
                            <option value="opel">Opel</option>
                            <option value="audi">Audi</option>
                        </select>
                        <br></br>
                        <label for="year">Years: </label>
                        <select name="year" id="year">
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                        <select name="yearto" id="yearto">
                            <option value="2010">2010</option>
                            <option value="2011">2011</option>
                            <option value="2012">2012</option>
                            <option value="2013">2013</option>
                            <option value="2014">2014</option>
                            <option value="2015">2015</option>
                            <option value="2016">2016</option>
                            <option value="2017">2017</option>
                            <option value="2018">2018</option>
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                        </select>
                        {/* <label for="pricefrom">Price: </label>
                            <input type="number" id="pricefrom" name="pricefrom">From</input>
                            <input type="number" id="priceto" name="priceto">To</input> */}
                            
                        <button type="button" class="btn btn-primary">Filter</button>
                    </div>
                    <div class="col">
                            <Row className='ms-3'>
                                {campsites.map((campsite) => {
                                    return (
                                        <Col
                                            md='3'
                                            className='m-3'
                                            key={campsite.id}
                                        // onClick={() => setCampsiteId(campsite.id)}
                                        >
                                            <CampsiteCard campsite={campsite} />
                                        </Col>
                                    );
                                })}
                            </Row>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CampsitesList;