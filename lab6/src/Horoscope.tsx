import React, { useState } from 'react';
import logo from './logo.svg';
import TextBox from './Textbox';
// @ts-ignore
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
// @ts-ignore
import axios from 'axios';

function Horoscope() {
    const [sun, setSun] = useState('');
    const [moon, setMoon] = useState('');
    const [rising, setRising] = useState('');
    const [horoscope, setHoroscope] = useState([]);

    const requestHoroscope = () => {
        const toSend = {
            sun: sun,
            moon: moon,
            rising: rising,
        };

        let config = {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };

        axios
            .post('http://localhost:4567/horoscope', toSend, config)
            .then((response) => {
                console.log('Data: ', response.data);
                setHoroscope(response.data['horoscope']);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div>
            <TextBox label={'Sun Sign'} change={setSun} />
            <TextBox label={'Moon Sign'} change={setMoon} />
            <TextBox label={'Rising Sign'} change={setRising} />
            <AwesomeButton onPress={requestHoroscope} />
            {horoscope.map((value) => (
                <div>
                    <text>{value}</text>
                </div>
            ))}
        </div>
    );
}

export default Horoscope;