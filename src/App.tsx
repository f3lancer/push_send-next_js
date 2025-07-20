import "./App.css";
import { Button, Input, Select } from "inputs-and-buttons";

import {
  UsersIcon,
  ChevronRightIcon,
  SignalIcon,
  MusicalNoteIcon,
} from "@heroicons/react/24/outline";

function App() {
  const emails = [
    "m@mail.com",
    "m@google.com",
    "m@support.com",
    "m@google.com",
  ];
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Button variant="primary">Primary</Button>
      <Button disabled={false} variant="secondary">
        Secondary
      </Button>
      <Button disabled={false} variant="outline">
        Outline
      </Button>
      <Button disabled={false} variant="destructive">
        Destructive
      </Button>
      <Button disabled={false} variant="ghost">
        Ghost
      </Button>
      <Button disabled={true} variant="disabled">
        Disabled
      </Button>
      <Button disabled={false} variant="linck" href="#">
        Wrapped with link
      </Button>
      <Button
        disabled={false}
        icons={[<UsersIcon />, <ChevronRightIcon />]}
        variant="doubleIcon"
      >
        Audience
      </Button>
      <Button disabled={false} leftIcon={<SignalIcon />} variant="leftIcon">
        Left Icon Button text
      </Button>
      <Button
        disabled={false}
        rightIcon={<MusicalNoteIcon />}
        variant="rightIcon"
      >
        Right Icon Button text
      </Button>
      <Select
        options={emails}
        helperText="You need to enter your full name in here."
        label="Name"
        Text="Enter your name"
      />
      <Input
        label="Name"
        helperText="You need to enter your full name in here."
        errorText="String must contain at least 2 character(s)"
      />
    </>
  );
}

export default App;
