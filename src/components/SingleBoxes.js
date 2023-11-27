import React from 'react'



const ContentSingle = [
    {
        headigsingle: 'Creative Collaboration',
        parasingle: 'Communication creates clarity. At Innovapixels, our relationships are partnerships, with a common goal of engineering success through well-planned and well-executed strategies.',
    },
    {
        headigsingle: 'Alignment & Execution',
        parasingle: 'Organization is the key to operating a deadline and results-driven environment. Innovapixels utilizes a variety of tools to achieve goals and enhance transparency.',
    },
    {
        headigsingle: 'Financial Intelligence',
        parasingle: 'Everything we touch has financial implications— whether cost savings, improving margins, or generating new revenue streams. We’re not only aware of these considerations, we’re bound by them.',
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