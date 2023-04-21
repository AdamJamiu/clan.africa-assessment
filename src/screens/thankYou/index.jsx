import markIcon from "../../assets/images/icon-thank-you.svg";
import "./style.css";

function ThankYou() {
  return (
    <div className="thank-container">
      <div className="img_container">
        <img src={markIcon} height={70} width={70} alt="thank you successfull icon" />
      </div>
      <h1 className="thank-heading">Thank you!</h1>
      <div className="text-container">
        <p className="text-gray">
          Thanks for confirming your subscription! we hope you have fun using our platform. If you need
          any help, please feel free to email us @support@loremgaming.com
        </p>
      </div>

    </div>
  )
}

export default ThankYou;
