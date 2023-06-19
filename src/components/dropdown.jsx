const Dropdown = ({children, title, btnClass, contentClass}) => {
    return (
        <>
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className={`text-white font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center ${btnClass}`} type="button"> {title} <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <div id="dropdown" class={`z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 ${contentClass}`}>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                   {children}
                </ul>
            </div>
        </>
    )
}

export default Dropdown