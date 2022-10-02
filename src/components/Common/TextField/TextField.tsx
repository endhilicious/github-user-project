import React from 'react'

interface TextFieldProps {
    inputRef: React.Ref<HTMLInputElement>;
    className?: string;
    placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  inputRef,
  className,
  placeholder
}) => {
  return (
    <div className={className}>
        <input placeholder={placeholder} ref={inputRef} type="text" />
    </div>
  )
}

export default TextField