import { Text, Divider, Group, Rating } from '@mantine/core';
import { CommentReviewProps } from '@lib/types';

export default function CommentReview({ name, rating, review }: CommentReviewProps) {
  return (
    <div>
      <Divider mb="sm" />
      <Group justify='center'>
        <Text size="lg" fw="bold">
          {name}
        </Text>
        <Rating value={rating} readOnly />
      </Group>
      <Text c="gray" ta="center" size="sm" mb="sm">
        {review}
      </Text>
    </div >
  );
}