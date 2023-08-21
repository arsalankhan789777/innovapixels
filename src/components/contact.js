import React, { useState } from 'react'


const Contacts4 = ({ contactbg }) => {
    const [userData, setUserData] = useState({
        fullname: "",
        email: "",
        tel: "",
        comment: "",
    });
    const [submissionStatus, setSubmissionStatus] = useState(null); // Add this state variable
    let name, value;
    const postUserData = (event) => {
        name = event.target.name;
        value = event.target.value;

        setUserData({ ...userData, [name]: value });
    };

    // firebase connection 
    const submitData = async (event) => {
        event.preventDefault();
        const { fullname, email, tel, comment } = userData;

        if (fullname && email && tel && comment) {
            const res = await fetch("https://react-innovapixels-default-rtdb.firebaseio.com/userData.json",
                {
                    method: "post",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        fullname, email, tel, comment
                    })
                }
            );

            if (res.status === 200) {
                setUserData({
                    fullname: "",
                    email: "",
                    tel: "",
                    comment: "",
                });
                setSubmissionStatus("success"); // Set success status
            }

            else {
                setSubmissionStatus("error"); // Set error status
            }
        }
        else {
            setSubmissionStatus("incomplete"); // Set incomplete status
        }
    };




    return (
        <>
            {contactbg.map((item, index) => (
                <wrapper className="contact-main-wrapper">
                    <div className='Main-Form-Background' style={{ backgroundImage: item.background }}>
                        <h2>Contact Us</h2>
                    </div>
                    <div className='contactform'>
                        <h3>Let's chat over a brew.</h3>
                        <span>Coffee, tea, or something stronger...</span>
                        <form action='#' method='POST'>
                            <label for="fname">First Name</label>
                            <input id="fname" type='text' name='fullname' placeholder='How should we address you?' autoComplete='off' required value={userData.fullname} onChange={postUserData} />
                            <label for="email">EMAIL</label>
                            <input id="email" type='email' name='email' placeholder="Let's start a chain. " autoComplete='off' required value={userData.email} onChange={postUserData} />
                            <label for="phone">PHONE</label>
                            <input id='phone' type='tel' name='tel' placeholder='So nothing gets lost in translation.' autoComplete='off' required value={userData.tel} onChange={postUserData} />
                            <label for="comment">COMMENT</label>
                            <input id='comment' type='text' name='comment' placeholder='Disruption starts here. How can we help?' autoComplete='off' required value={userData.comment} onChange={postUserData} />
                            <input id="submit" type="submit" value="Get Our Attention" onClick={submitData} />
                            {submissionStatus === "success" && <p>Form Successfully Submitted</p>}
                            {submissionStatus === "error" && <p>There was an error submitting the form.</p>}
                            {submissionStatus === "incomplete" && <p>Please fill out all fields before submitting.</p>}
                        </form>
                    </div>
                </wrapper>

            ))}

        </>
    )
}

export default Contacts4