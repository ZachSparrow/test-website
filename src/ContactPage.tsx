import MyNavigationBar from "./components/MyNavigationBar";

function ContactPage() {
  return (
    <div className="myStyle" style={{ textAlign: "center" }}>
      <MyNavigationBar />
      <h1> Contact Information </h1>
      <h2>
        Name: <h3>Zachary E Koonce</h3>
      </h2>
      <h2>
        Email: <h4>Zach.Koonce@yahoo.com</h4>
      </h2>
      <h2>
        Phone: <h4>(253) 686-5266</h4>
      </h2>
      <h2>
        Linked-In:<h4>linkedin.com/in/zachary-koonce</h4>
      </h2>
    </div>
  );
}

export default ContactPage;
