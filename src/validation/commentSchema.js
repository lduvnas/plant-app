import * as yup from "yup";

const commentSchema = yup.object().shape({
  content: yup
    .string()
    .required("Comment is required.")
    .trim()
    .min(2, "The comment must be at least 2 characters.")
    .max(100, `The comment can't be more than 100 characters.`),
});

export default commentSchema;
