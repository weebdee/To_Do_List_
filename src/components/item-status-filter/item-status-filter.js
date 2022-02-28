import React from 'react';
import './item-status-filter.css';


const ItemStatusFilter = ({onStatusFilterChange}) => {
  return (
    <div className="btn-group">
      <button onClick={() => onStatusFilterChange('all')} type="button" className="btn btn-info">All</button>
      <button onClick={() => onStatusFilterChange('active')} type="button" className="btn btn-outline-secondary">Active</button>
      <button onClick={() => onStatusFilterChange('done')} type="button" className="btn btn-outline-secondary">Done</button>
    </div>
  );
};


export default ItemStatusFilter;
