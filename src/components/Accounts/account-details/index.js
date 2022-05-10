import React from "react";
import { gql, useQuery } from "@apollo/client";

import { GET_ACCOUNT_DETAIL } from "../../apis/AccountsAPIs"

const Index = ({ authData }) => {
    let id_user = authData.id;
   
    const { data } = useQuery(GET_ACCOUNT_DETAIL, {
        variables: {
            id: id_user * 1, // * 1 to convert to number
        },
    });
    console.log(data)
    return ( 
        <React.Fragment>
            {data?.user.username}
            <div className="account__details">
                <div className="account_details--edit">
                    <h2 className="myaccount-heading">Account details</h2>
                    <div className="myaccount__field">
                        <label htmlFor="myaccount__field--fistname" className="myaccount__field--label">First Name*</label>
                        <input id="myaccount__field--fistname" type="text"  autoComplete="off" />
                    </div>
                    <div className="myaccount__field">
                        <label htmlFor="myaccount__field--lastname" className="myaccount__field--label">Last Name*</label>
                        <input id="myaccount__field--lastname" type="text"  autoComplete="off" />
                    </div>
                    <div className="myaccount__field">
                        <label htmlFor="myaccount__field--displayname" className="myaccount__field--label">Display name *</label>
                        <input id="myaccount__field--displayname" type="text"  autoComplete="off" />
                    </div>
                    <div className="myaccount__field">
                        <label htmlFor="myaccount__field--email" className="myaccount__field--label">Email address *</label>
                        <input id="myaccount__field--email" type="text"  autoComplete="off" />
                    </div>
                    <div className="myaccount__field">
                        <label htmlFor="myaccount__field--currentpass" className="myaccount__field--label">Current password (leave blank to leave unchanged)</label>
                        <input id="myaccount__field--currentpass" type="text"  autoComplete="off" />
                    </div>
                    <div className="myaccount__field">
                        <label htmlFor="myaccount__field--newpass" className="myaccount__field--label">New password (leave blank to leave unchanged)</label>
                        <input id="myaccount__field--newpass" type="text"  autoComplete="off" />
                    </div>
                    <div className="myaccount__field">
                        <label htmlFor="myaccount__field--confirmpass" className="myaccount__field--label">New password (leave blank to leave unchanged)</label>
                        <input id="myaccount__field--confirmpass" type="text"  autoComplete="off" />
                    </div>
                    <div className="myaccount__field">
                        <button id="myaccount__field--save" type="text">Save Change</button>
                    </div>

                </div>
            </div>
        </React.Fragment>
     );
}
 
export default Index;