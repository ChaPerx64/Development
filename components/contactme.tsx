import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@nextui-org/react";

export default function ContactMeButton(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} {...props}>
        Contact me
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Other media
              </ModalHeader>
              <ModalBody>
                <Link
                  href="https://raw.githubusercontent.com/ChaPerx64/Development/main/resources/CV Junior Backend Developer Chaian Par-ool Skill.pdf"
                  target="_blank"
                >
                  Download pdf
                </Link>
                <Link href="https://t.me/ChePar" target="_blank">
                  Telegram
                </Link>
                <p>
                  Mobile:{" "}
                  <Link href="tel:+381-62-932-70-32">+381-62-932-70-32</Link>
                </p>
                <Link href="mailto:chayan.par@gmail.com">
                  chayan.par@gmail.com
                </Link>
                <p>© 2023 Chaian Par-ool</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
