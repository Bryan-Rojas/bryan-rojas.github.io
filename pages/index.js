import Layout from '../components/Layout';
import Highlight from 'react-highlight';
import PipBryan from '../components/pipbryan';

const Index = (props) => (
    <div id="dark-wallpaper">
    <Layout>
        
            <center>
                <PipBryan/>
            </center>
            <hr/>
            <br/>
            <div className="row">
                <div className="col-4">
                    <br/>
                    Call me Bryan.
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
    </div>
);

export default Index;