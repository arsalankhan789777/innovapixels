import React, { useState, useEffect } from 'react';

// Import your image files here
import shopify1 from './components/images/images-carousel/LiveWell.png';
import shopify2 from './components/images/images-carousel/NeoCharge.png';
import shopify3 from './components/images/images-carousel/valorelondon.png';
import shopify4 from './components/images/images-carousel/reskinethos.png';
import shopify5 from './components/images/images-carousel/doubleblackski.png';
import shopify6 from './components/images/images-carousel/virginiabeachcardshop.png';
import shopify7 from './components/images/images-carousel/joeywolffer.png';
import shopify8 from './components/images/images-carousel/lediel.png';
import shopify9 from './components/images/images-carousel/gooditsglutenfree.png';
import shopify10 from './components/images/images-carousel/littlegreenradicals.png';
import shopify11 from './components/images/images-carousel/diabloorganics.png';
import shopify12 from './components/images/images-carousel/openteams.png';
import shopify13 from './components/images/images-carousel/vitaminpatchclub.png';
import shopify14 from './components/images/images-carousel/fossilrealm.png';
import shopify15 from './components/images/images-carousel/domogummies.png';
import wordpress1 from './components/images/images-carousel/Alfan.png';
import wordpress2 from './components/images/images-carousel/calltrackingmetrics.png';
import wordpress3 from './components/images/images-carousel/wisebuilders.org.png';
import wordpress4 from './components/images/images-carousel/jibble.io.png';
import wordpress5 from './components/images/images-carousel/impossiblehq.png';
import wordpress6 from './components/images/images-carousel/emmk.png';
import wordpress7 from './components/images/images-carousel/rosehan.png';
import wordpress8 from './components/images/images-carousel/historicflix.png';
import wix1 from './components/images/images-carousel/quest-films.jpg';
import webflow1 from './components/images/images-carousel/prismaticcapital.png';
import webflow2 from './components/images/images-carousel/moriss.png';
import webflow3 from './components/images/images-carousel/flowresearchcollective.png';
import Squarespace1 from './components/images/images-carousel/meyercenter.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';



function TabSet({ title, tabs, activeTab, updateActiveTab }) {
  const [isToggled] = useState(false);

  useEffect(() => {
    document.body.classList.add('home-page-body');
    return () => {
      document.body.classList.remove('home-page-body');
    };
  }, []);

  return (
    <div>
      <div className={isToggled ? 'hide-tabs-dropdown' : ''}>
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => updateActiveTab(tab.id)}
            className={activeTab === tab.id ? 'highlighted' : 'tabs-single'}
          >
            {tab.label}
          </div>
        ))}
      </div>
    </div>
  );
}

function ReactTabs() {
  const [activeTabStages, setActiveTabStages] = useState(0);
  const [projectsPerPage, setProjectsPerPage] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);

  const handleActiveTabChangeStages = (id) => {
    setActiveTabStages(id);
    setCurrentPage(1); // Reset to the first page when switching tabs
  };

  const handleShowMore = () => {
    setProjectsPerPage((prev) => prev + 2);
  };

  const stages = [
    {
      id: 0,
      label: 'All Works',
      content: [],
    },
    {
      id: 1,
      label: 'Wordpress',
      content: [
        {
          link: 'https://alfangroup.com/',
          heading: 'Alfan Group',
          text: 'View Work',
          image: wordpress1,
        },
        {
          link: 'https://www.calltrackingmetrics.com/',
          heading: 'Call Tracking Metrics',
          text: 'View Work',
          image: wordpress2,
        },
        {
          link: 'https://wisebuilders.org/',
          heading: 'Wise Builders',
          text: 'View Work',
          image: wordpress3,
        },
        {
          link: 'https://www.jibble.io/',
          heading: 'Jibble',
          text: 'View Work',
          image: wordpress4,
        },
        {
          link: 'https://impossiblehq.com/',
          heading: 'PUSH YOUR LIMITS DO SOMETHING IMPOSSIBLE',
          text: 'View Work',
          image: wordpress5,
        },
        {
          link: 'https://emmk.no/',
          heading: 'Emmk Online Shop',
          text: 'View Work',
          image: wordpress6,
        },
        {
          link: 'https://rosehan.com/',
          heading: 'Rose han',
          text: 'View Work',
          image: wordpress7,
        },
        {
          link: 'https://historicflix.com/',
          heading: 'Historic Flix',
          text: 'View Work',
          image: wordpress8,
        },
       
      ],
    },
    {
      id: 2,
      label: 'Shopify',
      content: [
        {
          link: 'https://livewellproject.co.uk/',
          heading: 'Live Well Project',
          text: 'View Work',
          image: shopify1,
        },
        {
          link: 'https://getneocharge.com/',
          heading: 'Get Neo Charge',
          text: 'View Work',
          image: shopify2,
        },
        {
          link: 'https://valorelondon.com/',
          heading: 'Valore London Where Journeys Begin',
          text: 'View Work',
          image: shopify3,
        },
        {
          link: 'https://www.reskinethos.com/',
          heading: 'Skin Ethos',
          text: 'View Work',
          image: shopify4,
        },
        {
          link: 'https://doubleblackski.com/',
          heading: 'Double Black Ski',
          text: 'View Work',
          image: shopify5,
        },
        {
          link: 'https://virginiabeachcardshop.com/',
          heading: 'Virginia Beach Card Shop',
          text: 'View Work',
          image: shopify6,
        },
        {
          link: 'https://joeywolffer.com/',
          heading: 'Joey Wölffer',
          text: 'View Work',
          image: shopify7,
        },
        {
          link: 'https://lediel.com/es-us',
          heading: 'Lediel',
          text: 'View Work',
          image: shopify8,
        },
        {
          link: 'https://gooditsglutenfree.com/',
          heading: 'GREAT TASTING & ALLERGY FREE',
          text: 'View Work',
          image: shopify9,
        },
        {
          link: 'https://littlegreenradicals.com/en-row',
          heading: 'Little Green Radicals',
          text: 'View Work',
          image: shopify10,
        },
        {
          link: 'https://diabloorganics.com/pages/home',
          heading: 'JIMMY BUDDHA DESIGNS',
          text: 'View Work',
          image: shopify11,
        },
        {
          link: 'https://www.openteams.com/',
          heading: 'If You Work With Open Source... You Need OpenTeams',
          text: 'View Work',
          image: shopify12,
        },
        {
          link: 'https://vitaminpatchclub.com/',
          heading: 'Vitamins Made Easy',
          text: 'View Work',
          image: shopify13,
        },
        {
          link: 'https://www.fossilrealm.com/',
          heading: 'Fossil Realm',
          text: 'View Work',
          image: shopify14,
        },
        {
          link: 'https://domogummies.com/',
          heading: 'Ready to reset your sleep?',
          text: 'View Work',
          image: shopify15,
        }
      ],
    },
    {
      id: 3,
      label: 'Wix',
      content: [
        {
          link: 'https://www.quest-films.com/',
          heading: 'Quest-Films',
          text: 'View Work',
          image: wix1,
        },
      ],
    },
    {
      id: 4,
      label: 'Webflow',
      content: [
        {
          link: 'https://www.prismaticcapital.com/',
          heading: 'A cryptoasset investment firm',
          text: 'View Work',
          image: webflow1,
        },
        
        {
          link: 'https://www.amoriss.com/',
          heading: 'Amoriss Love where you live.',
          text: 'View Work',
          image: webflow2,
        },
        {
          link: 'https://www.flowresearchcollective.com/',
          heading: 'THE GLOBAL LEADER IN PEAK PERFORMANCE RESEARCH & TRAINING.',
          text: 'View Work',
          image: webflow3,
        },
      ],
    },
    {
      id: 5,
      label: 'Squarespace',
      content: [
        {
          link: 'https://www.meyercenter.org/',
          heading: 'Meyer Center For Special Children',
          text: 'View Work',
          image: Squarespace1,
        },
        
      ],
    },
    // Add more stages as needed
  ];

    // Dynamically populate "All Works" tab content based on other tabs
    stages[0].content = stages
    .slice(1) // Exclude the "All Works" tab itself
    .flatMap((tab) => tab.content);

  const tabs = stages;
  const activeTab = activeTabStages;

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  return (
    <div className="Section-1-Our-Work">
      <div className="container-max">
        <h2 className="our-work-heading">
          OUR <strong>WORK</strong>
        </h2>
        <div className="main-tabs">
          <div className="only-tabs">
            <div className="inner-tab-left-main">
              <TabSet
                title="STAGES"
                tabs={stages}
                activeTab={activeTabStages}
                updateActiveTab={handleActiveTabChangeStages}
              />
            </div>
          </div>
          <div className="content-main">
            {tabs.map((tab) => (
              <div
                key={tab.id}
                className={activeTab === tab.id ? 'show-content' : 'content'}
              >
                {activeTab === tab.id &&
                  tab.content.slice(startIndex, endIndex).map((anchor, index) => (
                    <a key={index} href={anchor.link} className="content-anchor">
                      {/* <img src={anchor.image} alt={`img-${index}`} /> */}

                      <LazyLoadImage src={anchor.image} effect="blur" alt={`img-${index}`} />
                      <div className='content-dis'>
                        <p>{anchor.heading}</p>
                        <span>
                          {anchor.text}{' '}
                          <div class="svg svg--arrow button-svg_arrow">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              aria-hidden="true"
                              class="svg-inline--fa fa-long-arrow-right fa-w-14"
                              data-icon="long-arrow-right"
                              data-prefix="fal"
                              viewBox="0 0 448 512"
                            >
                              <path
                                fill="currentColor"
                                d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"
                              ></path>
                            </svg>
                          </div>
                        </span>
                      </div>
                    </a>
                  ))}
                {tab.content.length > endIndex && (
                  <div className="show-more-button" onClick={handleShowMore}>
                    Show More
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactTabs;