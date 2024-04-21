import { CORE_CONCEPTS } from "../data";
import Concept from "./Concept";

const Concepts = () => {
  return CORE_CONCEPTS.map((coreConcept) => (
    <Concept key={coreConcept.title} {...coreConcept} />
  ));
};

export default Concepts;
