import { Col, Row } from 'react-bootstrap';

import './Style/Contact.css';
import { useState } from 'react';

export function Contact(){
        const [data, setData] = useState({name:"", email:"", phone:"", message:""});
        const handleChange = (e) =>{
            const name = e.target.name;
            const value = e.target.value;
            setData({...data, [name]: value})
        }

        const handleSubmit = (e) =>{
            e.preventDefault();
            console.log(data);
        }

    return(
        <div>
            <div>
                <Row>
                    <Col xs={6}>
                        <div class="Query">
                            <br />
                            <h6 class="Querytitle">ALL GENERAL QUERIES</h6>
                            <p class="Querycontent">info@NGOHubfoundationindia.org</p><br />

                            <h5>DONATION RELATED QUERIES</h5>
                            <h6 class="Querytitle">FOR NEW DONORS</h6>
                            <p class="Querycontent">Rushikesh Patil – 9191455589</p>
                            <p class="Querycontent">donation@NGOHubfoundationindia.org</p><br />

                            <h6 class="Querytitle">FOR EXISTING DONORS</h6>
                            <p class="Querycontent">Akshay Wagh – 9191455478</p>
                            <p class="Querycontent">donation@NGOHubfoundationindia.org</p><br />

                            <h6 class="Querytitle">FOR MEDIA-RELATED QUERIES</h6>
                            <p class="Querycontent">Write to Sandip Chetry at sandip@NGOHubfoundation.email</p><br />

                        </div>
                    </Col>
                    <Col xs={6}>
                        <form method="post" onSubmit={handleSubmit}>
                            <h3 class="formtitle">HELPDESK</h3>
                            <p class="formcontent">For any grievance, suggestions and queries kindly write to us.</p>
                            <label htmlFor="">Name</label>
                            <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder="Enter Name"/>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id="" onChange={handleChange} value={data.email} placeholder="example@email.com"/>
                            <label htmlFor="">Phone</label>
                            <input type="phone" name="phone" id="" onChange={handleChange} value={data.phone} placeholder="+91"/>
                            <label htmlFor="">Message</label>
                            <textarea name="message" id="" cols="30" rows="8" onChange={handleChange} value={data.message} placeholder="type here......"/><br />
                            <button type="submit">Send</button><br /><br />
                        </form>
                    </Col>
                </Row>
            </div>
        </div>
    );
}