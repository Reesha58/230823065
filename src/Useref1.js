import React, { useState, useRef, useEffect } from 'react';

function Useref1() {

    const inputNameRef = useRef("");
    const inputCityRef = useRef("");
    const inputMobileRef = useRef("");
    const inputEmailRef = useRef("");

    const [Name, setName] = useState("krupali");
    const [City, setCity] = useState("akbari");
    const [Mobile, setMobile] = useState("9874562130");
    const [Email, setEmail] = useState("k@g.com");

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