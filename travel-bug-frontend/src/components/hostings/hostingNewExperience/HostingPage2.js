import React, { useEffect, useState } from 'react';

import '../cssFiles/HostingPage1Base.css';
import '../cssFiles/HostingPage2.css';




const HostingPage2 = (props) => {

  const [subCategories, setSubCategories] = useState([]);
  const [selectedIdx, setSelectedIdx] = useState(null);



  useEffect(() => {
   // console.log("ca: " + props.selectedSubCategory());
      setSubCategories([{category: "Snakes", id : 1}, {category: "Scorpion", id : 2}, {category : "Crocodile", id : 3}, {category : "Insects", id: 4}])
      //console.log(subCategories);
      
    }, []);

    useEffect(() => {
      subCategories.map(({category, id}) => {
        //console.log("cat: " + category);
          if (category == props.selectedSubCategory())
          {
              setSelectedIdx(id);
              changeStyle(id);
          }
      })
      
    }, [subCategories])
    
  const changeStyle = (idx)=> {
    subCategories.map(({category, id}) => {
      var tableRow = "id" + id;
      var element = document.getElementsByClassName(tableRow);
      //console.log(element);

      if (id === idx) {
        element[0].style.backgroundColor = "rgb(201 212 231)";
        element[0].style.border = "1px solid black";
      } else {
        element[0].style.backgroundColor = "#FFFFFF";
        element[0].style.border = "1px solid rgb(197, 197, 197)";
      }
    });
  }

  
  var idx = 0;
  if (subCategories !== null) {
      return (
        <div id="body">
          <div id="container">
            <div id="left">Please select a subcategory</div>
            <div id="right">
              <div id="top">
                {/* <Link to="/host/home"><button id="saveAndExit" onClick={()=>{this.props.saveAndExit()}}>Save and Exit</button></Link> */}
                
              </div>

              <div id="middle">
                <table>
                  {subCategories.map(({category, id}) => {
                    idx = idx + 1;
                    //console.log(category.category);

                    return (
                      <tr
                        key={idx}
                        onClick={() => {
                          props.selectSubCategory(category);
                          setSelectedIdx(id);
                          changeStyle(id);
                        }}
                      >
                        <td className={"id" + id}>{category}</td>

                        {/* <td className={"tr" + id}>{category}</td> */}
                      </tr>
                    );
                  })}
                </table>
              </div>

              <div id="bottom">
                <button id="backButton" onClick={props.prevPage}>Back</button>

                <button id="nextButton" onClick={props.nextPage}>Next</button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <header>Hello</header>;
    }
}

export default HostingPage2