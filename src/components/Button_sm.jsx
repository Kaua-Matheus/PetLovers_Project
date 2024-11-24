import PropTypes from 'prop-types'

function Button({valor}) {

    function navigation(){
        console.log('Clicado! - sm_button');
    }

    return <a onClick={navigation} class="mx-0.5 btn btn-sm border-none shadow-black shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4">{valor}</a>

}



export default Button;