import { Textarea, Button } from '@mantine/core';

export default function Review() {
  return (
    <div>
      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        autosize
        minRows={3}
        mb="sm"
      />
      <Button variant="filled" color="orange" mb="sm">Submit Review</Button>
    </div>
  )
}