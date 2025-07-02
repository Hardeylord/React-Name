const sizeMap = {
  sm:{
    height:20,
    width:50
  },
  md: {
    height: 50,
    width: 100
  },
  lg: {
    height: 80,
    width: 160
  },
  xl: {
    height: 90,
    width: 180
  }
}

function ButtonSize({title, size, color, textColor}) {
  return(
  <button style={{
    height:sizeMap[size].height,
    backgroundColor:color,
    width:sizeMap[size].width,
    color:textColor
  }}>{title}</button>
  )
}

export default ButtonSize;