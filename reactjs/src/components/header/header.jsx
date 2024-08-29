
import Button from '../Common/Button/Button'
import './header.css'
import Heading from '../Common/Heading/Heading'

function Header (){
    return (
      <div className = 'header-wrapper'>
        <h1>Header</h1>
        <Heading />
        <Button title ="Login" link = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkxniqaKxGSwc9iIGMIma4rW6tNb1584aqvg&s"/>
        </div>
    )
}

export default Header ;