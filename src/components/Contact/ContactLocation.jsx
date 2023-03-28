import React from 'react';
import Card3 from '../shared/Card/Card3';
import { BsFillPhoneVibrateFill } from "react-icons/bs";

const ContactLocation = () => {
    return (
        <div className="grid md:grid-cols-3 place-items-center gap-2 md:mx-auto">
            <Card3 >{{ title: "CALL", name: "PHONE", data: ["+38 (012) 34 56 789"] }}</Card3>
            <Card3>{{ title: "find", name: "ADDRESS", data: ["+38 (012) 34 56 789"] }}</Card3>
            <Card3>{{ title: "meet", name: "WORKING HOURS", data: ["Mon - Fri: 08:00 - 22:00", "Sat - Sun: 10:00 - 23:00"] }}</Card3>
        </div>
    );
};

export default ContactLocation;