import PropTypes from 'prop-types';

const Weather = ({result}) => {

    const{ name, main } = result;

if(!name) return null;

    return( 
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de: {name} es: </h2>
                <p className="temperatura" >
                    { parseInt(main.temp - 273.15) }<span> &#x2103; </span>
                </p>
                <p>Max Temperature:
                    { parseInt(main.temp_max - 273.15) }<span> &#x2103; </span>
                </p>
                <p>Min Temperature:
                    { parseInt(main.temp_min - 273.15) }<span> &#x2103; </span>
                </p>
            </div>
        </div>
    )
}

Weather.propTypes = {
    result: PropTypes.object.isRequired
}

export default Weather;
