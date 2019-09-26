import { React } from 'react';
import  Menu  from 'components/Menu'

const Sidebar = () => {
    const menuList = [
        {
            label : 'Home',
            url : '/'
        },
        {
            label : 'About',
            url : '/about'
        },
        {
            label : 'Test',
            url : '/test'
        }
    ]

    let viewMenuObject = [];
    menuList.forEach((_menu)=>{
        let element = <Menu label={_menu.label} url={_menu.url}/>;
        viewMenuObject.push(element);
    });

    return ( 
        <div>
            {this.viewMenuObject}
        </div>
    );
}
 
export default Sidebar;