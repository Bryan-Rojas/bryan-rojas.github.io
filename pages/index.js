import Layout from '../components/Layout';
import Highlight from 'react-highlight';

const Index = (props) => (
    <Layout>
        <center>
            <Highlight>
                > python3 -m pip install -U bryan
            </Highlight>
        </center>

        <p>Call me <strong>Bryan</strong>. <br/><br/>
        I'm a <strong>Computer Science</strong> undergraduate student at 
        California State University, Long Beach.
        </p>
    </Layout>
);

export default Index;