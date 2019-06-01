import Layout from '../components/Layout';
import Highlight from 'react-highlight';
import Hello from '../components/hello';

const Index = (props) => (
    <div id="wallpaper">
    <Layout>
            <div className="row">

                <div className="col-8">
                    <center><img src="https://bryanrojas.net/img/header-img.png" height="70%" width="70%"/></center>
                </div>

                <div id="intro" className="col-4">
                    Hello, I'm
                    <br/>
                    <h1>Bryan Rojas</h1>
                    <p>
                    <hr/>
                    <Hello/>
                    <hr/>
                    [Resume]
                    [Github]
                    [LinkedIn]
                    </p>
                </div>

            </div>
        
    </Layout>
    </div>
);

export default Index;