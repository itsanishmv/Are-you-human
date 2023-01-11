# Are you human 🤖

A demo sign up form to showcase the captcha functionality.

## Features

- Reusable captcha component
- useGenerateCaptcha

## Usage/Examples

```javascript
import Captcha from "./components/Captcha/Captcha";
import useGenerateCaptcha from "./hooks/useGenerateCaptcha";

const [input, setInput] = useState("");
// set input on onChange event and  pass it an argument in the below hook
const { captcha, generate, match } = useGenerateCaptcha(input);

//   captcha -> string
//   generate -> generates new characters everytime its called ( please pass the length/size of the captcha to be generated)
//   match -> if passed input and generated captcha matches the value is true other wise its false

return (
  <Captcha generate={generate} captcha={captcha} />
  // pass the captcha and function to the Captcha component as props
);
```

## Installation

To run the app in local machine :-

```bash
  1.  Clone the repository
  2. "npm start"

```

## Tech Stack

React js , css
