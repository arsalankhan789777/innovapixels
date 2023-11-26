import React, { useState, useEffect } from 'react';
import imagetab1_1 from './components/images/images-carousel/LiveWell.PNG';
import imagetab1_2 from './components/images/images-carousel/NeoCharge.PNG';
import imagetab1_3 from './components/images/images-carousel/Alfan.png';

function TabSet({ title, tabs, activeTab, updateActiveTab }) {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled((prevToggled) => !prevToggled);
  };

  useEffect(() => {
    document.body.classList.add('home-page-body');
    return () => {
      document.body.classList.remove('home-page-body');
    };
  }, []);

  return (
    <div>
      <h2 className={isToggled ? 'arrow-top' : ''} onClick={handleToggle}>
        {title}
        <div className="svg svg--chevron-down sidebar-filter__cat__arrow">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="svg-inline--fa fa-chevron-down fa-w-14" data-icon="chevron-down" data-prefix="fas" viewBox="0 0 448 512">
            <path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path>
          </svg>
        </div>
      </h2>
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
  const [activeTabServices, setActiveTabServices] = useState(0);

  const handleActiveTabChangeStages = (id) => {
    setActiveTabStages(id);
    setActiveTabServices(0);
  };

  const handleActiveTabChangeServices = (id) => {
    setActiveTabServices(id);
    setActiveTabStages(0);
  };

  const stages = [
    {
      id: 0,
      content: [
        {
          image: imagetab1_1,
          text: 'Stage 0 Content 1',
          link: '/custom-link-1'
        },
        {
          image: imagetab1_2,
          text: 'Stage 0 Content 2',
          link: '/custom-link-2'
        }
      ]
    },
    {
      id: 1,
      label: 'Enterprise',
      content: [
        {
          link: '/custom-link-3',
          image: imagetab1_1,
          heading: 'Crayola',
          text: 'View Work',
        },
        {
          link: '/custom-link-4',
          image: imagetab1_2,
          heading: 'Axonius',
          text: 'work',
        },
        { 
          link: '/custom-link-4',
          image: imagetab1_3,
          heading: 'The Cashmere Sale',
          text: 'work',
        },
      ]
    },
    {
      id: 2,
      label: 'Established',
      content: [
        {
          image: imagetab1_2,
          text: 'Established Content 1',
          link: '/custom-link-4'
        },
        {
          image: imagetab1_1,
          text: 'Established Content 2',
          link: '/custom-link-5'
        }
      ]
    },
  ];

  const services = [
    {
      id: 0,
    },
    {
      id: 1,
      label: 'Service 1',
      content: [
        {
          image: imagetab1_1,
          text: 'Service 1 Content 1',
          link: '/custom-link-5'
        }
      ]
    },
  ];

  const tabs = activeTabServices === 0 ? stages : services;
  const activeTab = activeTabServices === 0 ? activeTabStages : activeTabServices;

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
            <div className="inner-tab-left-main">
              <TabSet
                title="SERVICES"
                tabs={services}
                activeTab={activeTabServices}
                updateActiveTab={handleActiveTabChangeServices}
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
