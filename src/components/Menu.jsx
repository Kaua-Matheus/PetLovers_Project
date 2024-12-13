import { GiHamburgerMenu } from "react-icons/gi";

function Menu(){
    function navigation(){
        
    }

    return (
        <div class="flex items-center mx-0.5">
                <button onClick={navigation} class="ml-12 h-8 btn btn-sm border-none rounded shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4
                    active:translate-y-0.5 active:shadow-none">
                    <GiHamburgerMenu/>
                </button>

            </div>
    );
}
export default Menu;