import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function RegionDropdown({items}:any){

    return (

      <div className="dropdown">
      <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
        Dropdown button
      </button>
      <div className="dropdown-menu">
        <a className="dropdown-item" href="#">Link 1</a>
        <a className="dropdown-item" href="#">Link 2</a>
        <a className="dropdown-item" href="#">Link 3</a>
      </div>
    </div>

    );
}



export default RegionDropdown;