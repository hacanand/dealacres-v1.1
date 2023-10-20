import React from 'react'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { SearchRounded } from "@mui/icons-material";

import styles from "./comparison.module.css"

const Comparison = () => {
  return (
    <div>
      <div className={styles.Comparison}>
        <h2>Compare Projects</h2>
        <p>Shubharambh in Uttam Nagar Vs Neelkanth Plots in Sector 34 Rohini</p>

        <table>
            <thead>
                <tr>
                    <td></td>
                    <td>
                        <div>
                            <div className={styles.Head}>
                            <p>Shubharambh</p>
                            </div>

                            <div>
                                <p><strong>Shubharambh</strong></p>
                                <p>Sector 93 Gurgaon</p>
                                <p>730 - 1530 Sq.ft</p>
                                <p>3BHK, FLATS, RESIDENTIAL PROPERTIES</p>
                                <Image />
                                <tr><td>Location</td><td>N/A</td></tr>
                                <tr><td>Nearby Facilities</td><td>N/A</td></tr>
                                <tr><td>Socity</td><td>N/A</td></tr>
                            </div>

                        </div>
                    </td>
                    <td>
                    <div>
                            <div  className={styles.Head}>
                            <p>Neelkanth Plots</p>
                            </div>

                            <div>
                                <p><strong>Neelkanth Plots</strong></p>
                                <p>Sector 93 Gurgaon</p>
                                <p>730 - 1530 Sq.ft</p>
                                <p>3BHK, FLATS, RESIDENTIAL PROPERTIES</p>
                                <Image />
                                <tr><td>Location</td><td>N/A</td></tr>
                                <tr><td>Nearby Facilities</td><td>N/A</td></tr>
                                <tr><td>Socity</td><td>N/A</td></tr>
                            </div>

                        </div>
                    </td>
                    <td>
                    <div className={styles.searchBar}>
          <input id="Search" type="search" />
          <label htmlFor="Search">
            <SearchRounded color="light" />
          </label>
        </div>
                        </td>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <th>Status</th>
                    <td>
                        <div>
                            <p><strong>Under Construction</strong></p>
                            <tr><td>Launch in</td><td>N/A</td></tr>
                            <tr><td>Possession by</td><td>N/A</td></tr>
                        </div>
                    </td>
                    <td>
                        <div>
                            <p><strong>Ready to Move</strong></p>
                            <tr><td>Construction Age</td> <td>    N/A</td></tr>
                        </div>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <th>Highlights</th>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>
                <tr>
                    <th>Amenities</th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>

                <tr>
                    <td>Power Back Up</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Lift</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr>
                    <td>Reserved Parking</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>
                
                <tr>
                    <td>Security</td>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>
                <tr>
                    <td>More +</td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>

                <tr>
                    <th>Total Project Area</th>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr>
                    <th>Prices</th>
                    <td>₹  71.15 L - 1.85 Cr</td>
                    <td>₹  71.15 L - 1.85 Cr</td>
                    <td></td>
                </tr>
                <tr>
                    <th>Units</th>
                    <td>2 Towers, 40 Units</td>
                    <td>40 Units</td>
                    <td></td>
                </tr>

                <tr>
                    <th>Annual Rental Yield</th>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr>
                    <th>Project Comments</th>
                    <td>N/A</td>
                    <td>N/A</td>
                    <td></td>
                </tr>

                <tr>
                    <td>
                        <p><strong>Developer Details</strong></p>

                        <p>Experience</p>
                        <p>Total Projects</p>
                        <p>Ongoing Projects</p>
                        </td>
                    <td>
                    <p>S Gambhir Buildtech Pvt. Ltd</p>

                    <p><strong>13 yrs</strong></p>
                    <p><strong>2</strong></p>
                    <p><strong>1</strong></p>
                    </td>
                    <td>
                    <p>S Gambhir Buildtech Pvt. Ltd</p>

<p><strong>13 yrs</strong></p>
<p><strong>2</strong></p>
<p><strong>1</strong></p>
                    </td>
                    <td></td>
                </tr>

                <tr>
                    <th>Overall Locality Overview</th>
                    <td>
                        <tr>
                            <td>Commuting</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Public Transport</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Parking</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Connectivity</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Traffic</td>
                            <td><Rating /></td>
                        </tr>

                        <br />

                        <tr>
                            <td>Places of Interest</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Schools</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Restaurants</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Hospitals</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Market</td>
                            <td><Rating /></td>
                        </tr>

                        <div>
                            <button>View Project Details</button>
                        </div>
                        
                    </td>
            
                    <td>
                        <tr>
                            <td>Commuting</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Public Transport</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Parking</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Connectivity</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Traffic</td>
                            <td><Rating /></td>
                        </tr>

                        <br />

                        <tr>
                            <td>Places of Interest</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Schools</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Restaurants</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Hospitals</td>
                            <td><Rating /></td>
                        </tr>
                        <tr>
                            <td>Market</td>
                            <td><Rating /></td>
                        </tr>
                        
                        <div>
                            <button>View Project Details</button>
                        </div>
                        
                    </td>
                </tr>

                
            </tbody>

        </table>
      </div>

    </div>
  )
}

export default Comparison
