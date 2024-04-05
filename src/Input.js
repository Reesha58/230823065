import React, { useState } from "react";

function Input(props) {

    const [name, setName] = useState("Krupali")

    function HandlingInput(e) {
        setName(e.target.value);
    }


    return (
        <>

            <div className="">
                Name : <input type="text" name="name" onChange={(e) => { HandlingInput(e) }} />

            </div>


            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic" }}>
                        {name}
                    </h2>
                    <p style={{ "marginTop": -12, "fontSize": 18 }}>
                        Lead Business Analyst
                    </p>
                    <p style={{ "marginTop": -10 }}>
                        +1-921-389-0182 • name@gmail.com • linkdin.com/in/jonwrightjr • Dallas,TX
                    </p>
                </center>
            </div>
            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Summary
                    </h2>
                    <hr></hr>
                </center>
                <p style={{ "marginTop": -2 }}>
                    A paragraph is defined as “a group of sentences or a single sentence that forms a unit” (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.
                </p>
            </div>
            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Skills
                    </h2>
                    <hr></hr>
                </center>
                <p style={{ "marginTop": -2 }}>
                    Business : Budgeting • Financial Analysis • Project Management •Business Strategy
                </p>
                <p>
                    Technology :  Excel • VBA • SQL • QuickBooks • Power BI • Tableau • Python
                </p>
            </div>
            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Experiance
                    </h2>
                    <hr></hr>
                </center>

                <p style={{ "color": "gray", "fontWeight": "bold", "fontSize": 22, "fontFamily": "simple", "marginTop": 5 }}>
                    Network Solutions LLC
                </p>
                <p style={{ "float": "right", "marginTop": "-45px" }}>
                    Dallas,TX
                </p>
                <h5 style={{ "marginTop": -20 }}>
                    Lead Business Analyst & Project Manager
                </h5>
                <p style={{ "float": "right", "marginTop": "-40px" }}>
                    2019-Ongoing
                </p>
                <p style={{ "marginTop": -15, "color": "black", "fontFamily": "simple", "fontSize": 22 }}>
                </p>
                <div>

                    <ul style={{ "fontSize": 13, "marginLeft": "-30px" }}>
                        <li>
                            Create New Starategies to Mnage $2 million of accounts at risk,resulting in an increase of 4% in revenue in in revenue in 6 months.
                        </li>
                        <li>
                            Led the effort to deploye an automated time 7 expense reporting system for more than 90 onsite and offsite personnel across 3 location.
                        </li>
                        <li>
                            Oversaw the budget and schedual of a project to recruit,hire, and train 150 new employees at five neww location.
                        </li>

                    </ul>
                </div>

            </div>
            <div>

                <h5>
                    Senior Business Analyst
                </h5>
                <p style={{ "float": "right", "marginTop": "-40px" }}>
                    2017-2019
                </p>
                <div>

                    <ul style={{ "fontSize": 13, "marginLeft": "-30px", "marginTop": -15, "color": "black" }}>
                        <li>
                            Through an improved pricing model,increased gross revenue of 15% in 2018 compared to 2017 with no change to fixed costs.
                        </li>
                        <li>
                            Reduced warehouse processing time by 30% in just 3 months while industry norm is 10 months.
                        </li>
                        <li>
                            Acieved project milestone and delivers with an internal and external  team of 10+ Analyst.
                        </li>

                    </ul>
                </div>
            </div>
            <div>
                <p style={{ "color": "gray", "fontWeight": "bold", "fontSize": 22, "fontFamily": "simple", "marginTop": "10px" }}>
                    Lauzon
                </p>
                <p style={{ "float": "right", "marginTop": "-35px" }}>
                    Dallas,TX
                </p>
                <h5 style={{ "marginTop": "-18px" }}>
                    Business Analyst
                </h5>
                <p style={{ "float": "right", "marginTop": -35 }}>
                    2013-2016
                </p>
                <p style={{ "marginTop": -20, "fontSize": 15 }}>
                    Lauzon is a 30-year-old limited company in the printing and packaging field with over 150 employees.
                </p>
                <div>
                    <ul style={{ "fontSize": 13, "marginLeft": "-30px" }}>
                        <li>
                            prepared 2016 Budget with Variance Analysis to prior years.
                        </li>
                        <li>
                            Assisted merger in advanced electronics space,identifying synergy opportunities of $60 M.
                        </li>
                        <li>
                            Reduced IPS(Customer Issues) by 2.2% While impacting merely 3% of GMV.
                        </li>
                        <li>
                            Designed and maintained 10+ data integration jobs.
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Education
                    </h2>
                    <hr></hr>
                </center>
                <p style={{ "color": "gray" }}>
                    University of Wisconsin
                </p>
                <p style={{ "float": "right", "marginTop": "-35px" }}>
                    Wisconsin
                </p>
                <h5 style={{ "marginTop": "-12px" }}>
                    M.Sc in Finance
                </h5>
                <p style={{ "float": "right", "marginTop": "-38px" }}>
                    2012-2013
                </p>

                <p style={{ "color": "gray" }}>
                    University of Wisconsin
                </p>
                <p style={{ "float": "right", "marginTop": "-35px" }}>
                    Wisconsin
                </p>
                <h5 style={{ "marginTop": "-12px" }}>
                    BBA:Business,Supply Chain Management
                </h5>
                <p style={{ "float": "right", "marginTop": "-38px" }}>
                    2008-2012
                </p>
            </div>

            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Courses & Certificates
                    </h2>
                    <hr></hr>
                </center>
                <p style={{ "color": "gray" }}>
                    PMI Professional in Business Analysis(PBA)-<strong>PMI</strong>,2019
                </p>
                <p style={{ "color": "gray" }}>
                    Certified Associate in Project Management(CAPM)-<strong>PMI</strong>,2018
                </p>
                <p style={{ "color": "gray" }}>
                    High-Dimensional Data Analysis-<strong>Harvard</strong>,2017
                </p>
            </div>

            <div>
                <center>
                    <h2 style={{ "fontFamily": "italic", "marginBottom": 9 }}>
                        Interests & Hobbies
                    </h2>
                    <hr></hr>
                </center>
                <div style={{ "display": "flex", "marginRight": "10px" }}>
                    <div style={{ "width": "33.33%" }}>
                        <h4 style={{ "fontFamily": "arial" }}>
                            Giving back to my community
                        </h4>
                        <p style={{ "marginTop": "-15px" }}>
                            with my two kids.I spend at least one day each month volunteering.
                        </p>
                    </div>
                    <div style={{ "width": "33.33%" }}>
                        <h4 style={{ "fontFamily": "arial" }}>
                            Horse-riding & spending time in nature
                        </h4>
                        <p style={{ "marginTop": "-15px" }}>
                            Recharging during the weekend is vital for leading a high-performing team.
                        </p>
                    </div>
                    <div style={{ "width": "33.33%" }}>
                        <h4 style={{ "fontFamily": "arial" }}>
                            Developing my team into star Analysts
                        </h4>
                        <p style={{ "marginTop": "-15px" }}>
                            Not only is it very satisfying,but it is also the highest value-add of any leader.
                        </p>
                    </div>
                </div>
                <div>
                    <p style={{ "float": "left" }}>www.enhancv.com</p>
                    <p style={{ "float": "right" }}>Powered by ♾️ENHANCV</p>
                </div>

            </div>
        </>

    );
}

export default Input;
