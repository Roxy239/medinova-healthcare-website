import React from 'react';

import doctor1 from '../../../../src/images/doctors/doctor-1.jpg';
import doctor2 from '../../../images/doctors/doctor-2.jpg';
import doctor3 from '../../../images/doctors/doctor-3.jpg';
import doctor4 from '../../../images/doctors/doctor-4.jpg';



import Expert from '../Expert/Expert';




const experts = [
    {
        img: doctor1,
        name: 'Benjamin Pavard',
        expertize: '-Pathology Lab-'
    },
    {
        img: doctor2,
        name: 'Antoin Greizman',
        expertize: '-Cradiac Lab-'
    },
    {
        img: doctor3,
        name: 'Shirin Sultana',
        expertize: '-Colonoscopy Lab-'
    },
    {
        img: doctor4,
        name: 'Tanim Zara',
        expertize: '-Immunology Lab-'
    },
]

const Experts = () => {
    return (
        <div id='experts' className="container">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;