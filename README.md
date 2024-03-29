# @akashch/otp-input

<!-- ALL-CONTRIBUTORS-BADGE:END -->

A fully customizable, one-time password input component for the web built with React.

<!--
[CodeSandbox](https://codesandbox.io/s/react-otp-input-demo-v2-1iy52) -->

## Installation

[![NPM](https://nodei.co/npm/@akashch/otp-input.png?compact=true)](https://nodei.co/npm/@akashch/otp-input/)

#### To install the latest stable version:

```
npm install --save @akashch/otp-input
```

#### Basic usage:

```jsx
import React, { useState } from "react";
import OtpInput from "@akashch/otp-input";
export default function App() {
  const [otp, setOtp] = useState("");
  return (
    <OtpInput
      numValues={6}
      inputClass={"any-class"}
      parentClass={"any-parent-class"}
      onChange={(otp) => {
        setOtp(otp);
      }}
      type={"number"}
    />
  );
}
```

## API

<table>
  <tr>
    <th>Name<br/></th>
    <th>Type</th>
    <th>Required</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>numValues</td>
    <td>number</td>
    <td>false</td>
    <td>4</td>
    <td>Number of inputs to be rendered.</td>
  </tr>
  <tr>
    <td>onChange</td>
    <td>function</td>
    <td>true</td>
    <td>console.log</td>
    <td>Returns OTP code typed in inputs.</td>
  </tr>
  <tr>
    <td>separator</td>
    <td>Any Character<br/></td>
    <td>false</td>
    <td>none</td>
    <td>Provide a custom separator between inputs by passing a component. For instance, <code>&lt;span&gt;-&lt;/span&gt;</code> would add <code>-</code> between each input.</td> You can also pass a function that returns a component, where the function will get the index of the separator being rendered as an argument.
  </tr>
  <tr>
    <td>inputClass</td>
    <td>className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>Style applied or class passed to parent of inputs.</td>
  </tr>
  <tr>
    <td>inputClass</td>
    <td>className (string)</td>
    <td>false</td>
    <td>none</td>
    <td>class passed to each input.</td>
  </tr>
  <tr>
    <td>inputType</td>
    <td><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Input#input_types">&lt;input&gt; type<a></td>
    <td>false</td>
    <td>number</td>
    <td>The type of the input that will be passed to the input element being rendered.</td>
  </tr>
</table>

## Development

#### To run the vite example:

```
cd example
npm run dev
```

## Checklist

[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat&logo=github)](https://github.com/akash1201/@akashch/otp-input/pulls) [![Open Source Love](https://badges.frapsoft.com/os/v2/open-source.svg?v=103)](https://github.com/akash1201/@akashch/otp-input)

- [ ] Write tests
- [ ] Add actions for lint checks and tests

## Contributing

Feel free to open [issues](https://github.com/akash1201/otp-input/issues/new/choose) and [pull requests](https://github.com/akash1201/otp-input/pulls)!

## License

[![NPM](https://img.shields.io/npm/l/@akashch/otp-input)](https://github.com/akash1201/otp-input/blob/master/LICENSE)

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
