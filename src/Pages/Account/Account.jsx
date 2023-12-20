import LateralMenu from "../../Components/LateralMenu/lateralMenu";
import React from "react";
import "./account.css"
import InfoUser from "../../Components/InfoUser/infoUser";
import UserProducts from "../../Components/UserProducts/userProducts";


const AccountPage = () => {
    return<>
        <section className="account__section">
            <LateralMenu/>
            <div className="account__body">
                <InfoUser/>
                <UserProducts/>
            </div>
        </section>
    </>
}

export default AccountPage