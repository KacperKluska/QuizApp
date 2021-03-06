import { FormControl, Radio, RadioGroup } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import { StyledQuestion, StyledQuestionBody } from "./Question.styles";
import { HTMLParser } from "./Question.utils";

const letters = ["a", "b", "c", "d", "e", "f"];

interface Props {
  category: string;
  difficulty: string;
  question: string;
  answers: string[];
  userAnswers: string[];
  handleSetUserAnswer: (index: number, answer: string) => void;
  index: number;
}

export const Question = ({
  category,
  difficulty,
  question,
  answers,
  userAnswers,
  handleSetUserAnswer,
  index,
}: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = (event.target as HTMLInputElement).value;
    handleSetUserAnswer(index, newValue);
  };

  return (
    <StyledQuestionBody>
      <span>Category:&nbsp;{HTMLParser(category)}</span>
      <span>Difficulty:&nbsp;{HTMLParser(difficulty)}</span>
      <StyledQuestion>{HTMLParser(question)}</StyledQuestion>
      <FormControl>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="radio-buttons-group"
          onChange={handleChange}
          value={userAnswers[index]}
        >
          {answers.map((answer, index) => (
            <FormControlLabel
              value={HTMLParser(answer)}
              control={<Radio />}
              label={HTMLParser(`${letters[index]})&nbsp;${answer}`)}
              key={HTMLParser(answer)}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </StyledQuestionBody>
  );
};
