import Header from "components/organisms/Header";
import Sidebar from "components/organisms/Sidebar";

const HomeTemplate = (props: any) => {
    const {
        children
    } = props;
    return (
        <div className='d-flex flex-column'>
            <Header />
            <Sidebar />
            <div className="home-template-wrapper">
                {children}
            </div>
        </div>
    )
}

export default HomeTemplate;