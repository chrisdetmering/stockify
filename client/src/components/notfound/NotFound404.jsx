import { Link, useHistory } from 'react-router-dom';

export const NotFound404 = () => {
    const history = useHistory();

    function handleClick() {
        history.goBack()
    }

    return (<>
        404 PAGE NOT FOUND
        <br />
        <a onClick={handleClick}>Take me Back</a>
    </>)
}