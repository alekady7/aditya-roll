import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div>
        <div className='footer-comps'>
            <div>
                <div className='footer-wrapper'>
                    <div className='footer-top'>
                        <div className='sections'>
                            {/* 1st section */}
                            <div className='footer-section'>
                                <h4 className='section-title'>Navigation</h4>
                                <ul className='list'>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsepopular'>
                                            <span className='link-text'>
                                                Browse Popular
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsesimulcast'>
                                            <span className='link-text'>
                                                Browse Simulcasts
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsemanga'>
                                            <span className='link-text'>
                                                Browse Manga
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/releasecal'>
                                            <span className='link-text'>
                                                Release Calendar
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/news'>
                                            <span className='link-text'>
                                                News
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/games'>
                                            <span className='link-text'>
                                                Games
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* 2nd section */}
                            <div className='footer-section'>
                            <h4 className='section-title'>Connect With Us</h4>
                                <ul className='list'>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsepopular'>
                                            <span className='link-text'>
                                            <svg className='text-logo' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
                                                Youtube
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsesimulcast'>
                                            <span className='link-text'>
                                            <svg className='text-logo'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"/></svg>
                                                Facebook
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsemanga'>
                                            <span className='link-text'>
                                            <svg className='text-logo'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/></svg>
                                                Twitter
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/releasecal'>
                                            <span className='link-text'>
                                            <svg className='text-logo'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                                                Instagram
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/news'>
                                            <span className='link-text'>
                                            <svg className='text-logo'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/></svg>
                                                Tiktok
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* 3rd section */}
                            <div className='footer-section'>
                                <h4 className='section-title'>Crunchyroll</h4>
                                <ul className='list'>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsepopular'>
                                            <span className='link-text-special'>
                                            <svg className='crown' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 24l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg>
                                                Start a Free Trial
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsesimulcast'>
                                            <span className='link-text'>
                                                About
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsemanga'>
                                            <span className='link-text'>
                                                Help/FAQ
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/releasecal'>
                                            <span className='link-text'>
                                                Terms of Use
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/news'>
                                            <span className='link-text'>
                                                Privacy Policy
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/games'>
                                            <span className='link-text'>
                                                AdChoices
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/games'>
                                            <span className='link-text'>
                                                Your Privacy Choices
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/games'>
                                            <span className='link-text'>
                                                Cookie Consent Tool
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/games'>
                                            <span className='link-text'>
                                                Press Inquiries
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/games'>
                                            <span className='link-text'>
                                                Get the Apps
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/games'>
                                            <span className='link-text'>
                                                Redeem Gift Card
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/games'>
                                            <span className='link-text'>
                                                Jobs
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            {/* 4th section */}
                            <div className='footer-section'>
                                <h4 className='section-title'>Account</h4>
                                <ul className='list'>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsepopular'>
                                            <span className='link-text'>
                                                Create Account
                                            </span>
                                        </a>
                                    </li>
                                    <li className='footer-item'>
                                        <a className='footer-inner-links' href='/Browsesimulcast'>
                                            <span className='link-text'>
                                                Log In
                                            </span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='footer-bottom'>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer