import React, { useState, useRef, useEffect } from 'react';

function Useref1() {

    const inputNameRef = useRef("");
    const inputCityRef = useRef("");
    const inputMobileRef = useRef("");
    const inputEmailRef = useRef("");

    const [Name, setName] = useState("Reesha");
    const [City, setCity] = useState("Rajkot");
    const [Mobile, setMobile] = useState("987456662130");
    const [Email, setEmail] = useState("m@g.com");

    function handlesubmit() {
        alert(`Name:${inputNameRef.current.value},City:${inputCityRef.current.value},Mobile no:${inputMobileRef.current.value},Email:${inputEmailRef.current.value}`)
    }
    function click() {
        console.log(`Name:${inputNameRef.current.value},City:${inputCityRef.current.value},Mobile no:${inputMobileRef.current.value},Email:${inputEmailRef.current.value}`)

    }
    // useEffect(() => {
    //     console.log(`Name:${inputNameRef.current.value},City:${inputCityRef.current.value},Mobile no:${inputMobileRef.current.value},Email:${inputEmailRef.current.value}`)
    // }, [setName, setCity, setMobile, setEmail])

    return (
        <>

            <h2>{`${Name},${City},${Mobile},${Email}`}</h2>
            <form onSubmit={handlesubmit}>
                <input type="text" onChange={(e) => setName(e.target.value)} name="Name" ref={inputNameRef} />
                <input type="text" onChange={(e) => setCity(e.target.value)} name="City" ref={inputCityRef} />
                <input type="text" onChange={(e) => setMobile(e.target.value)} name="Mobile" ref={inputMobileRef} />
                <input type="text" onChange={(e) => setEmail(e.target.value)} name="Email" ref={inputEmailRef} />
                <button type="submit" onClick={click}>submit</button>
            </form>

        </>
    );
}
export default Useref1;