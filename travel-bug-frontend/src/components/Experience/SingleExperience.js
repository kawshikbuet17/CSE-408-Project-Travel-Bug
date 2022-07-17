import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import greece from "../../images/greece.jpg";
import greece1 from "../../images/greece1.jpg";
import greece2 from "../../images/greece2.jpg";
import greece3 from "../../images/greece3.jpg";
import greece4 from "../../images/greece4.jpg";
import hostProfilePic from "../../images/person.jpg";
import './experience.css';

const SingleExperience = () => {
    const [experience, setExperience] = useState({});
    const [host, setHost] = useState({});

    //get current id of url
    const id = window.location.pathname.split("/")[2];

    // fetch the experience data from the server
    useEffect(() => {
        fetchData();
    }, []);


    const fetchData = async () => {
        const response = await fetch(`http://localhost:5000/experience/hostingid/${id}`, {
            method: "GET",
        });
        const data = await response.json();
        console.log(data);
        setExperience(data);
        setHost(data.host);
    }

    return (
        <div>
            <Container>
                <br /> <br />
                <Container>
                    <h1><strong> {experience.hostingTitle}</strong></h1>
                    <h5>Location</h5>
                </Container>
                <Container>
                    <div className='card-group'>
                        <div className='row'>

                            <div className='card-style-1 col'>
                                <Card.Img variant="top" src={greece1} />
                            </div>
                            <div className='col-md-4'>
                                <div className='row my-10'>
                                    <div className='card-style-2 col'>
                                        <Card.Img variant="top" src={greece2} />
                                    </div>
                                    <div className='card-style-2 col'>
                                        <Card.Img variant="top" src={greece3} />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='card-style-2 col'>
                                        <Card.Img variant="top" src={greece4} />
                                    </div>
                                    <div className='card-style-2 col'>
                                        <Card.Img variant="top" src={greece} />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <Container>
                        <br />
                        <h4>Hosted By {host.firstName + " " + host.lastName}</h4>
                        <small> Maximum {experience.maxGroupSize}  Guests   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-suit-diamond-fill" viewBox="0 0 16 16">
                            <path d="M2.45 7.4 7.2 1.067a1 1 0 0 1 1.6 0L13.55 7.4a1 1 0 0 1 0 1.2L8.8 14.933a1 1 0 0 1-1.6 0L2.45 8.6a1 1 0 0 1 0-1.2z" />
                        </svg> Minimum Agge {experience.minAge} Years Old</small>
                    </Container>
                    <Container>
                        <br /><br />
                        <div className="card border-info mb-3 md-10" >
                            <div className="card-body text-dark">
                                <h5 className="card-title">Description</h5>
                                <p className="card-text">{experience.description}</p>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <div className='row '>


                            <div className='col-style-3 '>
                                <h4>Activities</h4>
                                <br />
                                <ul className="list-group ">
                                    <div className='list-group-item list-group-item-primary'>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-1"><strong>Activity Name</strong></h6>
                                            <small>#duration</small>
                                        </div>

                                        <h6 className="mb-1">Start Time - End Time</h6>

                                    </div>
                                    <div className='list-group-item list-group-item-primary'>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-1"><strong>Activity Name</strong></h6>
                                            <small>#duration</small>
                                        </div>

                                        <h6 className="mb-1">Start Time - End Time</h6>


                                    </div>
                                    <div className='list-group-item list-group-item-primary'>
                                        <div className="d-flex w-100 justify-content-between">
                                            <h6 className="mb-1"><strong>Activity Name</strong></h6>
                                            <small>#duration</small>
                                        </div>

                                        <h6 className="mb-1">Start Time - End Time</h6>


                                    </div>
                                </ul>
                            </div>
                            <div className='col form-style-9'>
                                <h2><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-dollar" viewBox="0 0 16 16">
                                    <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z" />
                                </svg> {experience.totalCost}</h2>

                                <div className="form-group">
                                    <div className="mb-3">
                                        <label htmlFor="checkin">Check In </label>
                                        <input type="date" className="form-control" id="checkin" aria-describedby="emailHelp" placeholder="Enter checkin Date" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="mb-3">
                                        <label htmlFor="checkout">CheckOut</label>
                                        <input type="date" className="form-control" id="checkout" placeholder="Enter checkin Date" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="mb-3">
                                        <label htmlFor="noOfGuests">No Of Guests</label>
                                        <input type="number" className="form-control" id="noOfGuests" placeholder="Enter No Of Guests" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button type="submit" className="btn btn-primary btn-lg">Reserve</button>
                                </div>
                            </div>
                        </div>


                    </Container>
                    <Container>
                        <div className="card-style-6 mb-3" >
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={hostProfilePic} className="card-img" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Hosted By {host.firstName + " " + host.lastName} </h5>
                                        <p className="card-text">Host Description:</p>

                                        <p className="card-text"><small className="text-muted">Hosting Date: {experience.hostingDate}</small></p>
                                        <button type="button" className="btn btn-outline-primary">Contact Host</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container>
                        <br /><br />
                        <div className='row md-6'>
                            <h2>Things to Know</h2>

                            <div className='col'>
                                <Container>

                                    <br /><br />


                                    <ul className="list-group">
                                        <li className="list-group-item"><h4>House Rules</h4></li>
                                        <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm-fill" viewBox="0 0 16 16">

                                            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                        </svg> Check-in: After 2:00 PM</li>
                                        <li className="list-group-item"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-alarm-fill" viewBox="0 0 16 16">
                                            <path d="M6 .5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1H9v1.07a7.001 7.001 0 0 1 3.274 12.474l.601.602a.5.5 0 0 1-.707.708l-.746-.746A6.97 6.97 0 0 1 8 16a6.97 6.97 0 0 1-3.422-.892l-.746.746a.5.5 0 0 1-.707-.708l.602-.602A7.001 7.001 0 0 1 7 2.07V1h-.5A.5.5 0 0 1 6 .5zm2.5 5a.5.5 0 0 0-1 0v3.362l-1.429 2.38a.5.5 0 1 0 .858.515l1.5-2.5A.5.5 0 0 0 8.5 9V5.5zM.86 5.387A2.5 2.5 0 1 1 4.387 1.86 8.035 8.035 0 0 0 .86 5.387zM11.613 1.86a2.5 2.5 0 1 1 3.527 3.527 8.035 8.035 0 0 0-3.527-3.527z" />
                                        </svg> Checkout: 12:00 PM</li>
                                        <li className="list-group-item"> &#10010;; Additional Requirements</li>
                                        <li className="list-group-item"> &#10010; Additional Requirements</li>
                                    </ul>
                                </Container>
                            </div>

                            <div className='col'>
                                <Container>

                                    <br /><br />


                                    <ul className="list-group">
                                        <li className="list-group-item"><h4>Cancellation Policy</h4></li>
                                        <li className="list-group-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bookmarks-fill" viewBox="0 0 16 16">

                                            <path d="M2 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L7 13.101l-4.223 2.815A.5.5 0 0 1 2 15.5V4z" />
                                            <path d="M4.268 1A2 2 0 0 1 6 0h6a2 2 0 0 1 2 2v11.5a.5.5 0 0 1-.777.416L13 13.768V2a1 1 0 0 0-1-1H4.268z" />
                                        </svg> Cancel before check-in on Jul 17 for a partial refund.</li>
                                    </ul>

                                </Container>
                            </div>
                        </div>
                    </Container>
                </Container>
            </Container>
            <br /><br />
        </div>
    )
}

export default SingleExperience