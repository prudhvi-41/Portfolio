import React from 'react';
import "./qualification.css";

const Qualification = () => {
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button button--flex qualification__active">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div className="qualification__button button--flex qualification__active">
                        <i className="uil uil-briefcase-alt qualification__icon"></i>
                        Experience
                    </div>
                </div>

                <div className="qualification__sections">
                    <div className="qualification__content qualification__content-active">
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Bachelors</h3>
                                <span className="qualification__subtitle">NIT Delhi (CGPA: 7.17)</span>
                                
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2021 - Present
                                </div>
                                <span className="qualification__subtitle"></span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">12th Class</h3>
                                <span className="qualification__subtitle">Narayana Junior College (Percentage: 97%)</span>
                                
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2019 - 2021
                                </div>
                                <span className="qualification__subtitle"></span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">10th Class</h3>
                                <span className="qualification__subtitle">Kennedy EM High School (GPA: 10)</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    2016 - 2019
                                </div>
                                <span className="qualification__subtitle"></span>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>
                        </div>
                    </div>

                    <div className="qualification__content qualification__content-active">


                        <div className="qualification__data">
                        <div></div> 

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Algotrack</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    July - September 2023
                                </div>

                      
                                  
                            </div>  
                             
                            <div></div>
                            <div></div>
                            
                        </div>    
                          
                        <div className="qualification__data">
                        <div></div> 
                             

                            <div>
                                <span className="qualification__rounder"></span>
                                <div className="qualification__line"></div>
                            </div>

                            <div>
                                <h3 className="qualification__title">Web Developer</h3>
                                <span className="qualification__subtitle">Encryptix</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i>
                                    June - July 2024
                                </div>

                      
                                  
                            </div>  
                             
                            
                        </div>    

                    </div>
                </div>
            </div>
        </section>
    );
}

export default Qualification;
