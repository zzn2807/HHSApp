
import "../css/Page.css"
function Survey() {
    return (
        <div className="content">
            <h1>Client Satisfaction Survey</h1>
            <form>
                <ol>
                    <h2>Section 1: General Information <i>(Optional)</i></h2>
                    <div className="form-div">
                        <label for="client_name">Client Name:</label>
                        <input type="text" id="client_name" name="Client Name:"></input>
                    </div>
                    <div className="form-div">
                        <label for="date">Date:</label>
                        <input type="date" id="date" name="Date:"></input>
                    </div>
                    <div className="form-div">
                        <label for="therapist">Therapist/Clinician (if applicable):</label>
                        <input type="text" id="therapist" name="Therapist/Clinician (if applicable):"></input>
                    </div>
                    <h2>Section 2: Service Experience</h2>
                    <p>Please check the box that best describes your experience.</p>

                    <div className="form-div">
                        <label><li>It was easy to schedule my appointments.</li></label>
                        <div className="flex-row radio-div">
                            <input id="q1_sa" type="radio" name="It was easy to schedule my appointments:" value="Strongly Agree" />
                            <label for="q1_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q1_a" type="radio" name="It was easy to schedule my appointments:" value="Agree" />
                            <label for="q1_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q1_n" type="radio" name="It was easy to schedule my appointments:" value="Neutral" />
                            <label for="q1_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q1_d" type="radio" name="It was easy to schedule my appointments:" value="Disagree" />
                            <label for="q1_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q1_sd" type="radio" name="It was easy to schedule my appointments:" value="Strongly Disagree" />
                            <label for="q1_sd">Strongly Disagree</label>
                        </div>
                    </div>

                    <div className="form-div">
                        <label><li>The clinic's location and hours are convenient.</li></label>
                        <div className="flex-row radio-div">
                            <input id="q2_sa" type="radio" name="The clinic's location and hours are convenient: " value="Strongly Agree" />
                            <label for="q2_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q2_a" type="radio" name="The clinic's location and hours are convenient: " value="Agree" />
                            <label for="q2_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q2_n" type="radio" name="The clinic's location and hours are convenient: " value="Neutral" />
                            <label for="q2_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q2_d" type="radio" name="The clinic's location and hours are convenient: " value="Disagree" />
                            <label for="q2_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q2_sd" type="radio" name="The clinic's location and hours are convenient: " value="Strongly Disagree" />
                            <label for="q2_sd">Strongly Disagree</label>
                        </div>
                    </div> 

                    <div className="form-div">
                        <label><li>The front desk staff were respectful and helpful: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q3_sa" type="radio" name="The front desk staff were respectful and helpful:" value="Strongly Agree" />
                            <label for="q3_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q3_a" type="radio" name="The front desk staff were respectful and helpful:" value="Agree" />
                            <label for="q3_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q3_n" type="radio" name="The front desk staff were respectful and helpful:" value="Neutral" />
                            <label for="q3_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q3_d" type="radio" name="The front desk staff were respectful and helpful:" value="Disagree" />
                            <label for="q3_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q3_sd" type="radio" name="The front desk staff were respectful and helpful:" value="Strongly Disagree" />
                            <label for="q3_sd">Strongly Disagree</label>
                        </div>
                    </div> 

                    <div className="form-div">
                        <label><li>My therapist/clinician listens carefully to my concerns: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q4_sa" type="radio" name="My therapist/clinician listens carefully to my concerns: " value="Strongly Agree" />
                            <label for="q4_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q4_a" type="radio" name="My therapist/clinician listens carefully to my concerns: " value="Agree" />
                            <label for="q4_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q4_n" type="radio" name="My therapist/clinician listens carefully to my concerns: " value="Neutral" />
                            <label for="q4_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q4_d" type="radio" name="My therapist/clinician listens carefully to my concerns: " value="Disagree" />
                            <label for="q4_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q4_sd" type="radio" name="My therapist/clinician listens carefully to my concerns: " value="Strongly Disagree" />
                            <label for="q4_sd">Strongly Disagree</label>
                        </div>
                    </div> 

                    <div className="form-div">
                        <label><li>I feel comfortable and safe during my sessions: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q5_sa" type="radio" name="I feel comfortable and safe during my sessions: " value="Strongly Agree" />
                            <label for="q5_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q5_a" type="radio" name="I feel comfortable and safe during my sessions: " value="Agree" />
                            <label for="q5_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q5_n" type="radio" name="I feel comfortable and safe during my sessions: " value="Neutral" />
                            <label for="q5_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q5_d" type="radio" name="I feel comfortable and safe during my sessions: " value="Disagree" />
                            <label for="q5_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q5_sd" type="radio" name="I feel comfortable and safe during my sessions: " value="Strongly Disagree" />
                            <label for="q5_sd">Strongly Disagree</label>
                        </div>
                    </div> 

                    <div className="form-div">
                        <label><li>My therapist/clinician includes me in decisions about my treatment: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q6_sa" type="radio" name="My therapist/clinician includes me in decisions about my treatment: " value="Strongly Agree" />
                            <label for="q6_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q6_a" type="radio" name="My therapist/clinician includes me in decisions about my treatment: " value="Agree" />
                            <label for="q6_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q6_n" type="radio" name="My therapist/clinician includes me in decisions about my treatment: " value="Neutral" />
                            <label for="q6_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q6_d" type="radio" name="My therapist/clinician includes me in decisions about my treatment: " value="Disagree" />
                            <label for="q6_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q6_sd" type="radio" name="My therapist/clinician includes me in decisions about my treatment: " value="Strongly Disagree" />
                            <label for="q6_sd">Strongly Disagree</label>
                        </div>
                    </div> 

                    <div className="form-div">
                        <label><li>The services I receive are helping me reach my goals: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q7_sa" type="radio" name="The services I receive are helping me reach my goals: " value="Strongly Agree" />
                            <label for="q7_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q7_a" type="radio" name="The services I receive are helping me reach my goals: " value="Agree" />
                            <label for="q7_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q7_n" type="radio" name="The services I receive are helping me reach my goals: " value="Neutral" />
                            <label for="q7_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q7_d" type="radio" name="The services I receive are helping me reach my goals: " value="Disagree" />
                            <label for="q7_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q7_sd" type="radio" name="The services I receive are helping me reach my goals: " value="Strongly Disagree" />
                            <label for="q7_sd">Strongly Disagree</label>
                        </div>
                    </div> 

                    <div className="form-div">
                        <label><li>I am satisfied with the overall quality of care: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q8_sa" type="radio" name="I am satisfied with the overall quality of care: " value="Strongly Agree" />
                            <label for="q8_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q8_a" type="radio" name="I am satisfied with the overall quality of care: " value="Agree" />
                            <label for="q8_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q8_n" type="radio" name="I am satisfied with the overall quality of care: " value="Neutral" />
                            <label for="q8_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q8_d" type="radio" name="I am satisfied with the overall quality of care: " value="Disagree" />
                            <label for="q8_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q8_sd" type="radio" name="I am satisfied with the overall quality of care: " value="Strongly Disagree" />
                            <label for="q8_sd">Strongly Disagree</label>
                        </div>
                    </div>

                    <div className="form-div">
                        <label><li>I would recommend Hope Health Systems to others: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q9_sa" type="radio" name="I would recommend Hope Health Systems to others: " value="Strongly Agree" />
                            <label for="q9_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q9_a" type="radio" name="I would recommend Hope Health Systems to others: " value="Agree" />
                            <label for="q9_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q9_n" type="radio" name="I would recommend Hope Health Systems to others: " value="Neutral" />
                            <label for="q9_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q9_d" type="radio" name="I would recommend Hope Health Systems to others: " value="Disagree" />
                            <label for="q9_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q9_sd" type="radio" name="I would recommend Hope Health Systems to others: " value="Strongly Disagree" />
                            <label for="q9_sd">Strongly Disagree</label>
                        </div>
                    </div> 

                    <h2>Section 3: Communication and Environment</h2>

                    <div className="form-div">
                        <label><li>I am informed about my rights and confidentiality: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q10_sa" type="radio" name="I am informed about my rights and confidentiality: " value="Strongly Agree" />
                            <label for="q10_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q10_a" type="radio" name="I am informed about my rights and confidentiality: " value="Agree" />
                            <label for="q10_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q10_n" type="radio" name="I am informed about my rights and confidentiality: " value="Neutral" />
                            <label for="q10_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q10_d" type="radio" name="I am informed about my rights and confidentiality: " value="Disagree" />
                            <label for="q10_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q10_sd" type="radio" name="I am informed about my rights and confidentiality: " value="Strongly Disagree" />
                            <label for="q10_sd">Strongly Disagree</label>
                        </div>
                    </div> 

                    <div className="form-div">
                        <label><li>The clinic environment is clean, welcoming, and comfortable: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q11_sa" type="radio" name="The clinic environment is clean, welcoming, and comfortable: " value="Strongly Agree" />
                            <label for="q11_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q11_a" type="radio" name="The clinic environment is clean, welcoming, and comfortable: " value="Agree" />
                            <label for="q11_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q11_n" type="radio" name="The clinic environment is clean, welcoming, and comfortable: " value="Neutral" />
                            <label for="q11_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q11_d" type="radio" name="The clinic environment is clean, welcoming, and comfortable: " value="Disagree" />
                            <label for="q11_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q11_sd" type="radio" name="The clinic environment is clean, welcoming, and comfortable: " value="Strongly Disagree" />
                            <label for="q11_sd">Strongly Disagree</label>
                        </div>
                    </div> 

                    <div className="form-div">
                        <label><li>Staff respond promptly when I call or email the office: </li></label>
                        <div className="flex-row radio-div">
                            <input id="q12_sa" type="radio" name="Staff respond promptly when I call or email the office: " value="Strongly Agree" />
                            <label for="q12_sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q12_a" type="radio" name="Staff respond promptly when I call or email the office: " value="Agree" />
                            <label for="q12_a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q12_n" type="radio" name="Staff respond promptly when I call or email the office: " value="Neutral" />
                            <label for="q12_n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q12_d" type="radio" name="Staff respond promptly when I call or email the office: " value="Disagree" />
                            <label for="q12_d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q12_sd" type="radio" name="Staff respond promptly when I call or email the office: " value="Strongly Disagree" />
                            <label for="q12_sd">Strongly Disagree</label>
                        </div>
                    </div> 
                    
                    <h2>Section 4: Open-Ended Questions</h2>
                    
                    <div className="form-div">
                        <label for="q13_ans"><li>What do you like most about the services you receive at Hope Health Systems?</li></label>
                        <input type="textarea" id="q13_ans" name="What do you like most about the services you receive at Hope Health Systems?"></input>
                    </div>

                    <div className="form-div">
                        <label for="q14_ans"><li>Do you have any suggestions for how we can better meet your needs?</li></label>
                        <input type="textarea" id="q14_ans" name="Do you have any suggestions for how we can better meet your needs?"></input>
                    </div>

                    <h2>Section 5: Overall Satisfaction</h2>

                    <div className="form-div">
                        <label><li>How would you rate your overall experience at Hope Health Systems? </li></label>
                        <div className="flex-row radio-div">
                            <input id="q15_exc" type="radio" name="How would you rate your overall experience at Hope Health Systems? " value="Excellent" />
                            <label for="q15_exc">Excellent</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q15_good" type="radio" name="How would you rate your overall experience at Hope Health Systems? " value="Good" />
                            <label for="q15_good">Good</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q15_fair" type="radio" name="How would you rate your overall experience at Hope Health Systems? " value="Fair" />
                            <label for="q15_fair">Fair</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q15_poor" type="radio" name="How would you rate your overall experience at Hope Health Systems? " value="Poor" />
                            <label for="q15_poor">Poor</label>
                        </div>
                    </div> 

                    <div className="form-div">
                        <label><li>Would you return for services in the future if needed?</li></label>
                        <div className="flex-row radio-div">
                            <input id="q16_yes" type="radio" name="Would you return for services in the future if needed?" value="Yes" />
                            <label for="q16_yes">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q16_no" type="radio" name="Would you return for services in the future if needed?" value="No" />
                            <label for="q16_no">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="q16_unsure" type="radio" name="Would you return for services in the future if needed?" value="Unsure" />
                            <label for="q16_unsure">Neutral</label>
                        </div>
                    </div> 
                    {/* 
                    <div className="form-div">
                        <label><li></li></label>
                        <div className="flex-row radio-div">
                            <input id="sa" type="radio" name="" value="Strongly Agree" />
                            <label for="sa">Strongly Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="a" type="radio" name="" value="Agree" />
                            <label for="a">Agree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="n" type="radio" name="" value="Neutral" />
                            <label for="n">Neutral</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="d" type="radio" name="" value="Disagree" />
                            <label for="d">Disagree</label>
                        </div>
                        <div className="flex-row radio-div">
                            <input id="sd" type="radio" name="" value="Strongly Disagree" />
                            <label for="sd">Strongly Disagree</label>
                        </div>
                    </div> 
                    */}
                </ol>
                <button className="form-submit">Submit</button>
            </form>
        </div>
    )
}

export default Survey;