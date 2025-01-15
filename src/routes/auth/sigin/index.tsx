import { Form } from "react-router-dom";
import { Button, Card, CardAction, CardBody, CardTitle, Input, Label } from "~/comp";

export default function Sigin () {
  return <section className="h-[100dvh] grid place-items-center">
    <Card className="min-w-[32rem]">
      <CardBody>
        <CardTitle>Sigin</CardTitle>
        <Form className="flex flex-col-reverse gap-2">
          <Input id="password" required type="password" />
          <Label htmlFor="password">Password:</Label>
          <Input id="username" required />
          <Label htmlFor="username">Username:</Label>
        </Form>
        <CardAction>
          <Button>Submit</Button>
        </CardAction>
      </CardBody>
    </Card>
  </section>
}
