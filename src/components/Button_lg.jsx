import PropTypes from 'prop-types';

export default function Button_lg({ primary_text, secundary_text }) {
    return (
        <div className="btn btn-lg text-md border-none mx-2 rounded-badge shadow-black shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 py-3 grid text-center w-52">
            {primary_text}
            <aside className='text-green-800 text-md text-center'>{secundary_text}</aside>
        </div>
    );
}

Button_lg.propTypes = {
    primary_text: PropTypes.string,
    secundary_text: PropTypes.string,
    to: PropTypes.string.isRequired,
};

Button_lg.defaultProps = {
    primary_text: 'Oferta',
    secundary_text: 'Confira',
};