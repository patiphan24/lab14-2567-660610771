"use client";
import { Container, Title, Pagination, Group } from "@mantine/core";
import Rating from "@components/Rating";
import Review from "@components/Review";
import CommentReview from "@components/CommentReview";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <Container size="600px">
      <Title mb="sm" order={2}>Food Review 🍕</Title>

      <Rating />

      <Review />

      <CommentReview name="Elon Musk" rating={5} review="Best pizza in this world. I give you X score." />
      <CommentReview name="Mark Zuck" rating={4} review="My favourite part is pepperoni" />

      <Group justify="center">
        <Pagination total={20} color="orange" />
      </Group>

      <Footer year={2024} name="Patiphan Leknok" studentId="660610771" />
    </Container>
  );
}