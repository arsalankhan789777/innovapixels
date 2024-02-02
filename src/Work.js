import React, { useState, useEffect } from 'react';
import shopify1 from './components/images/images-carousel/LiveWell.PNG';
import shopify2 from './components/images/images-carousel/NeoCharge.PNG';
import wordpress1 from './components/images/images-carousel/Alfan.png';
import wix1 from './components/images/images-carousel/quest-films.jpg';

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

  const handleActiveTabChangeStages = (id) => {
    setActiveTabStages(id);
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
    // Add more stages as needed
  ];

  // Dynamically populate "All Works" tab content based on other tabs
  stages[0].content = stages
    .slice(1) // Exclude the "All Works" tab itself
    .flatMap((tab) => tab.content);

  const tabs = stages;
  const activeTab = activeTabStages;

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
                  tab.content.map((anchor, index) => (
                    <a key={index} href={anchor.link} className="content-anchor">
                      <img src={anchor.image} alt={`img-${index}`} />
                      <div className='content-dis'>
                        <p>{anchor.heading}</p>
                        <span>{anchor.text} <div class="svg svg--arrow button-svg_arrow"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-long-arrow-right fa-w-14" data-icon="long-arrow-right" data-prefix="fal" viewBox="0 0 448 512">
                          <path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                        </svg>
                        </div></span>
                      </div>
                    </a>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactTabs;
