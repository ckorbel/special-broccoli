//(HOC) Higher Order Component: is essentially a regular React component that renders another component
//the HOC may render 7 or 8 different components
//the of HOC is to re-use code 
//render hijhacking
//prop manipulation 
//abstract state



import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>This info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => { //WrappedComponent is a common convention must be Capital
    return (props) => (  //this is the HOC
        <div>
            {props.isAdmin && <p>This is private info, please dont share.</p> } 
            <WrappedComponent {...props}/> 
        </div>  //^this passes props down to the child.
    );
};

//requireAuthentication

const requireAuthentication = (WrappedComponent) => { 
    return (props) => (  
        <div>
            {props.isAuthenticated ? (
                <WrappedComponent {...props}/> 
            ) : (
                <p>Please login to view private info</p>
            )} 
            
        </div>  
    );
};


const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="Here are the private details" />, document.getElementById('app'));