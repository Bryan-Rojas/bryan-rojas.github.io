import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';

const Layout = (props) => (
    <div>
        <Head>
            <title>Bryan Rojas - Software Engineer</title>
            {/* Bootstrap */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"/>
            <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css"/>
            <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"/>
            <script src="https://unpkg.com/popper.js@1.12.6/dist/umd/popper.js" integrity="sha384-fA23ZRQ3G/J53mElWqVJEGJzU0sTs+SvzG8fXVWP+kJQ1lwFAOkcUOysnlKJC33U" crossorigin="anonymous"/>
            <script src="https://unpkg.com/bootstrap-material-design@4.1.1/dist/js/bootstrap-material-design.js" integrity="sha384-CauSuKpEqAFajSpkdjv3z9t8E7RlpJ1UP0lKM/+NdtSarroVKu069AlsRPKkFBz9" crossorigin="anonymous"/>
            
            {/* Highlight - Subject to Change 
            <link rel="stylesheet" href="../static/css/vs2015.css"/>
            */}

            {/* Index */}
            <link rel="stylesheet" href="../static/css/home.css"/>

            {/* Navigation */}
            <link rel="stylesheet" href="../static/css/nav.css"/>

            {/* Fonts */}
            <link href='https://fonts.googleapis.com/css?family=Over+the+Rainbow' rel='stylesheet' type='text/css'/>

            {/* Footer */}
            <link rel="stylesheet" href="../static/css/footer.css"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
        <Footer/>
    </div>
);

export default Layout;