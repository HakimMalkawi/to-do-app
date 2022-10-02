import "./button.css"

const Button = ( { onClick, title, svg = null, className, aria } ) => {
    const buttonProps = {
        onClick: onClick,
        className: `${ svg ? "svg" : "text" } button ${ className }`,
        "aria-label": aria, }

    const textButton = 
        <button { ...buttonProps } >
            { title }
        </button>
    
    const iconButton = 
        <div { ...buttonProps } >
            { svg }
        </div>

    return svg ? iconButton : textButton }

export default Button