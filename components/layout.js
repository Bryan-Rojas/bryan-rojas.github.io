import Head from 'next/head'
import Navbar from './navbar'

const Layout = (props) => (
    <div>
        <Head>
            <title>Bryan Rojas - Software Engineer</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/darkly/bootstrap.min.css"/>
        </Head>
        <Navbar/>
        <div className="container">
            {props.children}
        </div>
    </div>
);

export default Layout;