import "./toggle-button.css"

const ToggleButton = ( { value, onClick, name } ) => {
    const toggleButtonProps = {
        onClick: onClick,
        className: `toggle-button_wrapper ${ value ? "on" : "off" }`,
        "aria-label": `Toggle ${ name }` }

    return  <div { ...toggleButtonProps } >
                <span></span>
            </div> }

export default ToggleButton