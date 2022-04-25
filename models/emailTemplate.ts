const generateEmailTemplate = (firstName: string, lastName: string, reference: string) => {
	return `
    
		<div
        style="
            margin: 0;
            max-width: 820px;
            margin-left: auto;
            margin-right: auto;
            font-family: sans-serif, Arial, Helvetica;
            font-size: 14px;
            color: #555454;
        "
    >
        <table style="margin: 0" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td
                        style="
                            background-image: linear-gradient(140deg, #e71f3e, #e71f3e, #e71f3e, #c71c87, #c71c87);
                            height: 5px;
                        "
                        width="100%"
                        height="5px"
                    ></td>
                </tr>
            </tbody>
        </table>

        <table style="margin: 0" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td style="min-width: 200px; max-width: 400px">
                        <img
                            style="max-width: 100%; height: auto; padding: 10px"
                            src="https://ci3.googleusercontent.com/proxy/1VR17cCEG8VcVYAE_NZk1CySI-g9_b-huYDk2Fw6eudIMKO2a5NLs1jle-2833g9myt7bgXczfHDfsYvsngenjvK1aQy7RMUPHcFPMhONcokRnaJQA=s0-d-e1-ft#http://content.computicket.com/computicket/images/mail/ctklogo.png"
                            alt="Responsive image"
                            class="CToWUd"
                        />
                    </td>
                    <!-- <td style="min-width: 200px; max-width: 400px; padding: 10px">
                        <table
                            style="margin: 0; text-align: right"
                            width="100%"
                            cellspacing="0"
                            cellpadding="0"
                            border="0"
                        >
                            <tbody>
                                <tr>
                                    <td>PAY FOR YOUR TRANSACTION NOW</td>
                                </tr>
                                <tr>
                                    <td>
                                        <a
                                            style="
                                                text-decoration: none;
                                                color: inherit;
                                                text-align: center;
                                                background-image: linear-gradient(
                                                    140deg,
                                                    #e71f3e,
                                                    #e71f3e,
                                                    #e71f3e,
                                                    #c71c87,
                                                    #c71c87
                                                );
                                                color: white;
                                                width: 50%;
                                                border-radius: 8px;
                                                border: 0.5px solid #b7b7b7;
                                                text-align: center;
                                                font-size: 14px;
                                                line-height: 35px;
                                                padding: 10px 25px;
                                            "
                                            href="https://tickets.computicket.com/login?redirect=%2Ftransaction"
                                            target="_blank"
                                            data-saferedirecturl="https://www.google.com/url?q=https://tickets.computicket.com/login?redirect%3D%252Ftransaction&amp;source=gmail&amp;ust=1646671723269000&amp;usg=AOvVaw3tX1ZObxL7bvdqW2J5aFZc"
                                        >
                                            PAY
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </td> -->
                </tr>
            </tbody>
        </table>

        <table style="padding: 10px" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td style="background-color: #c4c4c4" width="100%" height="2px"></td>
                </tr>
            </tbody>
        </table>

        <div>
            <div style="margin: 10px 20px 10px 20px">
                <div id="m_928681214300834640m_-8457147673202461215customerName" style="color: #555454">
                    <strong><span>Dear ${firstName} ${lastName}</span></strong>
                </div>

                <div id="m_928681214300834640m_-8457147673202461215informationHeader" style="color: #555454">
                    <p>Thank you for reserving your tickets for the Castle Lager Rugby Championships.</p>
                    <p>
                        Due to high demand and to ensure there aren't issues around payment, we have elected to batch the
                        payment process. Your tickets are reserved and therefore will not be released to someone else.
                    </p>
                    <p>
                        A payment link with further instructions will be emailed and sms'ed to you during the course of the
                        next hour.
                    </p>
                    <p>
                        Your reservation is valid for 10 hours, thereafter if no payment is received it will be deleted.
                    </p>
                    <p>
                        Once payment has been completed, your ticket confirmation will be emailed to you.
                        <!-- <strong>0861 915 8000 (calls charged at 65 cents per minute)</strong> -->
                        <!-- or email -->
                        <!-- <strong> -->
                        <!-- <a href="mailto:info@computicket.com" target="_blank">info@computicket.com</a> -->
                        <!-- . -->
                        <!-- </strong> -->
                    </p>
                    <p>
                        Should you not want to follow the above process and want your tickets now, you can pay at any
                        Shoprite Checkers outlet using the below reference and you will obtain your physical tickets
                        immediately upon paymment at the store.
                    </p>
                </div>
            </div>
        </div>

        <table style="padding: 10px" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td style="background-color: #c4c4c4" width="100%" height="2px"></td>
                </tr>
            </tbody>
        </table>

        <div>
            <table style="padding: 10px" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tbody>
                    <tr style="text-align: center; padding: 0px 5px; font-weight: bold">
                        <td>DATE OF RESERVATION</td>
                        <td>REFERENCE</td>
                        <td>NO. OF TICKETS</td>
                        <td>TOTAL COST</td>
                    </tr>
                    <tr style="text-align: center; padding: 3px 5px 10px 5px; color: #e71f3e">
                        <td>21-Feb-2022 11:24</td>
                        <td>${reference}</td>
                        <td>2</td>
                        <td>R 840</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <table style="padding: 10px" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td style="background-color: #c4c4c4" width="100%" height="2px"></td>
                </tr>
            </tbody>
        </table>

        <div>
            <div>
                <table
                    style="margin: 0px 10px; max-width: 780px"
                    width="100%"
                    cellspacing="0"
                    cellpadding="0"
                    border="0"
                >
                    <tbody>
                        <tr
                            style="
                                background-image: linear-gradient(140deg, #e71f3e, #e71f3e, #e71f3e, #c71c87, #c71c87);
                                color: #fff;
                            "
                            width="100%"
                        >
                            <td style="padding: 10px">
                                <img
                                    src="https://ci4.googleusercontent.com/proxy/rlYvdVqENemXa9OIggJ1k_yhPkJ--dApv6rxJ46zjqZA36vj7DpzXPfCfb_4dNyFz1IHG5NpnrnfwPGtnaXVtGLwTzqRmroQ=s0-d-e1-ft#http://content.computicket.com/site/extra/tickets.png"
                                    style="color: #fff; margin-right: 5px; font-weight: bold"
                                    class="CToWUd"
                                    height="14px"
                                />
                                TICKET INFORMATION
                            </td>
                            <td style="text-align: right; padding: 10px"></td>
                        </tr>
                    </tbody>
                </table>

                <table style="padding: 10px; line-height: 25px" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr style="text-align: center; font-weight: bold; margin-top: 5px">
                            <td style="width: 33.3333%">Event</td>
                            <td style="width: 33.3333%">Venue</td>
                            <td style="width: 33.3333%">Location</td>
                        </tr>
                        <tr style="text-align: center; color: #e71f3e">
                            <td style="width: 33.3333%">We Will Rock You</td>
                            <td style="width: 33.3333%">teatro at montecasino</td>
                            <td style="width: 33.3333%">
                                <a
                                    href="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q="
                                    style="color: #ff2247"
                                    target="_blank"
                                    data-saferedirecturl="https://www.google.com/url?q=https://maps.google.com/maps?f%3Dq%26source%3Ds_q%26hl%3Den%26geocode%3D%26q%3D&amp;source=gmail&amp;ust=1646671723269000&amp;usg=AOvVaw2XLGdFpmHPbFHLCeygKtmO"
                                >
                                    <img
                                        src="https://ci4.googleusercontent.com/proxy/NFZbZSrpaXa2pQCI2Vffbak7CiPHYPwyzvBPpQqyRZX8IcjquRipnVJrBfhHyTXshXOHk7e68ptaN9TXfTwV712Mbc4l-ps41X91EJGXq8O4=s0-d-e1-ft#http://content.computicket.com/computicket/images/mail/pin.png"
                                        alt="Show me the Map"
                                        title="Show me the Map"
                                        class="CToWUd"
                                    />
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td height="8px"></td>
                        </tr>
                        <tr style="text-align: center; font-weight: bold">
                            <td style="width: 33.3333%">No. Of Tickets</td>
                            <td style="width: 33.3333%">Event Date</td>
                            <td style="width: 33.3333%">Price</td>
                        </tr>
                        <tr style="text-align: center; color: #e71f3e">
                            <td style="width: 33.3333%">2</td>
                            <td style="width: 33.3333%">Fri 20:00 31-Mar-2023</td>
                            <td style="width: 33.3333%">R 840</td>
                        </tr>
                        <tr>
                            <td height="8px"></td>
                        </tr>
                        <tr style="text-align: center; font-weight: bold">
                            <td style="width: 33.3333%">Area</td>
                            <td style="width: 33.3333%">Seat</td>
                            <td style="width: 33.3333%">Price Description</td>
                        </tr>
                        <tr style="text-align: center; color: #e71f3e">
                            <td style="width: 33.3333%">Stalls</td>
                            <td style="width: 33.3333%">X:37-38</td>
                            <td style="width: 33.3333%"></td>
                        </tr>
                    </tbody>
                </table>
                <table style="padding: 10px" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td style="background-color: #c4c4c4" width="100%" height="2px"></td>
                        </tr>
                    </tbody>
                </table>
                <!-- <table style="padding: 10px 20px" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr style="color: #e71f3e; font-weight: bold">
                            <td>ADDITIONAL INFORMATION</td>
                        </tr>
                        <tr>
                            <td style="width: 25%; padding: 5px 10px; font-weight: bold">- Doors/gates Open:</td>
                            <td>Doors open 1 hours 0 min prior to event</td>
                        </tr>
                        <tr>
                            <td style="width: 25%; padding: 5px 10px; font-weight: bold">- Age Restriction:</td>
                            <td>No under 5s - PG/No Babes In Arms</td>
                        </tr>
                        <tr>
                            <td style="width: 25%; padding: 5px 10px; font-weight: bold">- Duration:</td>
                            <td>
                                2 hours 30 min with online sales stopping on show start
                                <div style="display: none">1</div>
                            </td>
                        </tr>
                    </tbody>
                </table> -->

                <!-- <table style="padding: 10px" width="100%" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr>
                            <td style="background-color: #c4c4c4" width="100%" height="2px"></td>
                        </tr>
                    </tbody>
                </table> -->
            </div>
        </div>

        <table style="margin: 0" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tbody>
                <tr>
                    <td
                        style="
                            background-image: linear-gradient(140deg, #e71f3e, #e71f3e, #e71f3e, #c71c87, #c71c87);
                            color: #fff;
                            text-align: center;
                            font-weight: bold;
                            padding: 10px 0px;
                        "
                        width="100%"
                    >
                        For all your activities we?ve got you covered...
                    </td>
                </tr>
            </tbody>
        </table>

        <div
            id="m_928681214300834640m_-8457147673202461215availat"
            style="padding: 20px 0px; text-align: center; margin: 0px"
        >
            <a
                href="https://tickets.computicket.com/"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://tickets.computicket.com/&amp;source=gmail&amp;ust=1646671723269000&amp;usg=AOvVaw3WDLvffPQr22WHO4RdplBo"
            >
                <img
                    src="https://ci4.googleusercontent.com/proxy/vmzq-4G29OF9kdF5a8vletYamwleyGDTXCG7lLUdIYOQ_05cAZ2hpLZWVoybN83p_M54kWO4cD-rYkAwbrSAuaNAlj2yzQ=s0-d-e1-ft#https://content.computicket.com/site/extra/all1.png"
                    style="max-width: 400px; margin: 0"
                    class="CToWUd"
                />
                <img
                    src="https://ci4.googleusercontent.com/proxy/REDuIWoZWGQMvuhGWaIoADTOckb_P90evzh6esGYZXlNy3lVG0JWDd_zAL0ULFb1frEy8eCWzYCOUIbEWjDBWw7hnVKSLw=s0-d-e1-ft#https://content.computicket.com/site/extra/all2.png"
                    style="max-width: 400px; margin: 0"
                    class="CToWUd"
                />
            </a>
        </div>

        <div style="text-align: center; margin-top: 20px; padding: 12px; color: #555454; font-weight: bold">
            YOU CAN FIND
            <span style="color: #e71f3e">COMPUTICKET</span>
            INSIDE
        </div>

        <div id="m_928681214300834640m_-8457147673202461215availat" style="padding: 20px 0px; text-align: center">
            <a
                href="https://www.shoprite.co.za/"
                style="text-decoration: none"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://www.shoprite.co.za/&amp;source=gmail&amp;ust=1646671723269000&amp;usg=AOvVaw2kkfX8mq4QEB27q18mhDbm"
            >
                <img
                    src="https://ci5.googleusercontent.com/proxy/66xotbPCvLIsK2GfAYiCKHKbXwCQYKf03E27xxshUixfwouhfzhDkHKJfIq2wWVs8W3I5Fpb8Jvrsw-iUKA2mVezFrHFCRliIRcoBaIXXN95c7bjiSzHjPBm=s0-d-e1-ft#http://content.computicket.com/computicket/images/mail/shopriteLogo.png"
                    style="height: 30px; padding: 5px; max-width: 175px"
                    class="CToWUd"
                    hspace="6"
                />
            </a>
            <a
                href="https://www.checkers.co.za/"
                style="text-decoration: none"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://www.checkers.co.za/&amp;source=gmail&amp;ust=1646671723269000&amp;usg=AOvVaw0-Jxddf9G5rfcLKXUPbd4w"
            >
                <img
                    src="https://ci3.googleusercontent.com/proxy/6MMAZPtQsp4hOYHWXBEJiwUjXJi7pcUFsNhQlze0jJXSL30o5VWUXSU_WvJ8GWeTvW8XsLgbSLVnbP3HSn8LHjf76Uogx2dAxsu9zZbrDYPMZTRAE7uhxuU-=s0-d-e1-ft#http://content.computicket.com/computicket/images/mail/checkersLogo.png"
                    style="height: 30px; padding: 5px; max-width: 175px"
                    class="CToWUd"
                    hspace="6"
                />
            </a>
            <a
                href="https://www.checkers.co.za/"
                style="text-decoration: none"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://www.checkers.co.za/&amp;source=gmail&amp;ust=1646671723269000&amp;usg=AOvVaw0-Jxddf9G5rfcLKXUPbd4w"
            >
                <img
                    src="https://ci5.googleusercontent.com/proxy/M4NdpZ8oUOZKMXdrjKjwc3or95RTmscb6Aiz0heJagjQd_jW-wZAmWgU4SIljfKTACbNx4StkiEBSQAtFcv7Is1Q_d5sBsbzHlg1vZoXjoj-mHDCqIQOKHY7YxaBAgU=s0-d-e1-ft#http://content.computicket.com/computicket/images/mail/checkersHyperLogo.png"
                    style="height: 30px; padding: 5px; max-width: 175px"
                    class="CToWUd"
                    hspace="6"
                />
            </a>
            <a
                href="https://www.houseandhome.co.za/"
                style="text-decoration: none"
                target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://www.houseandhome.co.za/&amp;source=gmail&amp;ust=1646671723270000&amp;usg=AOvVaw16NuR561dXSabHtvVzrSBC"
            >
                <img
                    src="https://ci6.googleusercontent.com/proxy/JUhrnCFOVAK2vJBTUcm3aFQDXZxankdoYY54OXsExswMyPKkJLLaGm4FEjZpgYJnwffkRX1DbQlfjyvnkix21ysblNWRWElFSgM8fjn6S0aAmEfBuamkw3FQ8Nwmew=s0-d-e1-ft#http://content.computicket.com/computicket/images/mail/houseandhomeLogo.png"
                    style="height: 30px; padding: 5px; max-width: 175px"
                    class="CToWUd"
                    hspace="6"
                />
                <font color="#888888"></font>
            </a>
            <font color="#888888"></font>
        </div>
        <font color="#888888"></font>
    </div>
    `
}

export default generateEmailTemplate
