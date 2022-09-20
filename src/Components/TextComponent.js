import React from 'react'
const TextComponent = (props) => {
    const {label,className,isMandatory,children,CustomTag = "div"} = props
  return (
    <CustomTag className = {className}>
        {label}
        {isMandatory && <span>*</span>}
        {children}
    </CustomTag> 
  )
}

export default TextComponent