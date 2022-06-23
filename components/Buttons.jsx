import { ButtonGroup, Button } from "react-bootstrap";

const FavButton = () => {
    return (
        <>
            <ButtonGroup size="lg" className="button-block">
                <Button className="mid-btn">Left</Button>
                <Button className="mid-btn">Middle</Button>
                <Button className="mid-btn">Right</Button>
            </ButtonGroup>
        </>

      
    )
}

export default Buttons;