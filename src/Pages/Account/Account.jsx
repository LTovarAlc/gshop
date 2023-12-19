import LateralMenu from "../../Components/LateralMenu/lateralMenu";
import React from "react";
import "./account.css"
import InfoUser from "../../Components/InfoUser/infoUser";


const AccountPage = () => {
    return<>
        <section className="account__section">
            <LateralMenu/>
            <InfoUser/>
        </section>
    </>
}

export default AccountPage