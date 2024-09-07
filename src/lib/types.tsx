export interface TermsAndConditionsProps {
  opened: boolean;
  close: () => void;
}

export interface CommentReviewProps {
  name: string;
  rating: number;
  review: string;
}

export interface FooterProps {
  year: number;
  name: string;
  studentId: string;
}