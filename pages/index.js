import Layout from '../components/Layout';
import Highlight from 'react-highlight';
import CallMe from '../components/CallMe';
import Typing from 'react-typing-animation';

const Index = (props) => (
    <Layout>
        <center>
            <Highlight>
                > python3 -m pip install bryan
            </Highlight>
        </center>
        <hr/>
        <br/>
        <div className="row">
            <div className="col-4">
                <br/>
                <CallMe/>
                <p>
                <hr/>
                Software Engineer / Student
                <hr/>
                [Resume]
                [Github]
                [LinkedIn]
                </p>
            </div>
            <div className="col-8">
                <center><img src="https://bryanrojas.net/img/header-img.png" height="50%" width="50%"/></center>
            </div>
        </div>
    </Layout>
);

export default Index;