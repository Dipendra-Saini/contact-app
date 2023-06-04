import React, { useState } from 'react'
import './contact_list.css'
import logo from 'D:\\#PD\\Web\\REACT JS\\images\\contact_logo.jpg'

const Contact_list = () =>{
    const [inpdata,setinpdata] = useState(
        {
            fname:"",
            lname:"",
            mb:"",
        }
    );

    const[item,setitem] = useState([]);

    const additems = () =>{
        if(inpdata.fname && inpdata.lname && inpdata.mb){
            setitem((prevItems) => [
                ...prevItems,
                [inpdata.fname, inpdata.lname, inpdata.mb],
              ]);
            setinpdata({
                fname: "",
                lname: "",
                mb: "",
              });
        }
    }

    const editItem = (index) => {
        // Find the item in the item array using the index
        const editedItem = item[index];
      
        // Update the inpdata state with the values of the edited item
        setinpdata({
          fname: editedItem[0],
          lname: editedItem[1],
          mb: editedItem[2],
        });
      
        // Remove the edited item from the item array
        const updatedItems = item.filter((_, i) => i !== index);
        setitem(updatedItems);
      };
      
      const deleteItem = (index) => {
        // Remove the item from the item array
        const updatedItems = item.filter((_, i) => i !== index);
        setitem(updatedItems);
      };
      

    return(
        <div className="main-div">
            <div className="child-div">
                <figure>
                    <img id='main-logo' src={logo} alt="NO image found" />
                    <figcaption><h3>Add your contact details here</h3></figcaption>
                </figure>

                <div className='get-data'>
                    <fieldset>
                    <legend><strong>Fill you details in the form</strong></legend>
                        <label><b>First Name</b></label><br></br>
                        <input type="text" placeholder='👨 First Name'  
                            value={inpdata.fname}
                            onChange={
                                e=>{
                                    setinpdata({...inpdata, fname: e.target.value})
                                }
                            }
                        /><br></br>
                        <label><b>Last Name</b></label><br></br>
                        <input type="text" placeholder='👨 Last Items' 
                            value={inpdata.lname}
                            onChange={
                                e=>{
                                    setinpdata({...inpdata,lname:e.target.value})
                                }
                            }
                        /><br></br>
                        <label><b>Mobile. No.</b></label><br></br>
                        <input type="phone" placeholder='🔢 Mobile Number' 
                            value={inpdata.mb}
                            onChange={
                                e=>{
                                    setinpdata({...inpdata,mb:e.target.value})
                                }
                            }
                        /><br></br>
                        <input id='sub' type='submit' title='Submit It' onClick={additems}/>
                    </fieldset>
                </div>
            </div>
            <div className='show-data'>
                <div className='each-items'>
                <span>F.Name</span>
                <span>L.Name</span>
                <span>M.Numb</span>
                </div>

                {
                    item.map((data, index) => (
                    <div className='each-items' key={index}>
                        <span>{data[0]}</span>
                        <span>{data[1]}</span>
                        <span>{data[2]}</span>
                        <button className='mybox' onClick={() => editItem(index)}>Edit</button>
                        <button className='mybox' onClick={() => deleteItem(index)}>Delete</button>
                    </div>
                    ))
                }
            </div>
        </div>
    )
}
export default Contact_list