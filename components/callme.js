import Layout from '../components/Layout';
import Typing from 'react-typing-animation';

const callMe = () => (
    <Typing>
        <span>Call me <strong>Bryan</strong>.</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={1} />
        <span><strong> Rojas</strong> if you want to use my last name but that's a little weird.</span>
        <Typing.Delay ms={1000} />
        <Typing.Backspace count={65} />
        <span>.</span>
        <Typing.Delay ms={1000} />
    </Typing>
);

export default callMe;