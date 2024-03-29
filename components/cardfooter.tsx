import { Button, CardFooter } from "@nextui-org/react";

export default function MainCardFooter({
  index,
  length,
  state: [currSlide, setSlide],
  ...props
}) {
  return index == 0 ? (
    <CardFooter
      {...props}
      className="flex flex-row justify-end space-x-unit-xs"
    >
      <Button color="primary" onClick={() => setSlide(currSlide + 1)}>
        Next
      </Button>
    </CardFooter>
  ) : index == length - 1 ? (
    <CardFooter
      {...props}
      className="flex flex-row justify-between space-x-unit-xs"
    >
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
    <CardFooter
      {...props}
      className="flex flex-row justify-end space-x-unit-xs"
    >
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
