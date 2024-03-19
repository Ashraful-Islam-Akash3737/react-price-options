// import React from 'react';
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Bronze Membership",
            "price": 19.99,
            "features": [
                "Access to cardio equipment",
                "Access to weightlifting area",
                "Locker room access"
            ]
        },
        {
            "id": 2,
            "name": "Silver Membership",
            "price": 39.99,
            "features": [
                "Access to all Bronze features",
                "Group fitness classes",
                "Access to sauna and steam room",
                "Towel service"
            ]
        },
        {
            "id": 4,
            "name": "Platinum Membership",
            "price": 99.99,
            "features": [
                "Access to all Gold features",
                "Unlimited group fitness classes",
                "Nutritional counseling session per month",
                "Priority booking for facilities"
            ]
        }
    ];



    return (
        <div className="p-6 md:p-12 mx-auto">
            <h2 className="text-5xl font-semibold text-center mb-5">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-between">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;