import { Button, CardFooter } from "@nextui-org/react";

function scrollToNext(ref) {
  const targetcard = ref.current.nextElementSibling;
  targetcard?.scrollIntoView({ behavior: "smooth", inline: "center" });
}

function scrollToPrevious(ref) {
  const targetcard = ref.current.previousElementSibling;
  targetcard?.scrollIntoView({ behavior: "smooth", inline: "center" });
}

export default function MainCardFooter({ index, length, refer, ...props }) {
  return index == 0 ? (
    <CardFooter {...props}>
      <Button color="primary" onClick={() => scrollToNext(refer)}>
        Next
      </Button>
    </CardFooter>
  ) : index == length - 1 ? (
    <CardFooter {...props}>
      <Button
        color="primary"
        variant="ghost"
        onClick={() => scrollToPrevious(refer)}
      >
        Previous
      </Button>
    </CardFooter>
  ) : (
    <CardFooter {...props}>
      <Button
        color="primary"
        variant="ghost"
        onClick={() => scrollToPrevious(refer)}
      >
        Previous
      </Button>
      <Button color="primary" onClick={() => scrollToNext(refer)}>
        Next
      </Button>
    </CardFooter>
  );
}
