/** @format */

import React from "react";

export default function AirQTable() {
  return (
    <div className='overflow-x-auto w-1/2'>
      <table className='table table-striped font-mono font-bold'>
        <thead>
          <tr>
            <th>#</th>
            <th>Range</th>
            <th>Level</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>0 - 50</td>
            <td>Good</td>
            <td className='bg-success text-black'>Dark green</td>
          </tr>
          <tr>
            <td>2</td>
            <td>51 - 100</td>
            <td>Moderate</td>
            <td className='bg-warning  text-black'>Golden yellow</td>
          </tr>
          <tr>
            <td>3</td>
            <td>101 - 150</td>
            <td>Unhealthy for Sensitive Groups</td>
            <td className='bg-orange text-black'>Orange</td>
          </tr>
          <tr>
            <td>4</td>
            <td>151 - 200</td>
            <td>Unhealthy</td>
            <td className='bg-danger text-white'>Red</td>
          </tr>
          <tr>
            <td>5</td>
            <td>201 - 300</td>
            <td>Very Unhealthy</td>
            <td className='bg-unhealthy text-white'>Dark purple</td>
          </tr>
          <tr>
            <td>6</td>
            <td>301 and higher</td>
            <td>Hazardous</td>
            <td className='bg-hazardous text-white'>Dark red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
