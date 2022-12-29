import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const About = () => {
    const {user}= useContext(AuthContext)
    return (
        <section>
            
        </section>
    );
};

export default About;