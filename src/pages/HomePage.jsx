import ControlledForm from "../components/ControlledForm";
import MixedForm from "../components/MixedForm";
import UncontrolledForm from "../components/UncontrolledForm";
import "./HomePage.css";

function HomePage() {
  return (
    <>
      <ControlledForm />
      <UncontrolledForm />
      <MixedForm />
    </>
  );
}

export default HomePage;
