import { Text, Rating } from "@mantine/core";

export default function Rating1() {
  return (
    <div>
      <Text size="lg" fw="bold">
        Your rating
      </Text>
      <Rating defaultValue={0} size="lg" mb="sm" />
    </div>
  )
}