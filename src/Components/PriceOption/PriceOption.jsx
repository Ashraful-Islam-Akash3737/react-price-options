
import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { name, features, price } = option;
    return (
        <div className='bg-blue-500 flex flex-col text-white p-4 rounded-md text-center '>
            <h3 className='my-8'>
                <span className="text-6xl font-extrabold">{price}</span>
                <span className="text-2xl"> /mon</span>
            </h3>
            <h4 className="text-3xl">{name}</h4>
            <div className="text-start mt-5 flex-grow">
                {
                    features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
                }
            </div>
            <button className="mt-12 bg-green-500 hover:bg-green-900 w-full py-2 rounded-lg font-bold">Buy Now</button>

        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
};

export default PriceOption;