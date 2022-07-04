import React from "react";
import Header from "../Components/Header"
import AccountCustom from "../Components/AccountSpecs/AccountCustom";

function Account() {
    return (
        <div>
            <Header />
            <div className="toolbar"></div>
            <AccountCustom />
        </div>
    );
};

export default Account; 