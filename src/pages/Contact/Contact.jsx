import React from "react";

const Contact = () => {
  // this.state ={name:''};
  //this.setState({name: 'vipin1 '})
  // promise

  const [employeeName, setEmployeeName] = React.useState("");

  const [covidData, setCovidData] = React.useState(null);
  console.log(covidData && covidData[0]);
  /*
  ye use hota hai state initialise karne ko 
  use state return two thing 
  [employeeFirstName,setEmployeeName] this code is array desctructuring
  */

  /**useEffect
   * / before rendering ie data base call and setting timeout register dom event
   *
   */
  React.useEffect(() => {
    fetch("https://data.covid19india.org/data.json")
      .then((response) => response.json())
      .then((resp) => setCovidData(resp.statewise));
  }, []);

  const handleChange = (event) => {
    console.log(event.target.value);
    setEmployeeName(event.target.value);
  };

  return (
    <>
      <h1>You are on Contact Page Now!</h1>
      <p>Write down your contacts here.</p>
      <div>
        <label> Sample</label>
        <input
          name="employeeName"
          type="text"
          value={employeeName}
          onChange={handleChange}
        />

        <label>{employeeName} </label>
        <ul>
          {covidData &&
            covidData.map((object) => {
              return (
                <li key={object.statecode}>
                  {object.statecode} has {object.active} cases{" "}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default Contact;
