/** @format */

import React from "react";

export default function AirQTable() {
  return (
    <div id='aq-table' className='overflow-x-auto mb-5 shadow-2xl'>
      <table className='table table-striped font-mono font-bold'>
        <thead>
          <tr>
            <th>Range</th>
            <th>Level</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0 - 50</td>
            <td>Good</td>
            <td className='bg-success text-black'>Green</td>
          </tr>
          <tr>
            <td>51 - 100</td>
            <td>Moderate</td>
            <td className='bg-warning  text-black'>Yellow</td>
          </tr>
          <tr>
            <td>101 - 150</td>
            <td>Unhealthy for Sensitive Groups</td>
            <td className='bg-orange text-black'>Orange</td>
          </tr>
          <tr>
            <td>151 - 200</td>
            <td>Unhealthy</td>
            <td className='bg-danger text-white'>Red</td>
          </tr>
          <tr>
            <td>201 - 300</td>
            <td>Very Unhealthy</td>
            <td className='bg-unhealthy text-white'>Purple</td>
          </tr>
          <tr>
            <td>301 and higher</td>
            <td>Hazardous</td>
            <td className='bg-hazardous text-white'>Maroon</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
