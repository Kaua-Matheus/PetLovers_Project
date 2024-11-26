function Menu(){
    function navigation(){
        
    }

    return (
        <div class="flex-none mx-0.5">
                <button onClick={navigation} class="ml-12 h-8 btn btn-sm border-none rounded shadow-sm text-gray-800 bg-white hover:text-white hover:bg-gray-800 px-4
                    active:translate-y-0.5 active:shadow-none">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    class="inline-block h-5 w-5 stroke-current">
                    <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
                    </svg>
                </button>

            </div>
    );
}
export default Menu;