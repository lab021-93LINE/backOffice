import React from 'react'
import Menu from 'components/Menu'

const Sidebar = () => {
    const menuList = [{
            label: 'Home',
            url: '/'
        },
        {
            label: 'About',
            url: '/about'
        },
        {
            label: 'About',
            url: '/about'
        },
        {
            label: 'About',
            url: '/about'
        },
    ]

    let viewMenuObject = [];
    
    let count = 0;
    menuList.forEach((_menu) => {    
        let element = < Menu label = {_menu.label} url = {_menu.url} key={count++}/>;
        viewMenuObject.push(element);
    });
    
    return ( 
        <div className="sidebar">
            <div className="title-box">
                <p className='title'>BACK OFFICE</p>
                <p className='sub-title'>DEVELOPE & STUDY</p>
            </div>
            <ul>{viewMenuObject}</ul>
        </div>
    );
    

}

export default Sidebar;