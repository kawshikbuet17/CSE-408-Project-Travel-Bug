import React, { useEffect, useState } from "react";

import "../cssFiles/CheckBeforePublishingCard.css";

const CheckBeforePublishingCard = (props) => {
  const [itemsToBring, setItemsToBring] = useState([]);

    useEffect(() => 
    {
      setItemsToBring([]);
      setItemsToBring((items) => {
        return [...items, props.itemsToBring]
      })
    }, []);

    return (
      <>
        <div className="card_container11">
          <div className="image_container11">
            <img src={props.img} alt="travel" classname="card_image11" />
          </div>
          <div className="card_title11">
            <h1>{props.label}</h1>
          </div>
          <hr className="hrCard" />
          <div className="card_owner11">
            The Experience is hosted by John Doe
          </div>
          <hr className="hrCard" />
          <div className="card_text11">
            <p>Minimum Age: {props.minAgeRequirement} years</p>
            <br></br>

            {itemsToBring.map((item, index) => 
            {
            if (item == "")
                  {
                    return (<span></span>)
                  }
                  else {
                    return (
                    
                      <>
                      <p>Items to Bring(guest): {item} </p>
                      <br></br>
                      </>
                    )
                  }
            })}
            <p>Maximum Group size: {props.maxGroupSize} </p>
            <br></br>
            <p>Total Cost: <b>{props.totalCost} </b></p>
          </div>
          <hr className="hrCard" />
          <div className="card_description11">{props.description}</div>
          <hr className="hrCard" />
          {/* <div className="card_facilities11">
            <h3> Facilities</h3>
            <table>
              <tbody>
                {props.facilities.map((facility) => {
                  console.log(props.facilities);
                  return (
                    <tr>
                      <td>{facility}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div> */}
          {/* <div className="card_facilities11">
          <h3>Facilities</h3>
          <table>
            <tbody>
              <tr>
                <td>Hot tub</td>
              </tr>
              <tr>
                <td>Hot tub</td>
              </tr>
              <tr>
                <td>Hot tub</td>
              </tr>
              <tr>
                <td>Hot tub</td>
              </tr>
              <tr>
                <td>Hot tub</td>
              </tr>
              <tr>
                <td>Hot tub</td>
              </tr>
            </tbody>
          </table>
        </div> */}
          <div className="card_location11">
            <h3>Location</h3>
            {props.location.label}
          </div>
        </div>
      </>
    );
  
}
export default CheckBeforePublishingCard;