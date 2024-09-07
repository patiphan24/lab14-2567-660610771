import { Text } from "@mantine/core";
import { FooterProps } from "@lib/types";

export default function Footer({ year, name, studentId }: FooterProps) {
  return (
    <Text ta="center" my="sm" c="gray" size="sm">
      Copyright © {year} {name} {studentId}
    </Text>
  );
}