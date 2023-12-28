import React from "react";
import { Container } from "react-bootstrap";

const NGOData = [
  
  {
    sno: 1,
    name:<a href="#" target="_blank" rel="noopener noreferrer">Tree Plantation NGO</a> ,
    registration: "127/M/SR/5200, Nashik (Maharashtra)",
    address: "GangapurRoad, Nashik",
    sectors: "Tree Plantation,Environment & Forests,Green Initiatives"
  },
  {
    sno: 2,
    name: <a href="#" target="_blank" rel="noopener noreferrer">Save Child Awareness Foundation</a>,
    registration: "45/SR/4563, Pune (Maharashtra)",
    address: "Shivaji Nagar",
    sectors: "Child Welfare,Education & Literacy,Health & Family Welfare,Human Rights"
  },
  {
    sno: 3,
    name:<a href="#" target="_blank" rel="noopener noreferrer">Water Conservation Alliance</a> ,
    registration: "WCA/789/2023, Mumbai (Maharashtra)",
    address: "LIC Colony,Bandra West",
    sectors: "Water Conservation,Environment & Forests,Community Development"
  },
  {
    sno: 4,
    name:<a href="#" target="_blank" rel="noopener noreferrer">1 STEP FOUNDATION</a> ,
    registration: "249/UD/SR/2022, UKHRUL (MANIPUR)",
    address: "TALUI VILLAGE UKHRUL DISTRICT MANIPUR",
    sectors: "Agriculture,Animal Husbandry,Dairying & Fisheries,Drinking Water,Education & Literacy,Environment & Forests,Food Processing,Labour & Employment,Micro Finance (SHGs),Micro Small & Medium Enterprises,New & Renewable Energy,Rural Development & Poverty Alleviation,Tourism,Tribal Affairs,Water Resources,Youth Affairs,Skill Development"
  },
  
  {
    sno: 5,
    name: <a href="#" target="_blank" rel="noopener noreferrer">Achievement of Rising Maiden</a>,
    registration: "147/M/SR/879, GandhiNagar (Gujarat)",
    address: "The Leela Gandhinagar",
    sectors: "Children,Any Other."
  },
  {
    sno: 6,
    name:<a href="#" target="_blank" rel="noopener noreferrer">ACADEMY OF PERFORMING ARTS</a> ,
    registration: "249/UD/SR/2022, (Sikkhim)",
    address: "Darjeeling",
    sectors: "Art & Culture"
  },
  
  {
    sno: 7,
    name: <a href="#" target="_blank" rel="noopener noreferrer">7 Sisters Foundation</a>,
    registration: "167/M/SR/2000, Imphal (MANIPUR)",
    address: "Sermon Road, 5th Avenue, Dewlahland",
    sectors: "Food Processing,Labour & Employment,Micro Finance (SHGs),Micro Small & Medium Enterprises,New & Renewable Energy."
  },
];

export function NgoDirectory() {
  return (
    <Container className="mt-5">
    <div className="text-center mt-5">
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered table-sm">
          <thead>
            <tr>
              <th>Sr No.</th>
              <th>Name of VO/NGO</th>
              <th>Registration No., City & State</th>
              <th>Address</th>
              <th>Sectors working in</th>
            </tr>
          </thead>
          <tbody>
            {NGOData.map((ngo, index) => (
              <tr key={index}>
                <td>{ngo.sno}</td>
                <td>{ngo.name}</td>
                <td>{ngo.registration}</td>
                <td>{ngo.address}</td>
                <td>{ngo.sectors}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </Container>
  );
}
