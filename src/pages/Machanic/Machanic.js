import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@mui/material';
import Select from 'react-select';
import MechanicCard from './MechanicCard';
import axios from 'axios';

const Machanic = () => {

    const options = [
        { value: 'east', label: 'East' },
        { value: 'south', label: 'South' },
        { value: 'west', label: 'West' },
        { value: 'central', label: 'Central' }
    ]
    const customStyles = {
        control: (provided, state) => ({
            ...provided,
            borderColor: state.isFocused ? 'var(--orange)' : 'var(--orange)',
            '&:hover': {
                borderColor: state.isFocused ? 'var(--orange)' : 'var(--orange)',
            }
        }),
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'var(--orange)' : 'white',
            color: state.isFocused ? 'black' : 'inherit',
        }),
    };

    const [avatar, setAvatar] = useState([]);
    const [name, setName] = useState([]);
    const [phoneNumber, setPhoneNumber] = useState([]);
    const [service, setService] = useState([]);
    const [locationData, setLocationData] = useState([]);
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/user?location=Karachi%20South&neededService=car%20mechanic')
            .then(response => {
                console.log(response.data);
                setData(response.data)
                const fetchedAvatar = response.data.map(item => item.avatar);
                const fetchedName = response.data.map(item => item.name);
                const fetchedPhoneNumber = response.data.map(item => item.phoneNumber);
                const fetchedService = response.data.map(item => item.service);
                const fetchedLocation = response.data.map(item => item.location);

                setAvatar(fetchedAvatar);
                setName(fetchedName);
                setPhoneNumber(fetchedPhoneNumber);
                setService(fetchedService);
                setLocationData(fetchedLocation);
                console.log(fetchedAvatar);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            <section className='backgroundOne'>
                <Container maxWidth={'lg'}>
                    <Grid pt={18} pb={12} sx={{ zIndex: '1', position: 'relative' }} container maxWidth={'lg'} rowSpacing={3} columnSpacing={3} >
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h2 style={{ textAlign: 'center' }}>Search For Mechanic</h2>
                        </Grid>
                        <Grid container columnSpacing={3}>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div style={{ width: '100%', fontSize: "2rem", height: "7rem" }} className="searchBar">
                                    <Select styles={customStyles} options={options} />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                <div style={{ width: '100%', fontSize: "2rem", height: "7rem" }} className="searchBar">
                                    <Select styles={customStyles} options={options} />
                                </div>
                            </Grid>
                        </Grid>


                        {data.map((mechanic, index) => (

                            <MechanicCard
                                key={index}
                                avatar={mechanic.avatar}
                                name={mechanic.name}
                                service={mechanic.service}
                                phoneNumber={mechanic.phoneNumber}
                                locationData={mechanic.location}
                            />


                        ))}
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Machanic
