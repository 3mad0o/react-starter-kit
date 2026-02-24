import { useState } from "react";
import "./App.css";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { FormGroup } from "@/components/ui/FormGroup";
import { CSelect } from "@/components/ui/CSelect";
import { PhoneNumber } from "@/components/ui/PhoneNumber";
import {
  formatPhoneNumber,
  formatPhoneNumberIntl,
} from "react-phone-number-input";
import { Button } from "./components/ui/Button";
import { Modal } from "./components/ui/Modal";
import { BottomSheet } from "./components/ui/BottomSheet";
import { Dropdown } from "./components/ui/Dropdown";
import { DropdownItem } from "./components/ui/DropdownItem";
import { TextArea } from "./components/ui/TextArea";
import { Accordion } from "./components/ui/Accordion";
import { FileUpload } from "./components/ui/FileUpload";
import { useAlert } from "./contexts/AlertContext";

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isBotttomSheetOpen, setIsBottomSheetOpen] = useState<boolean>(false);
  const alert = useAlert();
  const showAlert = () => {
    alert
      .show({
        type: "warning",
        message: "Are You Sure You Want To Delete?!",
        confirmText: "OK",
        cancelText: "Cancel",
        icon: "warning",
      })
      .then((confirmed) => {
        console.log('conf',confirmed);
        
        if (confirmed) {
          alert.show({
            type: "success",
            message: "Deleted Successfully!",
            icon: "success",
            confirmText: "OK",
          });
        } else {
          alert.show({
            type: "info",
            message: "Action Cancelled!",
            icon: "info",
          });
        }
      });
  };
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      >
        Modal Is Opened
      </Modal>

      <BottomSheet
        isOpen={isBotttomSheetOpen}
        onClose={() => {
          setIsBottomSheetOpen(false);
        }}
      >
        Bottom Sheet Is Opened
      </BottomSheet>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <FormGroup space="md">
          <Label size="md" htmlFor="input1" className="">
            Input Label
          </Label>

          <Input type="text" placeholder="Enter some text" className="w-full" />
        </FormGroup>

        <FormGroup space="md">
          <Label size="md" htmlFor="input1" className="">
            Phone Label
          </Label>

          <PhoneNumber
            defaultCountry="JO"
            onChange={(value: string) => {
              console.log(value);
              if (value) {
                console.log(formatPhoneNumber(value));
                console.log(formatPhoneNumberIntl(value).split(" ")[0]);
              }
            }}
          />
        </FormGroup>

        <FormGroup space="md">
          <Label size="md" htmlFor="input1" className="">
            Text Area Label
          </Label>

          <TextArea placeholder="Enter some text" className="w-full" />
        </FormGroup>

        <FormGroup space="md">
          <Label size="md" htmlFor="input1" className="">
            File Upload Label
          </Label>

          <FileUpload
            name="file"
            placeholder="Click to upload a file"
            accept="image/*"
          />
        </FormGroup>
        <FormGroup space="md">
          <Label size="md" htmlFor="input1" className="">
            Select Label
          </Label>

          <CSelect
            options={[
              {
                label: "option 1",
                value: 1,
              },
              {
                label: "option 2",
                value: 2,
              },
            ]}
            isMulti={true}
          />
        </FormGroup>

        <div className="col-span-2 grid grid-cols-3 md:grid:cols-6  gap-4">
          <Button variant="primary" onClick={() => alert("Button Clicked!")}>
            Click Me
          </Button>
          <Button variant="secondary" onClick={() => alert("Button Clicked!")}>
            Click Me
          </Button>
          <Button variant="danger" onClick={() => alert("Button Clicked!")}>
            Click Me
          </Button>
          <Button variant="success" onClick={() => alert("Button Clicked!")}>
            Click Me
          </Button>
          <Button variant="warning" onClick={() => alert("Button Clicked!")}>
            Click Me
          </Button>
          <Button variant="info" onClick={() => alert("Button Clicked!")}>
            Click Me
          </Button>
          <Button variant="light" onClick={() => alert("Button Clicked!")}>
            Click Me
          </Button>
          <Button variant="dark" onClick={() => alert("Button Clicked!")}>
            Click Me
          </Button>
        </div>

        <Button variant="primary" onClick={() => setIsModalOpen(true)}>
          Open Modal
        </Button>
        <Button variant="info" onClick={() => setIsBottomSheetOpen(true)}>
          Open Bottom Sheet
        </Button>

        <Dropdown
          id="dropdown"
          title={<Button variant="primary">Open Dropdown</Button>}
        >
          <DropdownItem className="bg-red-100">Dropdown Item 1</DropdownItem>
          <DropdownItem>
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => alert("Dropdown Button Clicked!")}
            >
              Button
            </Button>
          </DropdownItem>
          <DropdownItem>Dropdown Item 3</DropdownItem>
          <DropdownItem>Dropdown Item 4</DropdownItem>
        </Dropdown>

        <div className="col-span-2 space-y-4">
          <Accordion
            id="accordion1"
            ttitle="Accordion Title"
            content={
              <>
                <p>
                  This is the content of the accordion. It can be any React
                  node.
                </p>
                <p>You can put text, images, or even other components here.</p>
              </>
            }
          />
          <Accordion
            id="accordion2"
            className="bg-red-500 text-white"
            ttitle="Another Accordion"
            content={
              <>
                <p>
                  This is another accordion content. It also can be any React
                  node.
                </p>
                <p>Feel free to customize it as you like.</p>
              </>
            }
          />

          {/* side menu links */}
          <Accordion
            id="accordion3"
            ttitle="Side Menu"
            content={
              <div className="space-y-2">
                <a
                  href="#"
                  className="block px-4 py-2 rounded hover:bg-gray-200"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded hover:bg-gray-200"
                >
                  About
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded hover:bg-gray-200"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded hover:bg-gray-200"
                >
                  Contact
                </a>
              </div>
            }
          />
        </div>

        <Button variant="primary" onClick={() => showAlert()}>
          Show Alert
        </Button>
      </div>
    </>
  );
}

export default App;
