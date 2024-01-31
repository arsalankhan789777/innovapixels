import React from 'react';
import videotesti from './videos/SalmanTestimonial.mp4'

export const ClientFeedback = () => {
    return (
        <div className='ClientFeedback'>
            <div className="container-max">
                <video controls width="400">
                    <source src={videotesti} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className='content_client'>
                <p>
                    Salman has been working with our team for a few months and has been absolutely incredible. We needed an experienced Shopify developer to make some customized sections within our Shopify theme and Salman has been able to bring all of our ideas to life.
                </p>
                <p>
                    He is extremely communicative and accomplishes every task quickly. When asked, he has also provided some very helpful tutorial videos that we have used to train ourselves for some of the sections that we find ourselves creating multiple times.
                </p>
                <p>
                    We are very lucky to have found Salman after having worked with some less reliable developers in the past. If you are looking for some help on your Shopify store I cannot recommend Salman enough
                </p>
                </div>
            </div>
        </div>
    );
};
