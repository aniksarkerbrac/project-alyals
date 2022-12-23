import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import product1 from '../../images/product1.jpg';
import product2 from '../../images/product2.jpg';
import product3 from '../../images/product3.png';
import product4 from '../../images/product4.jpg';


const fakedata = [
    {
        title: 'NSX002',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        img: product1,
        location: 'chittagong',
        price: '5000',
        days: '5',
        date: 'September 10,2021'
    },
    {
        title: 'NSX003',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        img: product2,
        location: 'chittagong',
        price: '6000',
        days: '5',
        date: 'September 10,2021'
    },
    {
        title: 'NSX025',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        img: product3,
        location: 'chittagong',
        price: '8000',
        days: '5',
        date: 'September 10,2021'
    },
    {
        title: 'Air Max',
        description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
        img: product4,
        location: 'chittagong',
        price: '8000',
        days: '5',
        date: 'September 10,2021'
    }
]

const Card = (props) => {
    
    return (
        <section className="tour-package my-5 py-1">
            <div className="text-center">
                <h3>{props.type}</h3>
                {/* <h2>Popular Tour Package</h2> */}
            </div>
            <div className="d-flex justify-content-center mt-5">
                <div className="row">
                    {
                        fakedata.map(data => <ProductCard package={data}></ProductCard>)
                    }
                </div>
            </div>

        </section>   
    );
};

export default Card;