import React from 'react'



const ContentSingle = [
    {
        headigsingle: '1Creative Collaboration',
        parasingle: 'Communication creates clarity. At Ruckus, our relationships are partnerships, with a common goal of engineering success through well-planned and well-executed strategies.',
    },
    {
        headigsingle: '2Creative Collaboration',
        parasingle: 'Communication creates clarity. At Ruckus, our relationships are partnerships, with a common goal of engineering success through well-planned and well-executed strategies.',
    },
    {
        headigsingle: '3Creative Collaboration',
        parasingle: 'Communication creates clarity. At Ruckus, our relationships are partnerships, with a common goal of engineering success through well-planned and well-executed strategies.',
    },
];

const SingleBoxes = () => {
    return (
        <div className='section-3-single-bxs'>
            <div className='container-max'>
                <div className='process-steps-copy'>
                <h2>Process <strong>matters.</strong></h2>
                <p>Process matters because it removes subjectivity and project fragmentation and replaces it with deadline-oriented & data-driven methodologies.</p>
                </div>
                <div className='main-content-3-bxs'>
                    {ContentSingle.map((item, index) => (
                        <div className='content-single-bx' key={index}>
                            <h4>{item.headigsingle}</h4>
                            <p>{item.parasingle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}

export default SingleBoxes