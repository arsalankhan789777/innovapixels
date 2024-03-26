// import VideoCarousel from "./components/VideoCarousel";
import CarouselS3 from "./components/carousel";
import Contacts4 from "./components/contact";
import Brands from "./components/Brands";
import HomeHero from "./components/HomeHero";
import { ClientFeedback } from "./components/ClientFeedback";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";






const bggcontact1 = [
  {
    background: `url(${process.env.PUBLIC_URL}/images/bg-img.png)`,
  },
];

const Home = () => {


  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []); // Empty dependency array ensures this effect runs only on mount

 

  return (
    <wrapper>
      {/* <VideoCarousel /> */}
      < HomeHero />
      <div className="section2">
        <div className="container-max">
          <div className="left-sec-2">
            <div className="h4-sec-2">
              <h2>
                For a decade, Innovapixels has consistently delivered influential work,
                <strong>
                  empowering both Businesses and global influencers.
                </strong>
              </h2>
            </div>
            <div className="p-sec-2">
              <p>
                Our core strategic engagements in branding, platform design, platform development, and search engine optimization consistently drive desired outcomes and awareness.
              </p>
            </div>
            <div class="button-content z2">
              <Link to="" className="b8 z2">See Who We Are</Link>
              <div class="svg svg--arrow button-svg_arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  class="svg-inline--fa fa-long-arrow-right fa-w-14"
                  data-icon="long-arrow-right"
                  data-prefix="fal"
                  viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z"></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="right-sec-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              viewBox="0 0 51 51"
              fill="yellow">
              <g clip-path="url(#clip0_4_286)">
                <path
                  d="M50 21.3999H0"
                  stroke="#ff8300"
                  stroke-opacity="0.1"
                  stroke-width="0.2"
                />
                <path
                  d="M50 29H0"
                  stroke="#ff8300"
                  stroke-opacity="0.1"
                  stroke-width="0.2"
                />
                <path
                  d="M25 2V49"
                  stroke="#ff8300"
                  stroke-opacity="0.1"
                  stroke-width="0.2"
                />
                <path
                  d="M17.5 2V49"
                  stroke="#ff8300"
                  stroke-opacity="0.1"
                  stroke-width="0.2"
                />
                <path
                  d="M33.8 2V49"
                  stroke="#ff8300"
                  stroke-opacity="0.1"
                  stroke-width="0.2"
                />
                <path
                  d="M41.7 2V49"
                  stroke="#ff8300"
                  stroke-opacity="0.1"
                  stroke-width="0.2"
                />
                <path
                  d="M8.90015 2V49"
                  stroke="#ff8300"
                  stroke-opacity="0.1"
                  stroke-width="0.2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.34995 10.85H10H35.8857L34.5795 9.08943L34.8205 8.91068L36.2593 10.85H36.3275H41.85V0H42.15V10.85H49.3V11.15H42.15V18.7897L46.2499 24.3158L46.8128 23.9081L46.9913 25.6309L45.4101 24.9241L46.007 24.4918L42.15 19.2932V36.85H50.5V37.15H42.15V48.866H42.8999L42.0339 50.366L41.1679 48.866H41.85V37.15H17.15V48.8211H17.8501L16.9841 50.3211L16.118 48.8211H16.85V37.1563L9.3499 41.3709L9.34994 48.8211H10.05L9.18402 50.3211L8.318 48.8211H9.04995V41.5395V41.2831L9.0499 41L9.04995 37.15H1.60003V36.85C1.60647 35.8821 1.80046 34.9244 2.171 34.0298C2.54791 33.1198 3.10036 32.293 3.7968 31.5966C4.49324 30.9002 5.32003 30.3477 6.22997 29.9708C7.12447 29.6003 8.08209 29.4065 9.04995 29.4001V11.15H0V10.85H9.04995V0H9.34995V6H16.75H17.05V6.3V8.7V9H16.75H9.35005L9.34995 10.85ZM41.85 36.85H17.15V35V28.15H35.2547H35.3291L35.3741 28.0908L41.85 19.5764V36.85ZM9.34995 41.0268L16.2489 37.15H9.34995V41.0268ZM36.5468 11.15H41.85V18.3854L40.9217 17.1342L36.5468 11.15ZM40.6803 17.3123L41.85 18.9123V19.0808L35.1803 27.85H17H16.85V28V36.8122L16.7827 36.85H9.34995V11.15H10H36H36.1083L40.6803 17.3123ZM9.04995 36.85H1.88895C1.89538 35.92 2.08167 34.9998 2.4377 34.1402C2.8001 33.2653 3.33129 32.4704 4.00092 31.8007C4.67055 31.1311 5.46552 30.5999 6.34044 30.2375C7.19992 29.8815 8.12 29.6952 9.04995 29.6888V36.85ZM24.3913 1.97159C24.4647 2.00379 24.5483 2.01989 24.642 2.01989C24.7363 2.01989 24.8203 2.00189 24.8942 1.96591C24.968 1.92992 25.0263 1.88068 25.0689 1.81818C25.112 1.75521 25.1335 1.68419 25.1335 1.60511C25.1335 1.51278 25.1077 1.43537 25.0561 1.37287C25.0045 1.3099 24.9328 1.27083 24.8409 1.25568V1.24432C24.9143 1.22206 24.9723 1.18205 25.0149 1.12429C25.058 1.06652 25.0795 0.996686 25.0795 0.914773C25.0795 0.846117 25.0623 0.782197 25.0277 0.723011C24.9931 0.663826 24.9437 0.61624 24.8793 0.580256C24.8149 0.543797 24.7377 0.525568 24.6477 0.525568C24.5639 0.525568 24.487 0.541667 24.4169 0.573864C24.3473 0.606061 24.291 0.651042 24.2479 0.708807C24.2048 0.766098 24.1818 0.83286 24.179 0.909091H24.3494C24.3518 0.860795 24.367 0.819602 24.3949 0.785511C24.4228 0.750947 24.4588 0.724669 24.5028 0.706676C24.5473 0.68821 24.5947 0.678977 24.6449 0.678977C24.6984 0.678977 24.7448 0.689157 24.7841 0.709517C24.8239 0.729877 24.8546 0.758286 24.8764 0.794744C24.8982 0.831203 24.9091 0.874053 24.9091 0.923295C24.9091 0.974432 24.8965 1.01894 24.8714 1.05682C24.8468 1.0947 24.8125 1.12405 24.7685 1.14489C24.7249 1.16572 24.6742 1.17614 24.6165 1.17614H24.5V1.33239H24.6165C24.6903 1.33239 24.7528 1.34399 24.804 1.36719C24.8551 1.39039 24.8939 1.42259 24.9205 1.46378C24.947 1.5045 24.9602 1.55161 24.9602 1.60511C24.9602 1.65625 24.9465 1.70123 24.919 1.74006C24.8916 1.77888 24.8537 1.80919 24.8054 1.83097C24.7571 1.85275 24.7017 1.86364 24.6392 1.86364C24.5833 1.86364 24.5324 1.8544 24.4865 1.83594C24.4406 1.81747 24.4034 1.79143 24.375 1.75781C24.3466 1.72372 24.3305 1.68324 24.3267 1.63636H24.1477C24.1515 1.71259 24.1747 1.77959 24.2173 1.83736C24.2604 1.89465 24.3184 1.93939 24.3913 1.97159ZM25.6648 1.97159C25.7382 2.00379 25.8217 2.01989 25.9155 2.01989C26.0097 2.01989 26.0938 2.00189 26.1676 1.96591C26.2415 1.92992 26.2997 1.88068 26.3423 1.81818C26.3854 1.75521 26.407 1.68419 26.407 1.60511C26.407 1.51278 26.3812 1.43537 26.3295 1.37287C26.2779 1.3099 26.2062 1.27083 26.1143 1.25568V1.24432C26.1877 1.22206 26.2457 1.18205 26.2884 1.12429C26.3314 1.06652 26.353 0.996686 26.353 0.914773C26.353 0.846117 26.3357 0.782197 26.3011 0.723011C26.2666 0.663826 26.2171 0.61624 26.1527 0.580256C26.0883 0.543797 26.0111 0.525568 25.9212 0.525568C25.8374 0.525568 25.7604 0.541667 25.6903 0.573864C25.6207 0.606061 25.5644 0.651042 25.5213 0.708807C25.4782 0.766098 25.4553 0.83286 25.4524 0.909091H25.6229C25.6252 0.860795 25.6404 0.819602 25.6683 0.785511C25.6963 0.750947 25.7322 0.724669 25.7763 0.706676C25.8208 0.68821 25.8681 0.678977 25.9183 0.678977C25.9718 0.678977 26.0182 0.689157 26.0575 0.709517C26.0973 0.729877 26.1281 0.758286 26.1499 0.794744C26.1716 0.831203 26.1825 0.874053 26.1825 0.923295C26.1825 0.974432 26.17 1.01894 26.1449 1.05682C26.1203 1.0947 26.0859 1.12405 26.0419 1.14489C25.9983 1.16572 25.9477 1.17614 25.8899 1.17614H25.7734V1.33239H25.8899C25.9638 1.33239 26.0263 1.34399 26.0774 1.36719C26.1286 1.39039 26.1674 1.42259 26.1939 1.46378C26.2204 1.5045 26.2337 1.55161 26.2337 1.60511C26.2337 1.65625 26.2199 1.70123 26.1925 1.74006C26.165 1.77888 26.1271 1.80919 26.0788 1.83097C26.0305 1.85275 25.9751 1.86364 25.9126 1.86364C25.8568 1.86364 25.8059 1.8544 25.7599 1.83594C25.714 1.81747 25.6768 1.79143 25.6484 1.75781C25.62 1.72372 25.6039 1.68324 25.6001 1.63636H25.4212C25.425 1.71259 25.4482 1.77959 25.4908 1.83736C25.5339 1.89465 25.5919 1.93939 25.6648 1.97159ZM12.1506 45.8722V46H13.0682V45.8438H12.392V45.8324L12.7188 45.483C12.8021 45.3935 12.8672 45.3177 12.9141 45.2557C12.9614 45.1932 12.9946 45.1366 13.0135 45.0859C13.0329 45.0348 13.0426 44.9825 13.0426 44.929C13.0426 44.8542 13.0239 44.7862 12.9865 44.7251C12.9491 44.6641 12.8975 44.6155 12.8317 44.5795C12.7659 44.5436 12.6903 44.5256 12.6051 44.5256C12.5204 44.5256 12.4439 44.5436 12.3757 44.5795C12.308 44.6155 12.2545 44.6657 12.2152 44.7301C12.1759 44.7945 12.1562 44.8693 12.1562 44.9545H12.3239C12.3239 44.8991 12.335 44.8509 12.3572 44.8097C12.38 44.7685 12.4119 44.7365 12.4531 44.7138C12.4948 44.6906 12.5436 44.679 12.5994 44.679C12.652 44.679 12.6993 44.6892 12.7415 44.7095C12.7836 44.7299 12.8168 44.7588 12.8409 44.7962C12.8655 44.8336 12.8778 44.8778 12.8778 44.929C12.8778 44.9735 12.8688 45.0161 12.8509 45.0568C12.8333 45.0971 12.8063 45.1402 12.7699 45.1861C12.7334 45.2315 12.687 45.285 12.6307 45.3466L12.1506 45.8722ZM13.2962 45.5568V45.7017H13.9808V46H14.1484V45.7017H14.3473V45.5455H14.1484V44.5455H14.0405H13.9808H13.9354L13.2962 45.5568ZM13.9808 44.7699H13.9695L13.4865 45.5341V45.5455H13.9808V44.7699ZM16.85 16.15H17H32H32.0733L32.1184 16.2079L34.2184 18.9079L34.2875 18.9968L34.2214 19.088L32.1214 21.9879L32.0765 22.0499H32H17H16.85V21.9V16.3V16.15ZM17.15 16.45V21.75H31.9234L33.9124 19.0032L31.9266 16.45H17.15ZM6.5 34.6001C6.77614 34.6001 7 34.3762 7 34.1001C7 33.824 6.77614 33.6001 6.5 33.6001C6.22386 33.6001 6 33.824 6 34.1001C6 34.3762 6.22386 34.6001 6.5 34.6001ZM10.025 2.70015H40.975V2.95316L41.5 2.65005L40.975 2.34694V2.60015H10.025V2.34694L9.5 2.65005L10.025 2.95316V2.70015ZM15.8749 43.05H10.1251V43.303L9.6001 42.9999L10.1251 42.6968V42.95H15.8749V42.6968L16.3999 42.9999L15.8749 43.303V43.05ZM9.35005 6.3H16.75V8.7H9.35005V6.3Z"
                  fill="#ff8300"
                />
              </g>
              <defs>
                <clipPath id="clip0_4_286">
                  <rect width="51" height="51" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="section3">
        <CarouselS3 />
      </div>
      <Brands />
      <ClientFeedback />
      <div>
        <Contacts4 contactbg={bggcontact1} />
      </div>
    </wrapper>
  );
};

export default Home;
