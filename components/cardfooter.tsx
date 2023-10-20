import { Button, CardFooter } from "@nextui-org/react";

export default function MainCardFooter({
  index,
  length,
  refer,
  state: [currSlide, setSlide],
  ...props
}) {
  return index == 0 ? (
    <CardFooter {...props}>
      <Button color="primary" onClick={() => setSlide(currSlide + 1)}>
        Next
      </Button>
    </CardFooter>
  ) : index == length - 1 ? (
    <CardFooter {...props}>
      <Button color="secondary" variant="ghost" onClick={() => setSlide(0)}>
        To the beginning
      </Button>
      <Button
        color="primary"
        variant="ghost"
        onClick={() => setSlide(currSlide - 1)}
      >
        Previous
      </Button>
    </CardFooter>
  ) : (
    <CardFooter {...props}>
      <Button
        color="primary"
        variant="ghost"
        onClick={() => setSlide(currSlide - 1)}
      >
        Previous
      </Button>
      <Button color="primary" onClick={() => setSlide(currSlide + 1)}>
        Next
      </Button>
    </CardFooter>
  );
}
