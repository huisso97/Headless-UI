import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Text } from "./components/Text";
import { FormControl } from "./components/FormControl";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "./components/Disclosure";
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = (newIsOpen: boolean) => {
    setIsOpen(newIsOpen);
  };

  return (
    <div>
      <div>
        <Button
          as="a"
          href="https://reactjs.org/"
          style={{ padding: "10px", backgroundColor: "blue", color: "white" }}
        >
          Link Button
        </Button>
        <Button
          style={{ padding: "10px", backgroundColor: "green", color: "white" }}
        >
          Regular Button
        </Button>
      </div>
      <div>
        <Card
          as="section"
          style={{ padding: "20px", border: "1px solid black" }}
        >
          This is a section card
        </Card>
        <Card
          as="article"
          style={{ padding: "20px", border: "1px solid black" }}
        >
          This is an article card
        </Card>
      </div>
      <div>
        <Text as="p" style={{ fontSize: "16px", color: "blue" }}>
          This is a paragraph
        </Text>
        <Text as="span" style={{ fontSize: "16px", color: "red" }}>
          This is a span
        </Text>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FormControl
          as="input"
          name="username"
          type="text"
          placeholder="Username"
          style={{ padding: "10px" }}
        />
        <FormControl
          as="textarea"
          name="bio"
          placeholder="Bio"
          style={{
            padding: "10px",
            resize: "none",
          }}
        />
      </div>
      <div>
        <Disclosure isOpen={isOpen} onToggle={handleToggle}>
          <DisclosureButton style={{ backgroundColor: "white" }}>
            {isOpen ? "Close" : "Open"}
          </DisclosureButton>
          <DisclosurePanel style={{ border: "1px solid black" }}>
            <p>This is the panel content</p>
          </DisclosurePanel>
        </Disclosure>
      </div>
    </div>
  );
}

export default App;
