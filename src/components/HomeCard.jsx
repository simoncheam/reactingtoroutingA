import React from 'react';

const HomeCard = () => {

    
    
    return (
        
        <div className="col-md-6" >
        <div className="card shadow my-2">
            <div className="card-body">
                <h4 className="card-title text-center">Studio Ghibli API Lab</h4>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">This lab demonstrates React with the following features:  </li>
                    <li class="list-group-item"><strong>Conditional rendering and routing </strong></li>
                    <li class="list-group-item"><strong>Fetching data from a REST API with a useEffect hook</strong></li>
                    <li class="list-group-item"><strong>Managing multiple array maps with a useState hook</strong></li>
                    <li class="list-group-item"><strong>Iconic Bootstrap styling</strong></li>
                    
                    <li class="list-group-item">Click the buttons above to view the resources from Studio Ghibli and enjoy!</li>
                    <p class="link">If you like what you see, connect with me at <a class="card-link text-decoration-none" href="mailto:simon@simoncheam.com">simon@simoncheam.com</a> and let’s chat!</p>
                </ul>
            </div>
        </div>
    </div>
        
        
        

        
        
        );
        
        
        
};

export default HomeCard;