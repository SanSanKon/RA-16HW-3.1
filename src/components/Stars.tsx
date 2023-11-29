import Star from "./Star";
import { v4 as uuidv4 } from 'uuid';

type Props = {
    count: number
}

const Stars: React.FC<Props> = ({count}) => {
    
    const starElements = [];

    for (let i = 0; i < count; i++) [
        starElements.push(<Star key={uuidv4()} />)
    ]
    
    return (
        (count < 1 || count > 5 || typeof(count) !== 'number') ? (<div></div>) :
        <ul>
            {starElements.map((star) => (
                <li key={uuidv4()}>{star}</li>
            ))}
        </ul>
    )
}

export default Stars