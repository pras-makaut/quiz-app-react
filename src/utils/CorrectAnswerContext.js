import { createContext } from "react";

const CorrectAnswerContext = createContext({
    noOfCorrectAns : 0
});

CorrectAnswerContext.displayName = "CorrectAnswerContext";

export default CorrectAnswerContext;