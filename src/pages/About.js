import React from 'react';

const About = ( {match} ) => {
    return ( 
        <div>
            <h1>About {match.params.name}</h1>
        </div>
     );
}
 
export default About;