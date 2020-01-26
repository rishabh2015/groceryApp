import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const links = [
    {
        name: 'My account',
        linkTo: '/seller/user/dashboard'
    },
    {
        name: 'User information',
        linkTo: '/seller/user/user_profile'
    },
    {
        name: 'My Cart',
        linkTo: '/seller/user/cart'
    },
]

const admin = [
    {
        name: 'Site info',
        linkTo: '/seller/admin/site_info'
    },
    {
        name: 'Add products',
        linkTo: '/seller/admin/add_product'
    },
    {
        name: 'Manage categories',
        linkTo: '/seller/admin/manage_categories'
    },
    {
        name: 'Manage brands',
        linkTo: '/seller/admin/manage_brands'
    }

]


const UserLayout = (props) => {

    const generateLinks = (links) => (
        links.map((item,i)=>(
            <Link to={item.linkTo} key={i}>
                {item.name}
            </Link>
        ))
    )


    return (
        <div className="container">
            <div className="user_container">
                <div className="user_left_nav">
                    <h2>My account</h2>
                    <div className="links">
                        { generateLinks(links)}
                    </div>
                    { props.user.userData.isAdmin ?
                        <div>
                            <h2>Admin</h2>
                            <div className="links">
                                { generateLinks(admin)}
                            </div>
                        </div>
                    :null
                    }

                </div>
                <div className="user_right">
                    {props.children}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps)(UserLayout);