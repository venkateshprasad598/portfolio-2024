import { CONTACT } from ".././../constants/index.js";

const Contact = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <div className="my-10 text-center text-4xl">Get in Touch </div>

      <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#">{CONTACT.email}</a>
      </div>
    </div>
  );
};

export default Contact;
