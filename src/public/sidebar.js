import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';


const Sidebar = () => {
    
    return(
        <div className='sidebar'> 
            <h3>CodeGenie</h3>
            <ul>
                <li>
                    <Link to={"/launchApp"} className="lien" >
                        <h4 className='inter'>Dashboard</h4>
                    </Link>
                </li>
                <li>
                    <Link to={"/templates"} className="lien">
                        <h4 className='inter'>Templates</h4>
                    </Link>
                </li>
                <li>
                    <Link to={"/productivity"} className='lien'>
                        <h4 className='inter'>Productivity</h4>
                    </Link>
                </li>
                <li>
                    <Link to={"/questions"} className="lien">
                        <h4 className='inter'>Any questions</h4>
                    </Link>
                </li>
            </ul>

    </div>
    )
}
export default Sidebar;