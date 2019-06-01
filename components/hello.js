import Typing from 'react-typing-animation';

const Hello = () => (
    <Typing>
        <span>I am a Software Engineer.</span>
        <Typing.Delay ms={3000} />
        <Typing.Backspace count={18} />
        <span>Student.</span>
        <Typing.Delay ms={3000} />
        <Typing.Backspace count={10} />
        <span>Latinx.</span>
        <Typing.Delay ms={3000} />
        <Typing.Backspace count={8} />
    </Typing>
);

export default Hello;