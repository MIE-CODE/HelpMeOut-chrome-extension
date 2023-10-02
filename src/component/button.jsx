const Button = ({ children, type, className}) => {
  return (
      <button type={type} className={`font-work_sans ${className}`}>
      {children}
    </button>
  )
}

export default Button
